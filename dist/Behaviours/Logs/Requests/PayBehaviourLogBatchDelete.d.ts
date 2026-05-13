import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 *
 */
export declare class PayBehaviourLogBatchDeleteByAsset extends Payload {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    asset: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 *
 */
export declare class PayBehaviourLogBatchDeleteByBehaviour extends Payload {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    behaviour: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 *
 */
export declare class PayBehaviourLogBatchDeleteByScript extends Payload {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    behaviourScript: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayBehaviourLogBatchDelete.d.ts.map