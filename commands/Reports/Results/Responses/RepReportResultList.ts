import { Reply } from "../../../API/Responses/Reply";
import { RepReportResultList } from "./RepReportResultList";

/**
 * A container for the requested {@link reportResults}.
 **/
export abstract class RepReportResultList extends Reply {
	/**
	 * The list of requested {@link ReportResult}s.
	 **/
	reportResults: ReportResult[];
	}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepReportResultListByCompany extends RepReportResultList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;}