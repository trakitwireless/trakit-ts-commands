import { JsonObject, nothing, ProviderType, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link Provider}.
 */
export declare class ParamProviderMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link Provider} you want to update.
     * Leave this as `null` when creating a new {@link Provider}.
     */
    id: string;
    /**
     * The {@link Company} to which this {@link Provider} belongs.
     * After creation, this value is read-only.
     */
    company: ulong | nothing;
    /**
     * Name for the {@link Provider}.
     */
    name: string | nothing;
    /**
     * Notes for the {@link Provider}.
     */
    notes: string | nothing;
    kind: ProviderType | nothing;
    asset: ulong | nothing;
    config: ulong | nothing;
    phone: ulong | nothing;
    password: string | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamProviderMerge.d.ts.map