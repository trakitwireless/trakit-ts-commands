import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link ProviderConfig}.
 */
export declare class ParamProviderConfigMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link ProviderConfig} you want to update.
     * Leave this as `null` when creating a new {@link ProviderConfig}.
     */
    id: ulong | nothing;
    /**
     * The {@link Company} to which this {@link ProviderConfig} belongs.
     * After creation, this value is read-only.
     */
    company: ulong | nothing;
    script: ulong | nothing;
    name: string | nothing;
    notes: string | nothing;
    parameters: Map<string, string> | nothing;
    geofences: string | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamProviderConfigMerge.d.ts.map