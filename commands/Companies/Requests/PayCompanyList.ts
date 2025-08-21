import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { PayCompanyList } from "./PayCompanyList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayCompanyListByCompany } from "./PayCompanyList";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets details of the specified @link {company}.
 **/
export abstract class PayCompanyList extends Payload implements IPayDeletable {
	/**
	 * When set to true, the full tree of @link {Company|companies} is returned.
	 * Otherwise, only the first-level child-@link {Company|companies} are included.
	 **/
	tree: boolean;
	/**
	 * When set to true, the parent @link {Company} is included in the results.
	 **/
	includeParent: boolean;
	/**
	 * When true, the command will also return  deleted @link {Company}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the @link {Company.id} of the collection.
 **/
export class PayCompanyListByCompany extends PayCompanyList implements IPayListByCompany {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Contains the @link {Company.id} of the collection.
 **/
export class PayCompanyListByCompanyAndRefPairs extends PayCompanyListByCompany implements IPayListByReferences {
	/**
	 * Case-insensitive reference pairs used to match @link {Company}s.
	 * @see {@link CompanyGeneral.references}
	 **/
	references: Map<string, string>;}