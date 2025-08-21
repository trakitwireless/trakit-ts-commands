import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { PayCompanyList } from "./PayCompanyList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayCompanyListByCompany } from "./PayCompanyList";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets details of the specified <see cref="company"/>.
 **/
export abstract class PayCompanyList extends Payload implements IPayDeletable {
	/**
	 * When set to true, the full tree of <see cref="Company">companies</see> is returned.
	 * Otherwise, only the first-level child-<see cref="Company">companies</see> are included.
	 **/
	tree: boolean;
	/**
	 * When set to true, the parent <see cref="Company"/> is included in the results.
	 **/
	includeParent: boolean;
	/**
	 * When true, the command will also return  deleted <see cref="Company"/>s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayCompanyListByCompany extends PayCompanyList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayCompanyListByCompanyAndRefPairs extends PayCompanyListByCompany implements IPayListByReferences {
	/**
	 * Case-insensitive reference pairs used to match <see cref="Company"/>s.
	 * <seealso cref="CompanyGeneral.references"/>
	 **/
	references: Map<string, string>;}