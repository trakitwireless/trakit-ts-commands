import { Reply } from "../../API/Responses/Reply";
import { RepCompanyList } from "./RepCompanyList";
import { RepCompanyListByCompany } from "./RepCompanyList";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * A container for the requested <see cref="companies"/>.
 **/
export abstract class RepCompanyList extends Reply {
	/**
	 * The list of requested <see cref="Company"/>s.
	 **/
	companies: Company[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepCompanyListByCompany extends RepCompanyList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepCompanyListByCompanyAndRefPairs extends RepCompanyListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="CompanyGeneral.references"/>
	 **/
	references: Map<string, string>;}