import { JsonObject, nothing, ReportResult, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link reportResult}.
 */
export class RepReportResultGet extends ReplySyncGet<ReportResult> {
	/**
	 * The requested {@link ReportResult}.
	 */
	reportResult: ReportResult | nothing;
	
	constructor(json: JsonObject) {
		super(json, "ReportResult");
		if (json?.reportResult) {
			this.reportResult = new ReportResult(json.reportResult as JsonObject);
		}
	}
	override getObject() { return this.reportResult as ReportResult; }
	override getCompanyId() { return this.reportResult?.companyId as ulong; }
}