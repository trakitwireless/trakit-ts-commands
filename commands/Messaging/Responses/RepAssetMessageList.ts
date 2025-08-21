import { Reply } from "../../API/Responses/Reply";
import { RepAssetMessageList } from "./RepAssetMessageList";
import { IRepListByCompany } from "../../API/Responses/IRepListByCompany";
import { IRepListByAsset } from "../../API/Responses/IRepListByAsset";

/**
 * A container for the requested <see cref="assetMessages"/>.
 **/
export abstract class RepAssetMessageList extends Reply {
	/**
	 * The list of requested <see cref="AssetMessage"/>s.
	 **/
	assetMessages: AssetMessage[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepAssetMessageListByCompany extends RepAssetMessageList implements IRepListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * Contains the <see cref="Asset.id"/> of the collection.
 **/
export class RepAssetMessageListByAsset extends RepAssetMessageList implements IRepListByAsset {
	/**
	 * Identifier of the <see cref="Asset"/> to which this collection belongs.
	 **/
	asset: ContentId;}