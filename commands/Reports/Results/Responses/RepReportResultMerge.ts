import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link reportResult}.
 **/
export class RepReportResultMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	reportResult: ContentIdCompany | nothing;
	
	constructor(json: any) {
		super(json);
		this.reportResult = ContentIdCompany.fromJSON(json?.reportResult);
	}
}