import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepBehaviourBatchMerge extends Reply {
	/**
	 * 
	 **/
	behaviours: ContentIdCompany[] | nothing;

	constructor(json?: any) {
		super(json);
		this.behaviours = json?.behaviours?.map((item: any) => new ContentIdCompany(item));
	}
}