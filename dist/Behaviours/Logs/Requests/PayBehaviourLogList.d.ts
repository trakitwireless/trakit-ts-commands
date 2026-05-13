import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByAsset } from "../../../API/Requests/IPayListByAsset";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Gets details of the specified {@link behaviourLog}.
 */
export declare abstract class PayBehaviourLogList extends Payload implements IPayDeletable {
    /**
     * When true, the command will also return  deleted {@link BehaviourLog}s.
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class PayBehaviourLogListByAsset extends PayBehaviourLogList implements IPayListByAsset {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    asset: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class PayBehaviourLogListByBehaviour extends PayBehaviourLogList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    behaviour: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class PayBehaviourLogListByScript extends PayBehaviourLogList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    behaviourScript: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayBehaviourLogList.d.ts.map