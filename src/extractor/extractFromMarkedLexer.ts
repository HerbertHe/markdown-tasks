import { marked } from "marked"
import { TaskTokensType } from "../engine"

class TaskTokens {
    private _items: marked.Token[] = []
    private _tokens: TaskTokensType = []
    private _depth: number = 1

    constructor(items: marked.Token[]) {
        this._items = items
    }

    go = () => {
        this.generateTaskTokens(this._items)
        return this._tokens
    }

    generateTaskTokens = (items: marked.Token[]) => {
        if (items.length === 0) {
            return
        }

        for (let item of items) {
            if (item.type === "list") {
                let list = item as marked.Tokens.List
                this.generateTaskTokens(list.items)
            }

            if (item.type === "list_item") {
                let list_item = item as marked.Tokens.ListItem
                if (list_item.task) {
                    // 处理第一项
                    const [text] = list_item.tokens
                    this._tokens.push({
                        depth: this._depth,
                        content: (<marked.Tokens.Text>text).text,
                        checked: list_item.checked,
                    })
                    this._depth++
                    this.generateTaskTokens(list_item.tokens.slice(1))
                    this._depth--
                }
            }
        }
    }
}

/**
 * Extract task tokens via marked
 * @param markdown
 * @returns
 */
export const extractFromMarkedLexer = (markdown: string) => {
    const lexer = marked.lexer(markdown)
    const filter = lexer.filter(
        (item) =>
            item.type === "list" && !!item.items && item.items.length !== 0
    )

    return new TaskTokens(filter).go()
}
