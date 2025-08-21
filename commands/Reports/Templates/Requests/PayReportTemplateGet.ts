import { PayReportTemplate } from "./PayReportTemplate";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="ReportTemplate"/>.
 **/
export class PayReportTemplateGet extends PayReportTemplate implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="ReportTemplate"/> (if it exists).
	 **/
	includeDeleted: boolean;}