import { Reply } from "../../API/Responses/Reply";
import { RepAssetMessageList } from "./RepAssetMessageList";
import { IRepListByCompany } from "../../API/Responses/IRepListByCompany";
import { IRepListByAsset } from "../../API/Responses/IRepListByAsset";

/**
 * A container for the requested {@link assetMessages}.
 **/
export abstract class RepAssetMessageList extends Reply {
	/**
	 * The list of requested {@link AssetMessage}s.
	 **/
	assetMessages: AssetMessage[];
	}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepAssetMessageListByCompany extends RepAssetMessageList implements IRepListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * Contains the {@link Asset.id} of the collection.
 **/
export class RepAssetMessageListByAsset extends RepAssetMessageList implements IRepListByAsset {
	/**
	 * Identifier of the {@link Asset} to which this collection belongs.
	 **/
	asset: ContentId;}