import { Reply } from "../../API/Responses/Reply";
import { RepCompanyList } from "./RepCompanyList";
import { RepCompanyListByCompany } from "./RepCompanyList";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * A container for the requested @link {companies}.
 **/
export abstract class RepCompanyList extends Reply {
	/**
	 * The list of requested @link {Company}s.
	 **/
	companies: Company[];
	}

/**
 * Contains the @link {Company.id} of the collection.
 **/
export class RepCompanyListByCompany extends RepCompanyList {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * Contains the @link {Company.id} of the collection.
 **/
export class RepCompanyListByCompanyAndRefPairs extends RepCompanyListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link CompanyGeneral.references}
	 **/
	references: Map<string, string>;}