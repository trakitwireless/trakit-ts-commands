import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamLogin } from "../../../API/Requests/Parameters/ParamLogin";
import { Payload } from "../../../API/Requests/Payload";
/**
 * A container for the {@link user} object.
 */
export declare abstract class PayUser extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link User}.
     */
    user: ParamLogin;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayUser.d.ts.map