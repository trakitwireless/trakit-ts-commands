import { Reply } from "../../API/Responses/Reply";
import { RepAssetAdvancedList } from "./RepAssetAdvancedList";
import { RepAssetAdvancedListByCompany } from "./RepAssetAdvancedList";

/**
 * A container for the requested @link {assetAdvanceds}.
 **/
export abstract class RepAssetAdvancedList extends Reply {
	/**
	 * The list of requested @link {AssetAdvanced}s.
	 **/
	assetAdvanceds: AssetAdvanced[];
	}

/**
 * A container owner @link {Company} of the collection.
 **/
export class RepAssetAdvancedListByCompany extends RepAssetAdvancedList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepAssetAdvancedListByCompanyAndLabels extends RepAssetAdvancedListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link AssetGeneral.labels}
	 **/
	labels: string[];
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepAssetAdvancedListByCompanyAndRefPairs extends RepAssetAdvancedListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link AssetGeneral.references}
	 **/
	references: Map<string, string>;}