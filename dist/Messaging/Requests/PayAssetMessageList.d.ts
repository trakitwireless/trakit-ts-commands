import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByAsset } from "../../API/Requests/IPayListByAsset";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
/**
 * Gets details of the specified {@link assetMessage}.
 */
export declare abstract class PayAssetMessageList extends Payload implements IPayDeletable {
    /**
     * When true, the command will also return  deleted {@link AssetMessage}s.
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class PayAssetMessageListByCompany extends PayAssetMessageList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class PayAssetMessageListByAsset extends PayAssetMessageList implements IPayListByAsset {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    asset: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetMessageList.d.ts.map