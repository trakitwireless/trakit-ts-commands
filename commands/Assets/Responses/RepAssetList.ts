import { Reply } from "../../API/Responses/Reply";
import { RepAssetList } from "./RepAssetList";
import { RepAssetListByCompany } from "./RepAssetList";

/**
 * A container for the requested @link {assets}.
 **/
export abstract class RepAssetList extends Reply {
	/**
	 * The list of requested @link {Asset}s.
	 **/
	assets: Asset[];
	}

/**
 * Contains the @link {Company.id} of the collection.
 **/
export class RepAssetListByCompany extends RepAssetList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * Contains the codified @link {Company.labels} keys used to filter the collection.
 **/
export class RepAssetListByCompanyAndLabels extends RepAssetListByCompany {
	/**
	 * The parsed labels given as input.
	 * @see {@link AssetGeneral.labels}
	 **/
	labels: string[];
	}
/**
 * Contains the @link {AssetGeneral.references} used to filter the collection.
 **/
export class RepAssetListByCompanyAndRefPairs extends RepAssetListByCompany {
	/**
	 * The parsed references given as input.
	 * @see {@link AssetGeneral.references}
	 **/
	references: Map<string, string>;
	}

}