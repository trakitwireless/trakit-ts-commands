import { JsonObject, nothing } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";
/**
 * Details for how many and which {@link User}s are still in the {@link UserGroup}.
 */
export declare class ErrorDetailUserGroupInUse extends ErrorDetail {
    get kind(): ErrorDetailType;
    /**
     * A list of {@link User}s currently being referenced.
     */
    users: string[] | nothing;
    /**
     * A list of {@link User}s currently being referenced.
     */
    machines: string[] | nothing;
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailUserGroupInUse.d.ts.map