import { codified, JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
/**
 * Gets a list of {@link AssetDispatch}s.
 */
export declare abstract class PayAssetDispatchList extends Payload implements IPayDeletable {
    /**
     * When true, the command will also return a deleted {@link AssetDispatch} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link AssetDispatch}s for the specified {@link Company}.
 */
export declare class PayAssetDispatchListByCompany extends PayAssetDispatchList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link AssetDispatch}s for the specified {@link Company} only if the {@link AssetDispatchGeneral.labels} matches all of the given {@link Parameters.labels}.
 */
export declare class PayAssetDispatchListByCompanyAndLabels extends PayAssetDispatchListByCompany implements IPayListByLabels {
    /**
     * The parsed labels given as input.
     * @see {@link AssetGeneral.labels}
     */
    labels: codified[];
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link AssetDispatch}s for the specified {@link Company} only if one of the specified {@link AssetDispatchGeneral.references} fields match.
 * If no references are specified, it will match any {@link AssetDispatch} with no references.
 * If a reference value is null, it will match any {@link AssetDispatch} without that reference key.
 */
export declare class PayAssetDispatchListByCompanyAndRefPairs extends PayAssetDispatchListByCompany implements IPayListByReferences {
    /**
     * The parsed references given as input.
     * @see {@link AssetDispatchGeneral.references}
     */
    references: Map<string, string>;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetDispatchList.d.ts.map