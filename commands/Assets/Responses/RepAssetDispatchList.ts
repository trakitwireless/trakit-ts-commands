import { Reply } from "../../API/Responses/Reply";
import { RepAssetDispatchList } from "./RepAssetDispatchList";
import { RepAssetDispatchListByCompany } from "./RepAssetDispatchList";

/**
 * A container for the requested <see cref="assetDispatches"/>.
 **/
export abstract class RepAssetDispatchList extends Reply {
	/**
	 * The list of requested <see cref="AssetDispatch"/>es.
	 **/
	assetDispatches: AssetDispatch[];
	}

/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepAssetDispatchListByCompany extends RepAssetDispatchList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepAssetDispatchListByCompanyAndLabels extends RepAssetDispatchListByCompany {
	/**
	 * The labels given as input.
	 * <seealso cref="AssetGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepAssetDispatchListByCompanyAndRefPairs extends RepAssetDispatchListByCompany {
	/**
	 * The reference string given as input.
	 * <seealso cref="AssetGeneral.references"/>
	 **/
	references: Map<string, string>;}