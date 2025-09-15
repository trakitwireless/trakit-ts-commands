import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";
import { serialization } from "@trakit/objects";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";

/**
 * Gets a list of {@link CompanyDirectory}s.
 **/
export abstract class PayCompanyDirectoryList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyDirectory} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super();
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}

/**
 * Gets the list of {@link CompanyDirectory}s for the specified {@link Company}.
 **/
export class PayCompanyDirectoryListByCompany extends PayCompanyDirectoryList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}
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

	constructor(json: any) {
		super(json);
		this.labels = json?.labels ?? [];
	}
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
	references: Map<string, string>;

	constructor(json: any) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json.references)
			: new Map<string, string>();
	}
}