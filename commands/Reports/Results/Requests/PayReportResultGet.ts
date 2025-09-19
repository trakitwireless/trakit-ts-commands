import { PayReportResult } from "./PayReportResult";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link ReportResult}.
 **/
export class PayReportResultGet extends PayReportResult implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ReportResult} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}