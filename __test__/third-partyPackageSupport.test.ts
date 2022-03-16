import { marked } from "marked"
import fs from "fs"
import path from "path"

import { extractFromMarkedLexer } from "../src/extractor/extractFromMarkedLexer"


test("Adapt marked Lexer", () => {
	const md = fs.readFileSync(path.join(__dirname, "docs/test.md")).toString()
	extractFromMarkedLexer(md)
})
