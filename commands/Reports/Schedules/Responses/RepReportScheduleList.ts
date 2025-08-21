import { Reply } from "../../../API/Responses/Reply";
import { RepReportScheduleList } from "./RepReportScheduleList";

/**
 * A container for the requested <see cref="reportSchedules"/>.
 **/
export abstract class RepReportScheduleList extends Reply {
	/**
	 * The list of requested <see cref="ReportSchedule"/>s.
	 **/
	reportSchedules: ReportSchedule[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepReportScheduleListByCompany extends RepReportScheduleList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}