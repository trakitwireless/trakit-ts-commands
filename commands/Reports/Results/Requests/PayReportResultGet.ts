import { PayReportResult } from "./PayReportResult";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="ReportResult"/>.
 **/
export class PayReportResultGet extends PayReportResult implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="ReportResult"/> (if it exists).
	 **/
	includeDeleted: boolean;}