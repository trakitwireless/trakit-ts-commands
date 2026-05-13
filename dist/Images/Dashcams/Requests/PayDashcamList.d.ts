import { byte, DashcamMediaType, JsonObject, nothing } from "@trakit/objects";
import { IPayListByAsset } from "../../../API/Requests/IPayListByAsset";
import { ParamIdentifier } from "../../../API/Requests/Parameters/ParamIdentifier";
import { PayloadListByDate } from "../../../API/Requests/PayloadListByDate";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Gets details of the specified {@link dashcam}.
 */
export declare abstract class PayDashcamList extends PayloadListByDate implements IPayDeletable {
    /**
     * When true, the command will also return  deleted {@link Dashcam}s.
     */
    includeDeleted: boolean;
    /**
     * The type of dashcam data to include.
     */
    kind: DashcamMediaType | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class PayDashcamListByCompany extends PayDashcamList implements IPayListByCompany {
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
export declare class PayDashcamListByAsset extends PayDashcamList implements IPayListByAsset {
    /**
     * Identifier of the {@link Asset} to which this collection belongs.
     */
    asset: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class PayDashcamListByProvider extends PayDashcamList {
    /**
     * Identifier of the {@link Provider} to which this collection belongs.
     */
    provider: ParamIdentifier;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets details of the specified {@link dashcam}.
 */
export declare abstract class PayDashcamLiveList extends PayloadListByDate implements IPayDeletable {
    /**
     * When true, the command will also return  deleted {@link DashcamLive}s.
     */
    includeDeleted: boolean;
    /**
     * Number assigned to the camera that took the image/video.
     */
    camera: byte | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class PayDashcamLiveListByCompany extends PayDashcamLiveList implements IPayListByCompany {
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
export declare class PayDashcamLiveListByAsset extends PayDashcamLiveList implements IPayListByAsset {
    /**
     * Identifier of the {@link Asset} to which this collection belongs.
     */
    asset: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class PayDashcamLiveListByProvider extends PayDashcamLiveList {
    /**
     * Identifier of the {@link Provider} to which this collection belongs.
     */
    provider: ParamIdentifier;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayDashcamList.d.ts.map