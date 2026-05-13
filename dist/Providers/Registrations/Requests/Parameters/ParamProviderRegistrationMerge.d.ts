import { JsonObject } from "@trakit/objects";
import { nothing, TimeSpan, ulong } from "@trakit/objects";
import { ParamMerge } from "../../../../API/Requests/Parameters/ParamMerge";
/**
 * Parameters used to create or update an {@link ProviderRegistration}.
 */
export declare class ParamProviderRegistrationMerge extends ParamMerge {
    config: ulong | nothing;
    asset: ulong | nothing;
    identifier: string | nothing;
    phone: ulong | nothing;
    lifetime: TimeSpan | nothing;
    name: string | nothing;
    notes: string | nothing;
    password: string | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamProviderRegistrationMerge.d.ts.map