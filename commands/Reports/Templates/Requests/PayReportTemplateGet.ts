import { PayReportTemplate } from "./PayReportTemplate";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link ReportTemplate}.
 **/
export class PayReportTemplateGet extends PayReportTemplate implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ReportTemplate} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}