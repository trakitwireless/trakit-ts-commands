import { Reply } from "../../../API/Responses/Reply";
import { RepReportScheduleList } from "./RepReportScheduleList";

/**
 * A container for the requested @link {reportSchedules}.
 **/
export abstract class RepReportScheduleList extends Reply {
	/**
	 * The list of requested @link {ReportSchedule}s.
	 **/
	reportSchedules: ReportSchedule[];
	}

/**
 * Contains the @link {Company.id} of the collection.
 **/
export class RepReportScheduleListByCompany extends RepReportScheduleList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;}