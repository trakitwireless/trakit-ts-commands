import { AssetMessage, nothing } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { IRepListByAsset } from "../../API/Responses/IRepListByAsset";
import { IRepListByCompany } from "../../API/Responses/IRepListByCompany";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the requested {@link assetMessages}.
 **/
export abstract class RepAssetMessageList extends Reply {
	/**
	 * The list of requested {@link AssetMessage}s.
	 **/
	assetMessages: AssetMessage[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.assetMessages = json?.assetMessages?.map((v: any) => new AssetMessage(v));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepAssetMessageListByCompany extends RepAssetMessageList implements IRepListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}
/**
 * Contains the {@link Asset.id} of the collection.
 **/
export class RepAssetMessageListByAsset extends RepAssetMessageList implements IRepListByAsset {
	/**
	 * Identifier of the {@link Asset} to which this collection belongs.
	 **/
	asset: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.asset = ContentId.fromJSON(json?.asset);
	}
}