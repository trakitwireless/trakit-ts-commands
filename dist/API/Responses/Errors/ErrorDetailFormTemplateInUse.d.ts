import { JsonObject, ulong } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * Details for how many and which {@link FormResult}s are still using this {@link FormTemplate}.
 */
export declare class ErrorDetailFormTemplateInUse extends ErrorDetail {
    get kind(): ErrorDetailType;
    /**
     * A list of {@link FormResult.id}s currently being referenced.
     */
    formResults: ulong[];
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailFormTemplateInUse.d.ts.map