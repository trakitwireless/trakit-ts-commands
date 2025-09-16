import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * 
 **/
export class RepIconBatchMerge extends Reply {
	/**
	 * 
	 **/
	icons: ContentIdCompany[] | nothing;

	constructor(json: any) {
		super(json);
		this.icons = json?.icons?.map((i: any) => new ContentIdCompany(i));
	}
}