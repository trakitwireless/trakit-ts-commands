import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link ProviderConfiguration}.
 */
export declare class ParamProviderConfigurationMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link ProviderConfiguration} you want to update.
     * Leave this as `null` when creating a new {@link ProviderConfiguration}.
     */
    id: ulong | nothing;
    /**
     * The {@link Company} to which this {@link ProviderConfiguration} belongs.
     * After creation, this value is read-only.
     */
    company: ulong | nothing;
    type: ulong | nothing;
    name: string | nothing;
    notes: string | nothing;
    scriptParameters: Map<string, object> | nothing;
    geofences: ulong[] | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamProviderConfigurationMerge.d.ts.map