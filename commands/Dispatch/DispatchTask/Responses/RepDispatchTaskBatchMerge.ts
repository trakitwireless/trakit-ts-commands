import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 **/
export class RepDispatchTaskBatchMerge extends Reply {
	/**
	 * 
	 **/
	dispatchTasks: ContentIdCompany[];

	constructor(json: JsonObject) {
		super(json);
		this.dispatchTasks = json?.dispatchTasks?.map((dt: any) => new ContentIdCompany(dt));
	}
}