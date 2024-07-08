import TextLintTester from "textlint-tester";
import rule from "../src/index";

const tester = new TextLintTester();
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        "Hello, World!",
        {
            text: "مرحباً، بالعالم!",
            options: {
                language: "arabic"
            }
        }
    ],
    invalid: [
        {
            text: "Hello، World؟",
            output: "Hello, World?",
            errors: [
                {
                    message: `Found arabic comma in english text.`,
                    range: [5, 6]
                },
                {
                    message: `Found arabic question mark in english text.`,
                    range: [12, 13]
                },
            ]
        },
        {
            text: "يولد جميع الناس أحراراً، ومتساوين في الكرامة والحقوق, وهم قد وهبوا العقل والوجدان; وعليهم أن يعاملوا بعضهم بعضاً بروح الإخاء.",
            output: "يولد جميع الناس أحراراً، ومتساوين في الكرامة والحقوق، وهم قد وهبوا العقل والوجدان؛ وعليهم أن يعاملوا بعضهم بعضاً بروح الإخاء.",
            options: {
              language: "arabic"
            },
            errors: [
                {
                    message: `Found english comma in arabic text.`,
                    range: [52, 53]
                },
                {
                    message: `Found english semicolon in arabic text.`,
                    range: [81, 82]
                }
            ]
        },
    ]
});
