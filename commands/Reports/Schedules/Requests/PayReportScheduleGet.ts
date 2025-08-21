import { PayReportSchedule } from "./PayReportSchedule";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="ReportSchedule"/>.
 **/
export class PayReportScheduleGet extends PayReportSchedule implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="ReportSchedule"/> (if it exists).
	 **/
	includeDeleted: boolean;}