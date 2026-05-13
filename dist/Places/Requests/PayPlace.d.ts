import { JsonObject } from "@trakit/objects";
import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
/**
 * A container for the {@link place} object.
 */
export declare abstract class PayPlace extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link Place}.
     */
    place: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayPlace.d.ts.map