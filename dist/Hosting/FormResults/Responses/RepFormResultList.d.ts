import { codified, email, FormResult, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link formResults}.
 */
export declare abstract class RepFormResultList extends ReplySyncList<FormResult> {
    /**
     * The list of requested {@link FormResult}s.
     */
    formResults: FormResult[] | nothing;
    constructor(json: JsonObject);
    getList(): FormResult[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepFormResultListByCompany extends RepFormResultList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, FormResult], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepFormResultList.d.ts.map