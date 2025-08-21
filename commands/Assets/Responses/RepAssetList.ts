import { Reply } from "../../API/Responses/Reply";
import { RepAssetList } from "./RepAssetList";
import { RepAssetListByCompany } from "./RepAssetList";

/**
 * A container for the requested <see cref="assets"/>.
 **/
export abstract class RepAssetList extends Reply {
	/**
	 * The list of requested <see cref="Asset"/>s.
	 **/
	assets: Asset[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepAssetListByCompany extends RepAssetList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * Contains the codified <see cref="Company.labels"/> keys used to filter the collection.
 **/
export class RepAssetListByCompanyAndLabels extends RepAssetListByCompany {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="AssetGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * Contains the <see cref="AssetGeneral.references"/> used to filter the collection.
 **/
export class RepAssetListByCompanyAndRefPairs extends RepAssetListByCompany {
	/**
	 * The parsed references given as input.
	 * <seealso cref="AssetGeneral.references"/>
	 **/
	references: Map<string, string>;
	}

}