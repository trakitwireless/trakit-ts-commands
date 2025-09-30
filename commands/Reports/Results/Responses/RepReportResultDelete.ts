import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link reportResult}.
 **/
export class RepReportResultDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ReportResult}.
	 **/
	reportResult: ContentIdDeleted | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.reportResult = ContentIdDeleted.fromJSON(json?.reportResult as JsonObject);
	}
}