import {
	Asset,
	AssetDispatch,
	codified,
	JsonObject,
	nothing,
	serialization
} from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { ReplySyncListPiece } from "../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link assetDispatches}.
 **/
export abstract class RepAssetDispatchList extends ReplySyncListPiece<AssetDispatch> {
	/**
	 * The list of requested {@link AssetDispatch}es.
	 **/
	assetDispatches: AssetDispatch[] | nothing;

	constructor(json: JsonObject) {
		super(json, "AssetDispatch", 2);
		this.assetDispatches = (json?.assetDispatches as JsonObject[])?.map((el: any) => new AssetDispatch(el));
	}

	override getCollection() { return this.assetDispatches as AssetDispatch[]; }
	protected override _createBlank() { return new Asset(); }
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepAssetDispatchListByCompany extends RepAssetDispatchList {
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
export class RepAssetDispatchListByCompanyAndLabels extends RepAssetDispatchListByCompany {
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
export class RepAssetDispatchListByCompanyAndRefPairs extends RepAssetDispatchListByCompany {
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