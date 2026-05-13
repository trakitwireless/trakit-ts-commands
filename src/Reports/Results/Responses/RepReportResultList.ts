import { codified, email, guid, JsonObject, nothing, ReportResult, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link reportResults}.
 */
export abstract class RepReportResultList extends ReplySyncList<ReportResult> {
	/**
	 * The list of requested {@link ReportResult}s.
	 */
	reportResults: ReportResult[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ReportResult");
		this.reportResults = (json?.reportResults as JsonObject[])?.map((e: any) => new ReportResult(e));
	}
	override getList() { return this.reportResults as ReportResult[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 */
export class RepReportResultListByCompany extends RepReportResultList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, ReportResult], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}