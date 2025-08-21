import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { PayCompanyDirectoryList } from "./PayCompanyDirectoryList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayCompanyDirectoryListByCompany } from "./PayCompanyDirectoryList";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets a list of {@link CompanyDirectory}s.
 **/
export abstract class PayCompanyDirectoryList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyDirectory} (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of {@link CompanyDirectory}s for the specified {@link Company}.
 **/
export class PayCompanyDirectoryListByCompany extends PayCompanyDirectoryList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of {@link CompanyDirectory}s for the specified {@link Company} only if the {@link CompanyDirectoryDirectory.labels} matches all of the given {@link Parameters.labels}.
 **/
export class PayCompanyDirectoryListByCompanyAndLabels extends PayCompanyDirectoryListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link CompanyDirectory.labels}
	 **/
	labels: string[];
	}
/**
 * Gets the list of {@link CompanyDirectory}s for the specified {@link Company} only if one of the specified {@link CompanyDirectoryDirectory.references} fields match.
 * If no references are specified, it will match any {@link CompanyDirectory} with no references.
 * If a reference value is null, it will match any {@link CompanyDirectory} without that reference key.
 **/
export class PayCompanyDirectoryListByCompanyAndRefPairs extends PayCompanyDirectoryListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link CompanyDirectoryDirectory.references}
	 **/
	references: Map<string, string>;}