import { Operation, Property } from "./czParser";
import * as mathjs from "mathjs";

type CZPropertyValue = string;

export class CZReference {
  constructor(public readonly value: string) {}
}

export class CZPropertyItem {
  key: string;

  excludeAll = false;
  include: CZPropertyValue[] = [];
  exclude: CZPropertyValue[] = [];

  constructor(key: string) {
    this.key = key;
  }

  reset() {
    this.excludeAll = true;
    this.include = [];
    this.exclude = [];
  }

  add(...values: CZPropertyValue[]) {
    this.include = [...this.include, ...values];
    if (!this.excludeAll) this.exclude = this.exclude.filter(v => !values.includes(v));
  }

  remove(...values: CZPropertyValue[]) {
    if (!this.excludeAll) this.exclude = [...this.exclude, ...values];
    this.include = this.include.filter(v => !values.includes(v));
  }

  get string() {
    return this.include[0];
  }

  get requiredString() {
    if (this.include[0] === undefined) throw new Error(`Required string not found for ${this.key}`);

    return this.include[0]!;
  }

  get number() {
    return this.include[0] === undefined ? undefined : Number(this.include[0]);
  }

  get requiredNumber() {
    if (this.include[0] === undefined) throw new Error(`Required number not found for ${this.key}`);

    return Number(this.include[0]);
  }

  get references() {
    return this.include.map(i => new CZReference(i));
  }
}

export class CZPropertySet {
  private propertiesMap = new Map<string, CZPropertyItem>();

  get properties() {
    return [...this.propertiesMap.values()];
  }

  constructor(
    properties: Property[] | CZPropertyItem[],
    mergeFrom?: CZPropertySet,
    index = 0,
    usedProperties = new Set<CZPropertyItem>()
  ) {
    this.usedProperties = usedProperties;

    if (properties[0] instanceof CZPropertyItem) {
      for (const property of properties) {
        this.propertiesMap.set(property.key, property as CZPropertyItem);
      }
      return;
    }

    this.mergeFrom = mergeFrom;
    this.unusedProperties = new Set(mergeFrom?.properties);
    this.index = index;

    for (const property of usedProperties) {
      this.unusedProperties.delete(property);
    }

    for (const property of properties) {
      this.addProperty(property as Property);
    }
  }

  private mergeFrom?: CZPropertySet;
  private readonly unusedProperties!: Set<CZPropertyItem>;
  public readonly usedProperties: Set<CZPropertyItem>;

  private used(property: CZPropertyItem) {
    this.usedProperties.add(property);
    this.unusedProperties.delete(property);
  }

  private readonly index: number = 0;

  private resolveValuesAndApply(key: string, values: string[], inverse: boolean) {
    for (const value of values) {
      if (value.startsWith("$") && !value.startsWith("$(")) {
        const property = this.mergeFrom?.getProperty(value.slice(1));
        if (!property) {
          throw new Error(`Property ${value} not found`);
        }
        this.used(property);
        if (!inverse && property.excludeAll) this.getProperty(key).reset();
        this.getProperty(key)[inverse ? "add" : "remove"](...property.exclude);
        this.getProperty(key)[inverse ? "remove" : "add"](...property.include);
        return;
      }
      const updatedValue = value
        .replace(/\$\(\([^)]+\)\)/g, i => {
          const expression = i.slice(3, -2);
          const properties = {
            get: (key: string) => {
              if (key === "_index") return this.index;
              const property = this.mergeFrom?.getProperty(key);
              if (!property) {
                throw new Error(`Property ${i} not found`);
              }
              this.used(property);
              return property.number;
            },
            set: (key: string) => {
              throw new Error(`Cannot set property ${key}`);
            },
            has: (key: string) => {
              if (key === "end") return false;
              return this.mergeFrom?.getProperty(key) !== undefined;
            },
            keys: () => {
              return this.mergeFrom?.properties.map(p => p.key).filter(i => i !== "end");
            },
          };
          return mathjs.evaluate(expression, properties).toString();
        })
        .replace(/\$\([^)]+\)/g, i => {
          const property = this.mergeFrom?.getProperty(i.slice(2, -1));
          if (!property) {
            throw new Error(`Property ${i} not found`);
          }
          this.used(property);
          return property.include[0];
        });
      this.getProperty(key)[inverse ? "remove" : "add"](updatedValue);
    }
  }

  private addProperty(property: Property) {
    if (property.key === "...rest") {
      if (property.value[0] === "true") {
        for (const unusedProperty of this.unusedProperties) {
          if (unusedProperty.excludeAll) this.getProperty(unusedProperty.key).reset();
          this.getProperty(unusedProperty.key).remove(...unusedProperty.exclude);
          this.getProperty(unusedProperty.key).add(...unusedProperty.include);
        }
      }
      return;
    }

    if (property.operation === Operation.Equals) {
      this.getProperty(property.key).reset();
      this.resolveValuesAndApply(property.key, property.value, false);
    } else if (property.operation === Operation.Plus) {
      this.resolveValuesAndApply(property.key, property.value, false);
    } else if (property.operation === Operation.Minus) {
      this.resolveValuesAndApply(property.key, property.value, true);
    }
  }

  private getProperty(key: string) {
    if (!this.propertiesMap.has(key)) {
      this.propertiesMap.set(key, new CZPropertyItem(key));
    }
    return this.propertiesMap.get(key)!;
  }

  get(id: string) {
    const property = this.getProperty(id);
    return property.include;
  }
}
