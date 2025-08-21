import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { PayCompanyGeneralList } from "./PayCompanyGeneralList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayCompanyGeneralListByCompany } from "./PayCompanyGeneralList";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="CompanyGeneral"/>s.
 **/
export abstract class PayCompanyGeneralList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="CompanyGeneral"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="CompanyGeneral"/>s for the specified <see cref="Company"/>.
 **/
export class PayCompanyGeneralListByCompany extends PayCompanyGeneralList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="CompanyGeneral"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyGeneral.labels"/> matches all of the given <see cref="CompanyStyles.labels"/>.
 **/
export class PayCompanyGeneralListByCompanyAndLabels extends PayCompanyGeneralListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="CompanyStyles.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="CompanyGeneral"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyGeneral.references"/> fields match.
 * If no references are specified, it will match any <see cref="CompanyGeneral"/> with no references.
 * If a reference value is null, it will match any <see cref="CompanyGeneral"/> without that reference key.
 **/
export class PayCompanyGeneralListByCompanyAndRefPairs extends PayCompanyGeneralListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="CompanyGeneralGeneral.references"/>
	 **/
	references: Map<string, string>;}