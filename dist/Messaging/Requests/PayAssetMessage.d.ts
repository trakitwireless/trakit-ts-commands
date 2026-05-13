import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
/**
 * A container for the {@link assetMessage} object.
 */
export declare abstract class PayAssetMessage extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link AssetMessage}.
     */
    assetMessage: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetMessage.d.ts.map