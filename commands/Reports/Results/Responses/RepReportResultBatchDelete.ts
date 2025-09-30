import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link reportResult}.
 **/
export class RepReportResultBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ReportResult}.
	 **/
	reportResults: ContentIdDeleted[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.reportResults = (json.reportResults as JsonObject[])?.map((e: any) => new ContentIdDeleted(e));
	}
}