import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 **/
export class RepDispatchTaskBatchMerged extends Reply {
	/**
	 * 
	 **/
	dispatchTasks: ContentIdCompany[];

	constructor(json: any) {
		super(json);
		this.dispatchTasks = json?.dispatchTasks?.map((dt: any) => new ContentIdCompany(dt));
	}
}