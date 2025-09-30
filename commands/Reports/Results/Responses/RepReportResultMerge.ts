import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link reportResult}.
 **/
export class RepReportResultMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	reportResult: ContentIdCompany | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.reportResult = ContentIdCompany.fromJSON(json?.reportResult as JsonObject);
	}
}