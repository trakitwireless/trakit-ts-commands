import { AssetMessage, codified, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { IRepListByAsset } from "../../API/Responses/IRepListByAsset";
import { IRepListByCompany } from "../../API/Responses/IRepListByCompany";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link assetMessages}.
 */
export abstract class RepAssetMessageList extends ReplySyncList<AssetMessage> {
	/**
	 * The list of requested {@link AssetMessage}s.
	 */
	assetMessages: AssetMessage[] | nothing;

	constructor(json: JsonObject) {
		super(json, "AssetMessage");
		this.assetMessages = (json?.assetMessages as JsonObject[])?.map((v: any) => new AssetMessage(v));
	}
	override getList() { return this.assetMessages as AssetMessage[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 */
export class RepAssetMessageListByCompany extends RepAssetMessageList implements IRepListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, AssetMessage], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}
/**
 * Contains the {@link Asset.id} of the collection.
 */
export class RepAssetMessageListByAsset extends RepAssetMessageList implements IRepListByAsset {
	/**
	 * Identifier of the {@link Asset} to which this collection belongs.
	 */
	asset: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.asset = ContentIdCompany.fromJSON(json?.asset as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, AssetMessage], index: number): boolean {
		return pair[1].assetId === (this.asset as ContentIdCompany).id;
	}
	override getCompanyId() { return this.asset?.company as ulong; }
}