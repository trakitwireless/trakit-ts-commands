import { JsonObject } from "@trakit/objects";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByUser } from "../../../API/Requests/IPayListByUser";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { ParamLogin } from "../../../API/Requests/Parameters/ParamLogin";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Gets the list of {@link Session} for the specified {@link Company}.
 */
export declare class PaySessionListByCompany extends Payload implements IPayListByCompany {
    /**
     * An object to contain the "id" of the {@link Company}.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link Session}s for the specified {@link User}.
 */
export declare class PaySessionListByUser extends Payload implements IPayListByUser {
    /**
     * An object to contain the "login" of the {@link User}.
     */
    user: ParamLogin;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PaySessionList.d.ts.map