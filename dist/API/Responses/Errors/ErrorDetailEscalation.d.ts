import { JsonObject, PermissionEscalation } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * Details of a permission escallation error thrown when modifying a resource or user that would grant the following extra permissions.
 */
export declare class ErrorDetailEscalation extends ErrorDetail {
    get kind(): ErrorDetailType;
    /**
     * A list of escallated permission details.
     */
    escalations: PermissionEscalation[];
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailEscalation.d.ts.map