import { Reply } from "../../API/Responses/Reply";
import { RepAssetGeneralList } from "./RepAssetGeneralList";
import { RepAssetGeneralListByCompany } from "./RepAssetGeneralList";

/**
 * A container for the requested <see cref="assetGenerals"/>.
 **/
export abstract class RepAssetGeneralList extends Reply {
	/**
	 * The list of requested <see cref="AssetGeneral"/>s.
	 **/
	assetGenerals: AssetGeneral[];
	}

/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepAssetGeneralListByCompany extends RepAssetGeneralList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepAssetGeneralListByCompanyAndLabels extends RepAssetGeneralListByCompany {
	/**
	 * The labels given as input.
	 * <seealso cref="AssetGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepAssetGeneralListByCompanyAndRefPairs extends RepAssetGeneralListByCompany {
	/**
	 * The reference string given as input.
	 * <seealso cref="AssetGeneral.references"/>
	 **/
	references: Map<string, string>;}