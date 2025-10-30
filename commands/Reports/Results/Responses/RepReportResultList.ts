import { JsonObject, nothing, ReportResult } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link reportResults}.
 **/
export abstract class RepReportResultList extends ReplySyncList<ReportResult> {
	/**
	 * The list of requested {@link ReportResult}s.
	 **/
	reportResults: ReportResult[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ReportResult");
		this.reportResults = (json?.reportResults as JsonObject[])?.map((e: any) => new ReportResult(e));
	}
	override getCollection() { return this.reportResults as ReportResult[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepReportResultListByCompany extends RepReportResultList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}