import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayReportResultList } from "./PayReportResultList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified @link {reportResult}.
 **/
export abstract class PayReportResultList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted @link {ReportResult}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the @link {Company.id} of the collection.
 **/
export class PayReportResultListByCompany extends PayReportResultList implements IPayListByCompany {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ParamId;}