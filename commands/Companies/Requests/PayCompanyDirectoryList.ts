import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { PayCompanyDirectoryList } from "./PayCompanyDirectoryList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayCompanyDirectoryListByCompany } from "./PayCompanyDirectoryList";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="CompanyDirectory"/>s.
 **/
export abstract class PayCompanyDirectoryList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="CompanyDirectory"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="CompanyDirectory"/>s for the specified <see cref="Company"/>.
 **/
export class PayCompanyDirectoryListByCompany extends PayCompanyDirectoryList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="CompanyDirectory"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyDirectoryDirectory.labels"/> matches all of the given <see cref="Parameters.labels"/>.
 **/
export class PayCompanyDirectoryListByCompanyAndLabels extends PayCompanyDirectoryListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="CompanyDirectory.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="CompanyDirectory"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyDirectoryDirectory.references"/> fields match.
 * If no references are specified, it will match any <see cref="CompanyDirectory"/> with no references.
 * If a reference value is null, it will match any <see cref="CompanyDirectory"/> without that reference key.
 **/
export class PayCompanyDirectoryListByCompanyAndRefPairs extends PayCompanyDirectoryListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="CompanyDirectoryDirectory.references"/>
	 **/
	references: Map<string, string>;}