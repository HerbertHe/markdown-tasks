export interface ITasksTokens {}

/**
 * TasksEngine
 */
export class TasksEngine {
    private _tokens: ITasksTokens
    constructor(tokens: ITasksTokens) {
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
