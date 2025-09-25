import { AssetGeneral, nothing, serialization } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentId } from "../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link assetGenerals}.
 **/
export abstract class RepAssetGeneralList extends Reply {
	/**
	 * The list of requested {@link AssetGeneral}s.
	 **/
	assetGenerals: AssetGeneral[] | nothing;

	constructor(json?: any) {
		super(json);
		this.assetGenerals = json?.assetGenerals?.map((el: any) => new AssetGeneral(el));
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

	constructor(json?: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
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
	labels: string[] | nothing;

	constructor(json?: any) {
		super(json);
		this.labels = json?.labels;
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

	constructor(json?: any) {
		super(json);
		if (json?.references) {
			this.references = serialization.toMap(json.references);
		}
	}
}