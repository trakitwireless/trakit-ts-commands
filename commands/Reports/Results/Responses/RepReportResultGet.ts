import { nothing, ReportResult } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link reportResult}.
 **/
export class RepReportResultGet extends Reply {
	/**
	 * The requested {@link ReportResult}.
	 **/
	reportResult: ReportResult | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.reportResult = json?.reportResult
			? new ReportResult(json.reportResult)
			: null;
	}
}