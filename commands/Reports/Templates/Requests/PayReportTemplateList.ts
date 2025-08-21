import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayReportTemplateList } from "./PayReportTemplateList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified <see cref="reportTemplate"/>.
 **/
export abstract class PayReportTemplateList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="ReportTemplate"/>s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayReportTemplateListByCompany extends PayReportTemplateList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;}