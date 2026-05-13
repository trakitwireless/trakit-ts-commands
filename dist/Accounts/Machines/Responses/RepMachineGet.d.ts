import { JsonObject, Machine, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";
/**
 * A container for the {@link machine}.
 */
export declare class RepMachineGet extends ReplySyncGet<Machine> {
    /**
     * The requested {@link Machine}.
     */
    machine: Machine | nothing;
    constructor(json: JsonObject);
    getObject(): Machine;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepMachineGet.d.ts.map