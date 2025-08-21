import { Reply } from "../../API/Responses/Reply";
import { RepAssetGeneralList } from "./RepAssetGeneralList";
import { RepAssetGeneralListByCompany } from "./RepAssetGeneralList";

/**
 * A container for the requested @link {assetGenerals}.
 **/
export abstract class RepAssetGeneralList extends Reply {
	/**
	 * The list of requested @link {AssetGeneral}s.
	 **/
	assetGenerals: AssetGeneral[];
	}

/**
 * A container owner @link {Company} of the collection.
 **/
export class RepAssetGeneralListByCompany extends RepAssetGeneralList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepAssetGeneralListByCompanyAndLabels extends RepAssetGeneralListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link AssetGeneral.labels}
	 **/
	labels: string[];
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepAssetGeneralListByCompanyAndRefPairs extends RepAssetGeneralListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link AssetGeneral.references}
	 **/
	references: Map<string, string>;}