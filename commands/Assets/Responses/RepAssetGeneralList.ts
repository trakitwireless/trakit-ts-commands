import {
	Asset,
	AssetGeneral,
	codified,
	JsonObject,
	nothing,
	serialization,
} from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncListPiece } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link assetGenerals}.
 **/
export abstract class RepAssetGeneralList extends ReplySyncListPiece<AssetGeneral> {
	/**
	 * The list of requested {@link AssetGeneral}s.
	 **/
	assetGenerals: AssetGeneral[] | nothing;

	constructor(json: JsonObject) {
		super(json, "AssetGeneral", 0);
		this.assetGenerals = (json?.assetGenerals as JsonObject[])?.map((el: any) => new AssetGeneral(el));
	}

	override getCollection() { return this.assetGenerals as AssetGeneral[]; }
	protected override _createBlank() { return new Asset(); }
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepAssetGeneralListByCompany extends RepAssetGeneralList {
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
export class RepAssetGeneralListByCompanyAndLabels extends RepAssetGeneralListByCompany {
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
export class RepAssetGeneralListByCompanyAndRefPairs extends RepAssetGeneralListByCompany {
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