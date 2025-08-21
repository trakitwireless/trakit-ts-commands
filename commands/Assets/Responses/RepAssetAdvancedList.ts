import { Reply } from "../../API/Responses/Reply";
import { RepAssetAdvancedList } from "./RepAssetAdvancedList";
import { RepAssetAdvancedListByCompany } from "./RepAssetAdvancedList";

/**
 * A container for the requested <see cref="assetAdvanceds"/>.
 **/
export abstract class RepAssetAdvancedList extends Reply {
	/**
	 * The list of requested <see cref="AssetAdvanced"/>s.
	 **/
	assetAdvanceds: AssetAdvanced[];
	}

/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepAssetAdvancedListByCompany extends RepAssetAdvancedList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepAssetAdvancedListByCompanyAndLabels extends RepAssetAdvancedListByCompany {
	/**
	 * The labels given as input.
	 * <seealso cref="AssetGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepAssetAdvancedListByCompanyAndRefPairs extends RepAssetAdvancedListByCompany {
	/**
	 * The reference string given as input.
	 * <seealso cref="AssetGeneral.references"/>
	 **/
	references: Map<string, string>;}