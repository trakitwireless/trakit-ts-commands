import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * Details for how a circular company tree would have been created.
 */
export declare class ErrorDetailParent extends ErrorDetail {
    get kind(): ErrorDetailType;
    /**
     * The {@link Company.parent} specified in the parameters.
     */
    parent: ulong | nothing;
    /**
     * ID of the child {@link Company} that would cause a circular reference.
     */
    descendant: ulong | nothing;
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailParent.d.ts.map