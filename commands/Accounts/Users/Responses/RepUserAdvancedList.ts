import { Reply } from "../../../API/Responses/Reply";
import { RepUserAdvancedList } from "./RepUserAdvancedList";
import { RepUserAdvancedListByCompany } from "./RepUserAdvancedList";

/**
 * A container for the requested <see cref="userAdvanceds"/>.
 **/
export abstract class RepUserAdvancedList extends Reply {
	/**
	 * The list of requested <see cref="UserAdvanced"/>s.
	 **/
	userAdvanceds: UserAdvanced[];
	}

/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepUserAdvancedListByCompany extends RepUserAdvancedList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepUserAdvancedListByCompanyAndLabels extends RepUserAdvancedListByCompany {
	/**
	 * The labels given as input.
	 * <seealso cref="UserGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepUserAdvancedListByCompanyAndRefPairs extends RepUserAdvancedListByCompany {
	/**
	 * The reference string given as input.
	 * <seealso cref="UserGeneral.references"/>
	 **/
	references: Map<string, string>;}