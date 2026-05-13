import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
/**
 * A container for the {@link asset} object.
 */
export declare abstract class PayAsset extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link Asset}.
     */
    asset: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAsset.d.ts.map