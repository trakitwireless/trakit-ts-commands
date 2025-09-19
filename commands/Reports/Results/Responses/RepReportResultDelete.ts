import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link reportResult}.
 **/
export class RepReportResultDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link ReportResult}.
	 **/
	reportResult: ContentIdDeleted | nothing;
	
	constructor(json: any) {
		super(json);
		this.reportResult = ContentIdDeleted.fromJSON(json?.reportResult);
	}
}