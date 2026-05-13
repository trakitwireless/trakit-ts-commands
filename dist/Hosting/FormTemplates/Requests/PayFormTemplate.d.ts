import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
/**
 * A container for the {@link formTemplate} object.
 */
export declare abstract class PayFormTemplate extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link FormTemplate}.
     */
    formTemplate: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayFormTemplate.d.ts.map