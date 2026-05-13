import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamSelfContactMerge } from "../../../../Accounts/Self/Requests/Parameters/ParamSelfContactMerge";
/**
 * Parameters used to create or update an {@link Contact}.
 */
export declare class ParamContactMerge extends ParamSelfContactMerge {
    /**
     * The unique identifier of the {@link Contact} you want to update.
     * Leave this as `null` when creating a new {@link Contact}.
     */
    id: ulong | nothing;
    /**
     * The {@link Company} to which this {@link Contact} belongs.
     * After creation, this value is read-only.
     */
    company: ulong | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamContactMerge.d.ts.map