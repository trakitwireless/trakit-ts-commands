import { JsonObject } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
/**
 * A container for the {@link picture} object.
 */
export declare abstract class PayPicture extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link Picture}.
     */
    picture: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayPicture.d.ts.map