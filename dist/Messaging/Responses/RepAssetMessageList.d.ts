import { AssetMessage, codified, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { IRepListByAsset } from "../../API/Responses/IRepListByAsset";
import { IRepListByCompany } from "../../API/Responses/IRepListByCompany";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link assetMessages}.
 */
export declare abstract class RepAssetMessageList extends ReplySyncList<AssetMessage> {
    /**
     * The list of requested {@link AssetMessage}s.
     */
    assetMessages: AssetMessage[] | nothing;
    constructor(json: JsonObject);
    getList(): AssetMessage[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepAssetMessageListByCompany extends RepAssetMessageList implements IRepListByCompany {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, AssetMessage], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * Contains the {@link Asset.id} of the collection.
 */
export declare class RepAssetMessageListByAsset extends RepAssetMessageList implements IRepListByAsset {
    /**
     * Identifier of the {@link Asset} to which this collection belongs.
     */
    asset: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, AssetMessage], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepAssetMessageList.d.ts.map