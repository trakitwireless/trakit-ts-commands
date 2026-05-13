import { codified, email, guid, JsonObject, nothing, ReportTemplate, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link reportTemplates}.
 */
export declare abstract class RepReportTemplateList extends ReplySyncList<ReportTemplate> {
    /**
     * The list of requested {@link ReportTemplate}s.
     */
    reportTemplates: ReportTemplate[] | nothing;
    constructor(json: JsonObject);
    getList(): ReportTemplate[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepReportTemplateListByCompany extends RepReportTemplateList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, ReportTemplate], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepReportTemplateList.d.ts.map