import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { PayAssetMessageList } from "./PayAssetMessageList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { IPayListByAsset } from "../../API/Requests/IPayListByAsset";

/**
 * Gets details of the specified <see cref="assetMessage"/>.
 **/
export abstract class PayAssetMessageList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="AssetMessage"/>s.
	 **/
	includeDeleted: boolean;
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayAssetMessageListByCompany extends PayAssetMessageList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayAssetMessageListByAsset extends PayAssetMessageList implements IPayListByAsset {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	asset: ParamId;}