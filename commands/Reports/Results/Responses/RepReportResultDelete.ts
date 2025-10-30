import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link reportResult}.
 **/
export class RepReportResultDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link ReportResult}.
	 **/
	reportResult: ContentIdDeleted | nothing;
	
	constructor(json: JsonObject) {
		super(json, "ReportResult");
		this.reportResult = ContentIdDeleted.fromJSON(json?.reportResult as JsonObject);
	}
	protected override _getKey() { return this.reportResult?.id as ulong; }
}