import { AssetMessage, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { IRepListByAsset } from "../../API/Responses/IRepListByAsset";
import { IRepListByCompany } from "../../API/Responses/IRepListByCompany";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link assetMessages}.
 **/
export abstract class RepAssetMessageList extends ReplySyncList<AssetMessage> {
	/**
	 * The list of requested {@link AssetMessage}s.
	 **/
	assetMessages: AssetMessage[] | nothing;

	constructor(json: JsonObject) {
		super(json, "AssetMessage");
		this.assetMessages = (json?.assetMessages as JsonObject[])?.map((v: any) => new AssetMessage(v));
	}
	override getCollection() { return this.assetMessages as AssetMessage[]; }
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
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [string | guid | email | ulong, AssetMessage], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
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
		this.asset = ContentId.fromJSON(json?.asset as JsonObject);
	}
	override _filterCollection(pair: [string | guid | email | ulong, AssetMessage], index: number): boolean {
		return pair[1].assetId === (this.asset as ContentId).id;
	}
}