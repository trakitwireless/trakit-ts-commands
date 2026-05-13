import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 */
export class RepIconBatchMerge extends Reply {
	/**
	 * 
	 */
	icons: ContentIdCompany[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.icons = (json?.icons as JsonObject[])?.map((i: any) => new ContentIdCompany(i));
	}
}