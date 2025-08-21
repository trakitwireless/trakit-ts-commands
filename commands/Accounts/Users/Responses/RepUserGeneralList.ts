import { Reply } from "../../../API/Responses/Reply";
import { RepUserGeneralList } from "./RepUserGeneralList";
import { RepUserGeneralListByCompany } from "./RepUserGeneralList";

/**
 * A container for the requested @link {userGenerals}.
 **/
export abstract class RepUserGeneralList extends Reply {
	/**
	 * The list of requested @link {UserGeneral}s.
	 **/
	userGenerals: UserGeneral[];
	}

/**
 * A container owner @link {Company} of the collection.
 **/
export class RepUserGeneralListByCompany extends RepUserGeneralList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepUserGeneralListByCompanyAndLabels extends RepUserGeneralListByCompany {
	/**
	 * The labels given as input.
	 * @see {@link UserGeneral.labels}
	 **/
	labels: string[];
	}
/**
 * A container owner @link {Company} of the collection.
 **/
export class RepUserGeneralListByCompanyAndRefPairs extends RepUserGeneralListByCompany {
	/**
	 * The reference string given as input.
	 * @see {@link UserGeneral.references}
	 **/
	references: Map<string, string>;}