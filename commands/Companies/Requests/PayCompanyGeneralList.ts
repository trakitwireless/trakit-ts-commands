import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { PayCompanyGeneralList } from "./PayCompanyGeneralList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayCompanyGeneralListByCompany } from "./PayCompanyGeneralList";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets a list of {@link CompanyGeneral}s.
 **/
export abstract class PayCompanyGeneralList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyGeneral} (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of {@link CompanyGeneral}s for the specified {@link Company}.
 **/
export class PayCompanyGeneralListByCompany extends PayCompanyGeneralList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of {@link CompanyGeneral}s for the specified {@link Company} only if the {@link CompanyGeneral.labels} matches all of the given {@link CompanyStyles.labels}.
 **/
export class PayCompanyGeneralListByCompanyAndLabels extends PayCompanyGeneralListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link CompanyStyles.labels}
	 **/
	labels: string[];
	}
/**
 * Gets the list of {@link CompanyGeneral}s for the specified {@link Company} only if one of the specified {@link CompanyGeneral.references} fields match.
 * If no references are specified, it will match any {@link CompanyGeneral} with no references.
 * If a reference value is null, it will match any {@link CompanyGeneral} without that reference key.
 **/
export class PayCompanyGeneralListByCompanyAndRefPairs extends PayCompanyGeneralListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link CompanyGeneralGeneral.references}
	 **/
	references: Map<string, string>;}