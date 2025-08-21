import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayReportScheduleList } from "./PayReportScheduleList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified @link {reportSchedule}.
 **/
export abstract class PayReportScheduleList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted @link {ReportSchedule}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the @link {Company.id} of the collection.
 **/
export class PayReportScheduleListByCompany extends PayReportScheduleList implements IPayListByCompany {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ParamId;}