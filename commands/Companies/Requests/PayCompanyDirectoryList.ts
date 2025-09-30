import { serialization } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyDirectoryListByCompany, RepCompanyDirectoryListByCompanyAndLabels, RepCompanyDirectoryListByCompanyAndRefPairs } from "../Responses/RepCompanyDirectoryList";

/**
 * Gets a list of {@link CompanyDirectory}s.
 **/
export abstract class PayCompanyDirectoryList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyDirectory} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super();
		this.includeDeleted = !!json?.includeDeleted;
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

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyDirectoryListByCompany(json as JsonObject);
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
	labels: codified[];

	constructor(json?: JsonObject) {
		super(json);
		this.labels = json?.labels as codified[] ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyDirectoryListByCompanyAndLabels(json as JsonObject);
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

	constructor(json?: JsonObject) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json?.references as object)
			: new Map<string, string>();
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyDirectoryListByCompanyAndRefPairs(json as JsonObject);
	}
}