import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ErrorDetailType } from "./ErrorDetailType";
import { ErrorDetailUserGroupInUse } from "./ErrorDetailUserGroupInUse";
/**
 * Details for how many and which {@link Asset}s and {@link User}s are still using this {@link Contact}.
 */
export declare class ErrorDetailContactInUse extends ErrorDetailUserGroupInUse {
    get kind(): ErrorDetailType;
    assets: ulong[] | nothing;
    constructor(json: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ErrorDetailContactInUse.d.ts.map