@{%
import moo from "moo";

const lexer = moo.compile({
    ws: /[ \t]+/,
    keyword: /\b(?:group|type)\b/,
    for_keyword: /\b(?:for)\b/,
    bracket: /[\[\]\(\)\{\}]/,
    colon: /:/,
    property_operation: /[=+-]/,
    symbols: /[\*\/\%\^\&\|\=\<\>\!\?\;\,\.\$]/,
    number: /\b\d+\b/,
    at: /@/,
    hash: /#/,
    new_line: {match: /\n/, lineBreaks: true},
    word: /[a-zA-Z]+/,
    other: /./,
})
%}

@lexer lexer
@preprocessor typescript

# Helpers
main -> _ lines _ {% d => d[1] %}

lines -> lines _ statement {% d => ([...d[0], d[2]]) %} | statement

# Statement

statement -> %keyword _ [^\s]:+ _ properties (_ for_entry):? {%
    d => ({
        item: d[0].value,
        type: d[2].map((i: any) => i.value).join(""),
        properties: d[4],
        for: d[5]?.[1] ?? undefined,
    })
%}

properties -> "{" _ property_list _ "}" {%
    d => d[2]
%}

property_list -> property_list _nll "\n" _ property {% d => ([...d[0], d[4]]) %} | property

property -> [^\s=\+\-]:+ _ property_operation _ comma_separated_item {%
    d => ({
        key: d[0].map((i: any) => i.value).join(""),
        value: d[4],
        operation: d[2][0].value,
    })
%} | [^\s=\+\-\n}]:+ {%
     d => ({
         key: d[0].map((i: any) => i.value).join(""),
         value: ["true"],
         operation: "=",
     })
 %}

for_entry -> "for" _ "[" (_ for_list):? _ "]" {%
    d => d[3]?.[1]
%}

for_list -> for_list _nll %new_line _ for_item {% d => ([...d[0], d[4]]) %} | for_item

for_item -> comma_separated_item (_nll properties):? {%
    d => ({
        values: d[0],
        properties: d[1]?.[1] ?? undefined,
    })
%}

comma_separated_item -> comma_separated_item _nll comma _nll item {% d => ([...d[0], d[4]]) %} | item

item -> [^\,\n\{\s] ([^\,\n\{]:* [^\,\n\{\s]):? {% d => [d[0].value, d[1]?.[0].map((i:any) => i.value).join(""), d[1]?.[1].value].filter(i => i).join("") %}

# Aliases
property_operation -> %property_operation
comma -> ","
_ -> (%ws | %new_line | comment):* {% d => null %}
_nll -> (%ws | comment):* {% d => null %}
__ -> (%ws | %new_line | comment):+ {% d => null %}
__nll -> (%ws | comment):+ {% d => null %}

# Comments

comment -> single_line_comment | multi_line_comment {%
    d => d[0]
%}

single_line_comment -> "#" [^\n]:* %new_line {%
    d => null
%}

multi_line_comment -> "#" "#" [^]:+ "#" "#" {%
    d => null
%}
