import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { PayCompanyStylesList } from "./PayCompanyStylesList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayCompanyStylesListByCompany } from "./PayCompanyStylesList";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="CompanyStyles"/>s.
 **/
export abstract class PayCompanyStylesList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="CompanyStyles"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="CompanyStyles"/>s for the specified <see cref="Company"/>.
 **/
export class PayCompanyStylesListByCompany extends PayCompanyStylesList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="CompanyStyles"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyStylesStyles.labels"/> matches all of the given <see cref="Parameters.labels"/>.
 **/
export class PayCompanyStylesListByCompanyAndLabels extends PayCompanyStylesListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="CompanyStyles.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="CompanyStyles"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyStylesStyles.references"/> fields match.
 * If no references are specified, it will match any <see cref="CompanyStyles"/> with no references.
 * If a reference value is null, it will match any <see cref="CompanyStyles"/> without that reference key.
 **/
export class PayCompanyStylesListByCompanyAndRefPairs extends PayCompanyStylesListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="CompanyStylesStyles.references"/>
	 **/
	references: Map<string, string>;}