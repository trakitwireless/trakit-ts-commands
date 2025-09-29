import { serialization } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyResellerListByCompany, RepCompanyResellerListByCompanyAndLabels, RepCompanyResellerListByCompanyAndRefPairs } from "../Responses/RepCompanyResellerList";

/**
 * Gets a list of {@link CompanyReseller}s.
 **/
export abstract class PayCompanyResellerList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyReseller} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super();
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}

/**
 * Gets the list of {@link CompanyReseller}s for the specified {@link Company}.
 **/
export class PayCompanyResellerListByCompany extends PayCompanyResellerList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json?: JsonObject): Reply {
		return new RepCompanyResellerListByCompany(json);
	}
}
/**
 * Gets the list of {@link CompanyReseller}s for the specified {@link Company} only if the {@link CompanyResellerReseller.labels} matches all of the given {@link Parameters.labels}.
 **/
export class PayCompanyResellerListByCompanyAndLabels extends PayCompanyResellerListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link CompanyReseller.labels}
	 **/
	labels: string[];

	constructor(json?: JsonObject) {
		super(json);
		this.labels = json?.labels ?? [];
	}

	override createReply(json?: JsonObject): Reply {
		return new RepCompanyResellerListByCompanyAndLabels(json);
	}
}
/**
 * Gets the list of {@link CompanyReseller}s for the specified {@link Company} only if one of the specified {@link CompanyResellerReseller.references} fields match.
 * If no references are specified, it will match any {@link CompanyReseller} with no references.
 * If a reference value is null, it will match any {@link CompanyReseller} without that reference key.
 **/
export class PayCompanyResellerListByCompanyAndRefPairs extends PayCompanyResellerListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link CompanyResellerReseller.references}
	 **/
	references: Map<string, string>;

	constructor(json?: JsonObject) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json.references)
			: new Map<string, string>();
	}

	override createReply(json?: JsonObject): Reply {
		return new RepCompanyResellerListByCompanyAndRefPairs(json);
	}
}