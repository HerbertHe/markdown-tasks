/**
 * @param depth 深度
 * @param checked 勾选情况
 * @param content 内容
 */
export interface ITasksToken {
	depth: number
	checked: boolean
	content: string
}

export type TaskTokensType = Array<ITasksToken>

/**
 * TasksEngine
 */
export class TasksEngine {
    private _tokens: TaskTokensType
    constructor(tokens: TaskTokensType) {
        this._tokens = tokens
    }

	/**
	 * Mount to render Tasks Tree
	 * @param el HTML Element
	 */
    renderTasksTree = (el: string) => {}

	/**
	 * Mount to render Rate Of Progress
	 * @param el HTML Element
	 */
    renderRateOfProgress = (el: string) => {}
}
