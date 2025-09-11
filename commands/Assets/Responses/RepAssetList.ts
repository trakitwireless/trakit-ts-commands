import { Asset, nothing, serialization } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentId } from "commands/API/Responses/Content/ContentId";

/**
 * A container for the requested {@link assets}.
 **/
export abstract class RepAssetList extends Reply {
	/**
	 * The list of requested {@link Asset}s.
	 **/
	assets: Asset[] | nothing;

	constructor(json?: any) {
		super(json);
		this.assets = json?.assets?.map((el: any) => new Asset(el));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepAssetListByCompany extends RepAssetList {
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
 * Contains the codified {@link Company.labels} keys used to filter the collection.
 **/
export class RepAssetListByCompanyAndLabels extends RepAssetListByCompany {
	/**
	 * The parsed labels given as input.
	 * @see {@link AssetGeneral.labels}
	 **/
	labels: string[] | nothing;

	constructor(json?: any) {
		super(json);
		this.labels = json?.labels;
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

	constructor(json?: any) {
		super(json);
		if (json?.references) {
			this.references = serialization.toMap(json.references);
		}
	}
}