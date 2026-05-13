import { codified, email, guid, JsonObject, nothing, ReportResult, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link reportResults}.
 */
export declare abstract class RepReportResultList extends ReplySyncList<ReportResult> {
    /**
     * The list of requested {@link ReportResult}s.
     */
    reportResults: ReportResult[] | nothing;
    constructor(json: JsonObject);
    getList(): ReportResult[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepReportResultListByCompany extends RepReportResultList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, ReportResult], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepReportResultList.d.ts.map