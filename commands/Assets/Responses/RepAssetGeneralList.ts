import { AssetGeneral, codified, JsonObject, nothing, serialization } from "@trakit/objects";
import { ContentId } from "../../API/Responses/Content/ContentId";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the requested {@link assetGenerals}.
 **/
export abstract class RepAssetGeneralList extends Reply {
	/**
	 * The list of requested {@link AssetGeneral}s.
	 **/
	assetGenerals: AssetGeneral[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.assetGenerals = (json?.assetGenerals as JsonObject[])?.map((el: any) => new AssetGeneral(el));
	}
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