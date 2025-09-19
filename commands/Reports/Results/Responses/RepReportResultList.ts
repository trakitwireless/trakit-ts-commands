import { ContentId } from "commands/API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";
import { nothing, ReportResult } from "@trakit/objects";
/**
 * A container for the requested {@link reportResults}.
 **/
export abstract class RepReportResultList extends Reply {
	/**
	 * The list of requested {@link ReportResult}s.
	 **/
	reportResults: ReportResult[] | nothing;

	constructor(json: any) {
		super(json);
		this.reportResults = json?.reportResults?.map((e: any) => new ReportResult(e));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepReportResultListByCompany extends RepReportResultList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}