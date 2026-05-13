import { FormTemplate, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link formTemplate}.
 */
export declare class RepFormTemplateGet extends ReplySyncGet<FormTemplate> {
    /**
     * The requested {@link FormTemplate}.
     */
    formTemplate: FormTemplate | nothing;
    constructor(json: JsonObject);
    getObject(): FormTemplate;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepFormTemplateGet.d.ts.map