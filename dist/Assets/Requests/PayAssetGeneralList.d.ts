import { codified, JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";
import { IPaySuspendable } from "../../API/Requests/IPaySuspendable";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
/**
 * Gets a list of {@link AssetGeneral}s.
 */
export declare abstract class PayAssetGeneralList extends Payload implements IPayDeletable, IPaySuspendable {
    /**
     * When true, the command will also return {@link AssetGeneralMessage}s for the asset.
     */
    includeMessages: boolean;
    /**
     * When true, the command will also return {@link DispatchTask}s for the asset.
     */
    includeTasks: boolean;
    /**
     * When true, the command will also return suspended {@link AssetGeneral}s.
     */
    includeSuspended: boolean;
    /**
     * When true, the command will also return a deleted {@link AssetGeneral} (if it exists).
     */
    includeDeleted: boolean;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link AssetGeneral}s for the specified {@link Company}.
 */
export declare class PayAssetGeneralListByCompany extends PayAssetGeneralList implements IPayListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ParamId;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
/**
 * Gets the list of {@link AssetGeneral}s for the specified {@link Company} only if the {@link AssetGeneralGeneral.labels} matches all of the given {@link Parameters.labels}.
 */
export declare class PayAssetGeneralListByCompanyAndLabels extends PayAssetGeneralListByCompany implements IPayListByLabels {
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
 * Gets the list of {@link AssetGeneral}s for the specified {@link Company} only if one of the specified {@link AssetGeneralGeneral.references} fields match.
 * If no references are specified, it will match any {@link AssetGeneral} with no references.
 * If a reference value is null, it will match any {@link AssetGeneral} without that reference key.
 */
export declare class PayAssetGeneralListByCompanyAndRefPairs extends PayAssetGeneralListByCompany implements IPayListByReferences {
    /**
     * The parsed references given as input.
     * @see {@link AssetGeneralGeneral.references}
     */
    references: Map<string, string>;
    constructor(json?: JsonObject);
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PayAssetGeneralList.d.ts.map