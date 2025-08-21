import { Reply } from "../../../API/Responses/Reply";
import { RepReportTemplateList } from "./RepReportTemplateList";

/**
 * A container for the requested @link {reportTemplates}.
 **/
export abstract class RepReportTemplateList extends Reply {
	/**
	 * The list of requested @link {ReportTemplate}s.
	 **/
	reportTemplates: ReportTemplate[];
	}

/**
 * Contains the @link {Company.id} of the collection.
 **/
export class RepReportTemplateListByCompany extends RepReportTemplateList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;}