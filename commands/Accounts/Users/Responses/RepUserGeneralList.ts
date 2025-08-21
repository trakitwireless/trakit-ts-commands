import { Reply } from "../../../API/Responses/Reply";
import { RepUserGeneralList } from "./RepUserGeneralList";
import { RepUserGeneralListByCompany } from "./RepUserGeneralList";

/**
 * A container for the requested <see cref="userGenerals"/>.
 **/
export abstract class RepUserGeneralList extends Reply {
	/**
	 * The list of requested <see cref="UserGeneral"/>s.
	 **/
	userGenerals: UserGeneral[];
	}

/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepUserGeneralListByCompany extends RepUserGeneralList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepUserGeneralListByCompanyAndLabels extends RepUserGeneralListByCompany {
	/**
	 * The labels given as input.
	 * <seealso cref="UserGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepUserGeneralListByCompanyAndRefPairs extends RepUserGeneralListByCompany {
	/**
	 * The reference string given as input.
	 * <seealso cref="UserGeneral.references"/>
	 **/
	references: Map<string, string>;}