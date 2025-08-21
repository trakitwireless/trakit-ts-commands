import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { PayCompanyResellerList } from "./PayCompanyResellerList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayCompanyResellerListByCompany } from "./PayCompanyResellerList";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="CompanyReseller"/>s.
 **/
export abstract class PayCompanyResellerList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="CompanyReseller"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="CompanyReseller"/>s for the specified <see cref="Company"/>.
 **/
export class PayCompanyResellerListByCompany extends PayCompanyResellerList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="CompanyReseller"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyResellerReseller.labels"/> matches all of the given <see cref="Parameters.labels"/>.
 **/
export class PayCompanyResellerListByCompanyAndLabels extends PayCompanyResellerListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="CompanyReseller.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="CompanyReseller"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyResellerReseller.references"/> fields match.
 * If no references are specified, it will match any <see cref="CompanyReseller"/> with no references.
 * If a reference value is null, it will match any <see cref="CompanyReseller"/> without that reference key.
 **/
export class PayCompanyResellerListByCompanyAndRefPairs extends PayCompanyResellerListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="CompanyResellerReseller.references"/>
	 **/
	references: Map<string, string>;}