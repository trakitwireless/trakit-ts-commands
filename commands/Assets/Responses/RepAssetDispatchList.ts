import { AssetDispatch, nothing, serialization } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentId } from "commands/API/Responses/Content/ContentId";

/**
 * A container for the requested {@link assetDispatches}.
 **/
export abstract class RepAssetDispatchList extends Reply {
	/**
	 * The list of requested {@link AssetDispatch}es.
	 **/
	assetDispatches: AssetDispatch[] | nothing;

	constructor(json?: any) {
		super(json);
		this.assetDispatches = json?.assetDispatches?.map((el: any) => new AssetDispatch(el));
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepAssetDispatchListByCompany extends RepAssetDispatchList {
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
export class RepAssetDispatchListByCompanyAndLabels extends RepAssetDispatchListByCompany {
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
export class RepAssetDispatchListByCompanyAndRefPairs extends RepAssetDispatchListByCompany {
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