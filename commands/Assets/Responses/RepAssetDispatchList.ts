import { Reply } from "../../API/Responses/Reply";
import { RepAssetDispatchList } from "./RepAssetDispatchList";
import { RepAssetDispatchListByCompany } from "./RepAssetDispatchList";

/**
 * A container for the requested {@link assetDispatches}.
 **/
export abstract class RepAssetDispatchList extends Reply {
	/**
	 * The list of requested {@link AssetDispatch}es.
	 **/
	assetDispatches: AssetDispatch[];
	}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepAssetDispatchListByCompany extends RepAssetDispatchList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepAssetDispatchListByCompanyAndLabels extends RepAssetDispatchListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link AssetGeneral.labels}
	 **/
	labels: string[];
	}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepAssetDispatchListByCompanyAndRefPairs extends RepAssetDispatchListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link AssetGeneral.references}
	 **/
	references: Map<string, string>;}