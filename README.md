# textlint-rule-no-mixed-punctuations [![Actions Status: test](https://github.com/aborazmeh/textlint-rule-no-mixed-punctuations/workflows/test/badge.svg)](https://github.com/aborazmeh/textlint-rule-no-mixed-punctuations/actions?query=workflow%3A"test") [![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/)

prevents the mixing of LTR and RTL punctuations

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-no-mixed-punctuations

## Fixable

[![textlint rule](https://img.shields.io/badge/textlint-fixable-green.svg?style=social)](https://textlint.github.io/) 

```
textlint --rule no-mixed-punctuations --fix README.md
```

## Example

> "After a long, arduous journey through the dense forest، filled with towering trees and echoing sounds of wildlife؛ how did they finally find their way to the hidden, mystical waterfall, cascading down into a tranquil pool؟"

> "After a long, arduous journey through the dense forest, filled with towering trees and echoing sounds of wildlife; how did they finally find their way to the hidden, mystical waterfall, cascading down into a tranquil pool?"

## Usage

Via `.textlintrc.json`(Recommended)

```json
{
    "rules": {
        "no-mixed-punctuations": true
    }
}
```

Via CLI

```
textlint --rule no-mixed-punctuations README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

MIT © aborazmeh
