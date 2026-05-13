import { BehaviourParameter, byte, JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link Behaviour}.
 */
export declare class ParamBehaviourMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the {@link Behaviour} you want to update.
     * Leave this as `null` when creating a new {@link Behaviour}.
     */
    id: ulong | nothing;
    /**
     * The {@link BehaviourScript} this {@link Behaviour} implements.
     */
    script: ulong | nothing;
    /**
     * The {@link Company} to which this {@link Behaviour} belongs.
     * After creation, this value is read-only.
     */
    company: ulong | nothing;
    /**
     * Name for the {@link Behaviour}.
     */
    name: string | nothing;
    /**
     * Notes for the {@link Behaviour}.
     */
    notes: string | nothing;
    /**
     * The order in which this {@link Behaviour} is executed.
     */
    priority: byte | nothing;
    /**
     * A search pattern used to select the assets which will embed this {@link Behaviour} in their execution context.
     */
    targets: string | nothing;
    /**
     * A search pattern used to select the providers which can implement this {@link Behaviour}.
     */
    filters: string | nothing;
    /**
     * The values needed to implement the script.  Each key in this object is the name of a required script argument.
     */
    parameters: Map<string, BehaviourParameter | nothing> | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamBehaviourMerge.d.ts.map