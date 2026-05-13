import { JsonObject, ulong } from "@trakit/objects";
import { FormResult, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link formResult}.
 */
export declare class RepFormResultGet extends ReplySyncGet<FormResult> {
    /**
     * The requested {@link FormResult}.
     */
    formResult: FormResult | nothing;
    constructor(json: JsonObject);
    getObject(): FormResult;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepFormResultGet.d.ts.map