import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import reactPlugin from "eslint-plugin-react";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: { react: reactPlugin },
    rules: {
      // Sito con molto testo in italiano: apostrofi e virgolette nel JSX
      // sono voluti. Restano vietati solo > e } (refusi reali).
      "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Tooling locale, non fa parte del sito
    ".claude/**",
  ]),
]);

export default eslintConfig;
