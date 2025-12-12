import { Asset, codified, email, guid, JsonObject, nothing, serialization, ulong } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link assets}.
 **/
export abstract class RepAssetList extends ReplySyncList<Asset> {
	/**
	 * The list of requested {@link Asset}s.
	 **/
	assets: Asset[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Asset");
		this.assets = (json?.assets as JsonObject[])?.map((el: any) => new Asset(el));
	}
	override getCollection() { return this.assets as Asset[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepAssetListByCompany extends RepAssetList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, Asset], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}
/**
 * Contains the codified {@link Company.labels} keys used to filter the collection.
 **/
export class RepAssetListByCompanyAndLabels extends RepAssetListByCompany {
	/**
	 * The parsed labels given as input.
	 * @see {@link AssetGeneral.labels}
	 **/
	labels: codified[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.labels = json?.labels as codified[];
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, Asset], index: number): boolean {
		return false; // Filtering by labels does not guarantee that the other assets should be purged.
	}
}
/**
 * Contains the {@link AssetGeneral.references} used to filter the collection.
 **/
export class RepAssetListByCompanyAndRefPairs extends RepAssetListByCompany {
	/**
	 * The parsed references given as input.
	 * @see {@link AssetGeneral.references}
	 **/
	references: Map<string, string> | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.references) {
			this.references = serialization.toMap(json?.references as object);
		}
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, Asset], index: number): boolean {
		return false; // Filtering by references does not guarantee that the other assets should be purged.
	}
}