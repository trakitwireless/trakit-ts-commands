import {
	Asset,
	AssetAdvanced,
	AssetGeneral,
	codified,
	email,
	guid,
	JsonObject,
	nothing,
	serialization,
	ulong
} from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncListPiece } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link assetAdvanceds}.
 **/
export abstract class RepAssetAdvancedList extends ReplySyncListPiece<AssetAdvanced> {
	/**
	 * The list of requested {@link AssetAdvanced}s.
	 **/
	assetAdvanceds: AssetAdvanced[] | nothing;

	constructor(json: JsonObject) {
		super(json, "AssetAdvanced", 1);
		this.assetAdvanceds = (json?.assetAdvanceds as JsonObject[])?.map((el: any) => new AssetAdvanced(el));
	}
	override getCollection() { return this.assetAdvanceds as AssetAdvanced[]; }
	protected override _createBlank() { return new Asset(); }
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepAssetAdvancedListByCompany extends RepAssetAdvancedList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [string | guid | email | ulong, AssetAdvanced], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepAssetAdvancedListByCompanyAndLabels extends RepAssetAdvancedListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link AssetGeneral.labels}
	 **/
	labels: codified[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.labels = json?.labels as codified[];
	}
	override _filterCollection(pair: [string | guid | email | ulong, AssetAdvanced], index: number): boolean {
		return false; // Filtering by labels does not guarantee that the other assets should be purged.
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepAssetAdvancedListByCompanyAndRefPairs extends RepAssetAdvancedListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link AssetGeneral.references}
	 **/
	references: Map<string, string> | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.references) {
			this.references = serialization.toMap(json?.references as object);
		}
	}
	override _filterCollection(pair: [string | guid | email | ulong, AssetAdvanced], index: number): boolean {
		return false; // Filtering by references does not guarantee that the other assets should be purged.
	}
}