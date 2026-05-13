import { JsonObject, nothing, ProviderScriptBlock, ProviderScriptParameter, ProviderType, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
/**
 * Parameters used to create or update an {@link ProviderScript}.
 */
export declare class ParamProviderScriptMerge extends ParamMergeSubscribable {
    id: ulong | nothing;
    company: ulong | nothing;
    name: string | nothing;
    notes: string | nothing;
    global: boolean | nothing;
    kind: ProviderType | nothing;
    fill: string | nothing;
    stroke: string | nothing;
    graphic: string | nothing;
    blocks: ProviderScriptBlock[] | nothing;
    parameters: Map<string, ProviderScriptParameter | nothing> | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamProviderScriptMerge.d.ts.map