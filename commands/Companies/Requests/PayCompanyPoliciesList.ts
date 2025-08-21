import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { PayCompanyPoliciesList } from "./PayCompanyPoliciesList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayCompanyPoliciesListByCompany } from "./PayCompanyPoliciesList";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="CompanyPolicies"/>s.
 **/
export abstract class PayCompanyPoliciesList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="CompanyPolicies"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="CompanyPolicies"/>s for the specified <see cref="Company"/>.
 **/
export class PayCompanyPoliciesListByCompany extends PayCompanyPoliciesList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="CompanyPolicies"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyPoliciesPolicies.labels"/> matches all of the given <see cref="Parameters.labels"/>.
 **/
export class PayCompanyPoliciesListByCompanyAndLabels extends PayCompanyPoliciesListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="CompanyPolicies.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="CompanyPolicies"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyPoliciesPolicies.references"/> fields match.
 * If no references are specified, it will match any <see cref="CompanyPolicies"/> with no references.
 * If a reference value is null, it will match any <see cref="CompanyPolicies"/> without that reference key.
 **/
export class PayCompanyPoliciesListByCompanyAndRefPairs extends PayCompanyPoliciesListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="CompanyPoliciesPolicies.references"/>
	 **/
	references: Map<string, string>;}