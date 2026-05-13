import { BehaviourParameter, JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link BehaviourScript}.
 */
export declare class ParamBehaviourScriptMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link BehaviourScript} you want to update.
     * Leave this as `null` when creating a new {@link BehaviourScript}.
     */
    id: ulong | nothing;
    /**
     * The {@link Company} to which this {@link BehaviourScript} belongs.
     * After creation, this value is read-only.
     */
    company: ulong | nothing;
    /**
     * Name for the {@link BehaviourScript}.
     */
    name: string | nothing;
    /**
     * Notes for the {@link BehaviourScript}.
     */
    notes: string | nothing;
    /**
     * The name of the symbol shown in the UI.
     */
    graphic: string | nothing;
    /**
     * Background and fill colour in the UI.
     */
    fill: string | nothing;
    /**
     * Text and outline colour in the UI.
     */
    stroke: string | nothing;
    /**
     * Source code of the {@link BehaviourScript}.
     */
    source: string | nothing;
    /**
     * When set to true, this {@link Company} as well as all child companies will be able to implement this {@link BehaviourScript} for that companies assets.
     */
    global: boolean | nothing;
    /**
     * A search pattern used to select the providers.
     */
    filters: string | nothing;
    /**
     * The defined arguments for this {@link BehaviourScript}.
     * Each key in the object is the name of an argument.
     */
    parameters: Map<string, BehaviourParameter | nothing> | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamBehaviourScriptMerge.d.ts.map