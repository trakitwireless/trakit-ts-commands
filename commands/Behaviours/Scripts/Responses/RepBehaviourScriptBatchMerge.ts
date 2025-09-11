import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 **/
export class RepBehaviourScriptBatchMerge extends Reply {
	/**
	 * 
	 **/
	behaviourScripts: ContentIdCompany[];

	constructor(json?: any) {
		super(json);
		this.behaviourScripts = json?.behaviourScripts?.map((x: any) => new ContentIdCompany(x));
	}
}