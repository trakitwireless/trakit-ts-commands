import { AssetAdvanced, codified, JsonObject, nothing, serialization, storage } from "@trakit/objects";
import { ReplySyncList } from "../../API/Responses/ReplySyncList";
import { ContentId } from "../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link assetAdvanceds}.
 **/
export abstract class RepAssetAdvancedList extends ReplySyncList<AssetAdvanced> {
	/**
	 * The list of requested {@link AssetAdvanced}s.
	 **/
	assetAdvanceds: AssetAdvanced[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.assetAdvanceds = (json?.assetAdvanceds as JsonObject[])?.map((el: any) => new AssetAdvanced(el));
	}

	override getCollection() { return this.assetAdvanceds as AssetAdvanced[]; }
	protected override _getStorage() { return storage.Asset; }
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
}