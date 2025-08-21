import { Reply } from "../../../API/Responses/Reply";
import { RepUserAdvancedList } from "./RepUserAdvancedList";
import { RepUserAdvancedListByCompany } from "./RepUserAdvancedList";

/**
 * A container for the requested {@link userAdvanceds}.
 **/
export abstract class RepUserAdvancedList extends Reply {
	/**
	 * The list of requested {@link UserAdvanced}s.
	 **/
	userAdvanceds: UserAdvanced[];
	}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepUserAdvancedListByCompany extends RepUserAdvancedList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepUserAdvancedListByCompanyAndLabels extends RepUserAdvancedListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link UserGeneral.labels}
	 **/
	labels: string[];
	}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepUserAdvancedListByCompanyAndRefPairs extends RepUserAdvancedListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link UserGeneral.references}
	 **/
	references: Map<string, string>;}