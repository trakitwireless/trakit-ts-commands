import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link reportResult}.
 **/
export class RepReportResultBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ReportResult}.
	 **/
	reportResults: ContentIdDeleted[] | nothing;
	
	constructor(json: any) {
		super(json);
		this.reportResults = json.reportResults?.map((e: any) => new ContentIdDeleted(e));
	}
}