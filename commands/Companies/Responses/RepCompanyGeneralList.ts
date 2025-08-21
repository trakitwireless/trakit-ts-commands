import { Reply } from "../../API/Responses/Reply";
import { RepCompanyGeneralList } from "./RepCompanyGeneralList";
import { RepCompanyGeneralListByCompany } from "./RepCompanyGeneralList";

/**
 * A container for the requested <see cref="companyGenerals"/>.
 **/
export abstract class RepCompanyGeneralList extends Reply {
	/**
	 * The list of requested <see cref="CompanyGeneral"/>s.
	 **/
	companyGenerals: CompanyGeneral[];
	}

/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyGeneralListByCompany extends RepCompanyGeneralList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyGeneralListByCompanyAndLabels extends RepCompanyGeneralListByCompany {
	/**
	 * The labels given as input.
	 * <seealso cref="CompanyGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * A container owner <see cref="Company"/> of the collection.
 **/
export class RepCompanyGeneralListByCompanyAndRefPairs extends RepCompanyGeneralListByCompany {
	/**
	 * The reference string given as input.
	 * <seealso cref="CompanyGeneral.references"/>
	 **/
	references: Map<string, string>;}