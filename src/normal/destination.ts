import { Group } from "../common/group";
import { TypeTags, Type, TypeHidden } from "../common/type";
import { normalGroup } from "./_index";

export class DestinationRoomsType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([destinationGroup]).addTag(
      TypeTags.TypeDestination,
      TypeTags.DestinationRooms
    );
  }
}
export class DestinationBouncerType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([destinationGroup]).addTag(
      TypeTags.TypeDestination,
      TypeTags.DestinationBouncer
    );
  }
}

export class DestinationRoomType extends Type {
  override template(): this {
    super.template();
    return this.setGroup([destinationGroup])
      .addTags(TypeTags.TypeDestination, TypeTags.DestinationRoom)
      .addHidden(TypeHidden.Inventory);
  }
}

export const destinationGroup = new Group({
  name: "Destinations",
  human_id: "destination",
}).addParent(normalGroup);

export const n1StarMotel = new DestinationRoomsType("1 Star Motel", 70)
  .physical()
  .destinationSize(5)
  .destinationStarLevel(1);
export const n2StarMotel = new DestinationRoomsType("2 Star Motel", 2356)
  .physical()
  .destinationSize(10)
  .destinationStarLevel(2)
  .addHidden(TypeHidden.Inventory);
export const n3StarMotel = new DestinationRoomsType("3 Star Motel", 2358)
  .physical()
  .destinationSize(15)
  .destinationStarLevel(3)
  .addHidden(TypeHidden.Inventory);

export const n1StarMotelRoom = new DestinationRoomType("1 Star Motel Room", 71)
  .physical()
  .destinationStarLevel(1)
  .destinationRoomOf(n1StarMotel);
export const n2StarMotelRoom = new DestinationRoomType("2 Star Motel Room", 2357)
  .physical()
  .destinationStarLevel(2)
  .destinationRoomOf(n2StarMotel);
export const n3StarMotelRoom = new DestinationRoomType("3 Star Motel Room", 2359)
  .physical()
  .destinationStarLevel(3)
  .destinationRoomOf(n3StarMotel);

export const n2StarHotel = new DestinationRoomsType("2 Star Hotel", 170)
  .physical()
  .addIcon("hotel")
  .destinationSize(10);
export const n3StarHotel = new DestinationRoomsType("3 Star Hotel", 3341)
  .physical()
  .destinationSize(15)
  .addHidden(TypeHidden.Inventory);
export const n4StarHotel = new DestinationRoomsType("4 Star Hotel", 3343)
  .physical()
  .destinationSize(20)
  .addHidden(TypeHidden.Inventory);

export const n2StarHotelRoom = new DestinationRoomType("2 Star Hotel Room", 171)
  .physical()
  .addIcon("hotelroom")
  .destinationRoomOf(n2StarHotel);
export const n3StarHotelRoom = new DestinationRoomType("3 Star Hotel Room", 3342)
  .physical()
  .destinationRoomOf(n3StarHotel);
export const n4StarHotelRoom = new DestinationRoomType("4 Star Hotel Room", 3344)
  .physical()
  .destinationRoomOf(n4StarHotel);

export const n3StarVirtualResort = new DestinationRoomsType("3 Star Virtual Resort", 470)
  .virtual()
  .setIcons("3starresort", "virtual_resort")
  .destinationSize(15);
export const n4StarVirtualResort = new DestinationRoomsType("4 Star Virtual Resort", 2937)
  .virtual()
  .setIcon("4starresort")
  .destinationSize(20)
  .addHidden(TypeHidden.Inventory);
export const n5StarVirtualResort = new DestinationRoomsType("5 Star Virtual Resort", 2939)
  .virtual()
  .setIcon("5starresort")
  .destinationSize(25)
  .addHidden(TypeHidden.Inventory);

export const n3StarVirtualResortRoom = new DestinationRoomType("3 Star Virtual Resort Room", 471)
  .virtual()
  .setIcons("3starresortroom", "virtual_resort_room")
  .destinationRoomOf(n3StarVirtualResort);
export const n4StarVirtualResortRoom = new DestinationRoomType("4 Star Virtual Resort Room", 2938)
  .virtual()
  .setIcon("4starresortroom")
  .destinationRoomOf(n4StarVirtualResort);
export const n5StarVirtualResortRoom = new DestinationRoomType("5 Star Virtual Resort Room", 2940)
  .virtual()
  .setIcon("5starresortroom")
  .destinationRoomOf(n5StarVirtualResort);

export const timeShare = new DestinationRoomsType("Time Share", 970)
  .physical()
  .destinationSize(5)
  .addTag(TypeTags.DestinationTemporary);
export const timeShareRoom = new DestinationRoomType("Time Share Room", 971)
  .physical()
  .destinationRoomOf(timeShare)
  .addTag(TypeTags.DestinationTemporary);

export const vacationCondo = new DestinationRoomsType("Vacation Condo", 2183)
  .virtual()
  .destinationSize(5)
  .addTag(TypeTags.DestinationTemporary);
export const vacationCondoRoom = new DestinationRoomType("Vacation Condo Room", 2184)
  .virtual()
  .destinationRoomOf(vacationCondo)
  .addTag(TypeTags.DestinationTemporary);

export const treehouse = new DestinationBouncerType("Treehouse", 2145)
  .physical()
  .destinationSize(6);

export const skyland = new DestinationBouncerType("Skyland", 2426).virtual().destinationSize(6);

export const tPOBPub = new DestinationBouncerType("tPOB Pub").virtual().destinationSize(6);
