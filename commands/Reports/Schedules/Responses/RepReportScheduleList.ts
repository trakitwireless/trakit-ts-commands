import { email, guid, JsonObject, nothing, ReportResult, ReportSchedule, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";


/**
 * A container for the requested {@link reportSchedules}.
 **/
export abstract class RepReportScheduleList extends ReplySyncList<ReportSchedule> {
	/**
	 * The list of requested {@link ReportSchedule}s.
	 **/
	reportSchedules: ReportSchedule[] | nothing;
	
	constructor(json: JsonObject) {
		super(json, "ReportSchedule");
		this.reportSchedules = (json?.reportSchedules as JsonObject[])?.map((e: any) => new ReportSchedule(e));
	}
	override getCollection() { return this.reportSchedules as ReportSchedule[]; }
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
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [string | guid | email | ulong, ReportSchedule], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
}