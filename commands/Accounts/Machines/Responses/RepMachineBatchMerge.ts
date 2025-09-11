import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepMachineBatchMerge extends Reply {
	/**
	 * 
	 **/
	machines: ContentIdCompany[] | nothing;

	constructor(json: any) {
		super(json);
		this.machines = json?.machines?.map((m: any) => new ContentIdCompany(m));
	}
}