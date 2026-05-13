import { codified, JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamFormField } from "./ParamFormField";
/**
 * Parameters used to create or update an {@link FormTemplate}.
 */
export declare class ParamFormTemplateMerge extends ParamMergeSubscribable {
    id: ulong | nothing;
    company: ulong | nothing;
    name: string | nothing;
    notes: string | nothing;
    labels: codified[] | nothing;
    fields: ParamFormField[] | nothing;
    fill: string | nothing;
    stroke: string | nothing;
    graphic: string | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamFormTemplateMerge.d.ts.map