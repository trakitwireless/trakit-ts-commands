import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByAsset } from "../../API/Requests/IPayListByAsset";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepAssetMessageListByAsset, RepAssetMessageListByCompany } from "../Responses/RepAssetMessageList";

/**
 * Gets details of the specified {@link assetMessage}.
 **/
export abstract class PayAssetMessageList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link AssetMessage}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayAssetMessageListByCompany extends PayAssetMessageList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json?: JsonObject): Reply {
		return new RepAssetMessageListByCompany(json);
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayAssetMessageListByAsset extends PayAssetMessageList implements IPayListByAsset {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	asset: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.asset = new ParamId(json?.asset);
	}

	override createReply(json?: JsonObject): Reply {
		return new RepAssetMessageListByAsset(json);
	}
}