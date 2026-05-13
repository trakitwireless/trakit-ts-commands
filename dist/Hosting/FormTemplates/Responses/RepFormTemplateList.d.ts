import { codified, email, FormTemplate, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link formTemplates}.
 */
export declare abstract class RepFormTemplateList extends ReplySyncList<FormTemplate> {
    /**
     * The list of requested {@link FormTemplate}s.
     */
    formTemplates: FormTemplate[] | nothing;
    constructor(json: JsonObject);
    getList(): FormTemplate[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepFormTemplateListByCompany extends RepFormTemplateList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, FormTemplate], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepFormTemplateList.d.ts.map