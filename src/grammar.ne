@{%
import moo from "moo";

const lexer = moo.compile({
    ws: /[ \t]+/,
    template: /\b(?:template)\b/,
    from: /\b(?:from)\b/,
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
main -> _ (lines _):? {% d => d[1]?.[0] ?? [] %}

lines -> lines _ statement {% d => ([...d[0], d[2]]) %} | statement

# Statement

statement -> template_from_statement {% d => d[0] %} | template_statement {% d => d[0] %} | builder_statement {% d => d[0] %}

template_from_statement -> %template _ [^\s]:+ _ %from _ [^\s]:+ _ properties (_ for_entry):? {%
    d => ({
        item: "template",
        type: d[2].map((i: any) => i.value).join(""),
        items: [
            {
                item: "new",
                type: d[6].map((i: any) => i.value).join(""),
                properties: [...d[8], {key: "...rest", value: [["true"]], operation: "="}],
                for: d[9]?.[1] ?? undefined,
            }
        ]
    })
%}

template_statement -> %template _ [^\s]:+ _ "{" _ template_internal_list _ "}" {%
    d => ({
        item: "template",
        type: d[2].map((i: any) => i.value).join(""),
        items: d[6],
    })
%}

template_internal_list -> template_internal_list _nll "\n" _ builder_statement {% d => ([...d[0], d[4]]) %} | builder_statement

builder_statement -> [^\s]:+ _ properties (_ for_entry):? {%
    d => ({
        item: "builder",
        type: d[0].map((i: any) => i.value).join(""),
        properties: d[2],
        for: d[3]?.[1] ?? undefined,
    })
%}

properties -> "{" _ property_list _ "}" {%
    d => d[2]
%}

property_list -> property_list _nll "\n" _ property {% d => ([...d[0], ...d[4]]) %} | property {% d => d[0] %}

property -> item_property | group_property {% d => d[0] %}

group_property -> [^\s=\+\-{]:+ _ properties {%
    d => {
        const key = d[0].map((i: any) => i.value).join("") + ".";
        return d[2].map((i: any) => ({
            key: key + i.key,
            value: i.value,
            operation: i.operation,
        }))
    }
%}

item_property -> [^\s=\+\-]:+ _ property_operation _ comma_separated_item {%
    d => ({
        key: d[0].map((i: any) => i.value).join(""),
        value: d[4],
        operation: d[2][0].value,
    })
%} | [^\s=\+\-\n}]:+ {%
     d => ({
         key: d[0].map((i: any) => i.value).join(""),
         value: [["true"]],
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

item -> item_expression {% id %} | item_with_interpolation {% id %}

item_expression -> minimal_expression {% id %}
item_with_interpolation -> non_ws_first_char (char:* non_ws_char):? {% d => [d[0], ...d[1]?.[0]??[], d[1]?.[1]].filter(i => i) %}

non_ws_first_char -> [^\,\n\{\s\\$\.] {% d => d[0].value %} | escaped_char {% id %} | bracketed_expression {% id %}
non_ws_char -> [^\,\n\{\s\\$] {% d => d[0].value %} | escaped_char {% id %} | bracketed_expression {% id %}

char -> [^\,\n\{\\$] {% d => d[0].value %} | escaped_char {% id %} | bracketed_expression {% id %}

escaped_char -> "\\" [^] {% d => d[1].value %}

minimal_expression -> "$" reference_expression {% d => d[1] %} | dot_reference_expression {% d => d[0] %}

bracketed_expression -> "$" "(" variable_expression ")" {% d => d[2] %}

variable_expression -> or_expression {% id %}
or_expression -> or_expression _ "|" "|" _ sum_expression {% d => ({type: "or", left: d[0], right: d[5]}) %} | sum_expression {% id %}
sum_expression -> sum_expression _ ("+"|"-") _ product_expression {% d => ({type: "calculation", operator: d[2][0].value, left: d[0], right: d[4]}) %} | product_expression {% id %}
product_expression -> product_expression _ ("*"|"/"|"%") _ value_expression {% d => ({type: "calculation", operator: d[2][0].value, left: d[0], right: d[4]}) %} | value_expression {% id %}
value_expression -> number_expression {% id %} | reference_expression {% id %} | dot_reference_expression {% id %}
number_expression -> [0-9]:+ {% d => ({type:"number", value: d[0].map(i => i.value).join("")}) %}
reference_expression -> [^()\s0-9\.] [^()\s]:* {% d => ({type:"reference", value: [d[0], ...d[1]].map(i => i.value).join("")}) %}
dot_reference_expression -> "." [^()\s]:+ {% d => ({type:"dot_reference", value: d[1].map(i => i.value).join("")}) %}

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
