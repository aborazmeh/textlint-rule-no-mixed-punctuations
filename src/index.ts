import type { TextlintRuleModule } from "@textlint/types";

export interface Options {
    language?: 'arabic' | 'english',
}

const punctuations = [
    {
        name: "comma",
        characters: {
            english: ',',
            arabic: '،',
        }
    },
    {
        name: "question mark",
        characters: {
            english: '?',
            arabic: '؟',
        }
    },
    {
        name: "semicolon",
        characters: {
            english: ';',
            arabic: '؛',
        }
    },
]

const excapeRegex = (x: string) => x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const report: TextlintRuleModule<Options> = (context, options = {}) => {
    const { Syntax, RuleError, fixer, report, getSource, locator } = context;
    const defaultLang = options.language ?? 'english'
    return {
        [Syntax.Str](node) { // "Str" node
            const text = getSource(node); // Get text

            punctuations.forEach(p => {
              const name = p.name
              for (const lang in p.characters) {
                    const char = p.characters[lang as keyof typeof p.characters]
                    if (lang === defaultLang) {
                        continue
                    }

                    const matches = text.matchAll(new RegExp(excapeRegex(char), 'g'));
                    for (const match of matches) {
                        const index = match.index ?? 0;
                        const matchRange = [index, index + match[0].length] as const;
                        const replace = fixer.replaceTextRange(matchRange, p.characters[defaultLang])
                        const ruleError = new RuleError(`Found ${lang} ${name} in ${defaultLang} text.`, {
                            padding: locator.range(matchRange),
                            fix: replace
                        });
                        report(node, ruleError);
                    }
                }
            })

        }
    }
};

export default {
    linter: report,
    fixer: report
}
