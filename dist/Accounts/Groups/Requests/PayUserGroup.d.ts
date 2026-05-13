import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
/**
 * A container for the {@link userGroup} object.
 */
export declare abstract class PayUserGroup extends Payload implements IPaySingle {
    /**
     * An object to contain the "id" of the {@link UserGroup}.
     */
    userGroup: ParamId;
    constructor(json?: JsonObject);
    /**
     *
     */
    getKey(): string;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayUserGroup.d.ts.map