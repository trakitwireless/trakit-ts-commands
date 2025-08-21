import { Reply } from "../../../API/Responses/Reply";
import { RepReportResultList } from "./RepReportResultList";

/**
 * A container for the requested <see cref="reportResults"/>.
 **/
export abstract class RepReportResultList extends Reply {
	/**
	 * The list of requested <see cref="ReportResult"/>s.
	 **/
	reportResults: ReportResult[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepReportResultListByCompany extends RepReportResultList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}