import { Reply } from "../../../API/Responses/Reply";
import { RepReportTemplateList } from "./RepReportTemplateList";

/**
 * A container for the requested <see cref="reportTemplates"/>.
 **/
export abstract class RepReportTemplateList extends Reply {
	/**
	 * The list of requested <see cref="ReportTemplate"/>s.
	 **/
	reportTemplates: ReportTemplate[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepReportTemplateListByCompany extends RepReportTemplateList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}