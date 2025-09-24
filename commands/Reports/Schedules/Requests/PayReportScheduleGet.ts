import { PayReportSchedule } from "./PayReportSchedule";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link ReportSchedule}.
 **/
export class PayReportScheduleGet extends PayReportSchedule implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ReportSchedule} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json: any): Reply {
		return new RepReportScheduleGet(json);
	}
}