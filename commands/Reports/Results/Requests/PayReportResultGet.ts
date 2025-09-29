import { Reply } from "../../../API/Responses/Reply";
import { PayReportResult } from "./PayReportResult";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepReportResultGet } from "../Responses/RepReportResultGet";

/**
 * Gets details of the specified {@link ReportResult}.
 **/
export class PayReportResultGet extends PayReportResult implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ReportResult} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json?: JsonObject): Reply {
		return new RepReportResultGet(json);
	}
}