import { nothing, ReportSchedule } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "../../../API/Responses/Content/ContentId";


/**
 * A container for the requested {@link reportSchedules}.
 **/
export abstract class RepReportScheduleList extends Reply {
	/**
	 * The list of requested {@link ReportSchedule}s.
	 **/
	reportSchedules: ReportSchedule[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.reportSchedules = json?.reportSchedules?.map((e: any) => new ReportSchedule(e));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepReportScheduleListByCompany extends RepReportScheduleList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}