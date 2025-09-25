import { serialization } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyStylesListByCompany, RepCompanyStylesListByCompanyAndLabels, RepCompanyStylesListByCompanyAndRefPairs } from "../Responses/RepCompanyStylesList";

/**
 * Gets a list of {@link CompanyStyles}s.
 **/
export abstract class PayCompanyStylesList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link CompanyStyles} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super();
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}

/**
 * Gets the list of {@link CompanyStyles}s for the specified {@link Company}.
 **/
export class PayCompanyStylesListByCompany extends PayCompanyStylesList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json: any): Reply {
		return new RepCompanyStylesListByCompany(json);
	}
}
/**
 * Gets the list of {@link CompanyStyles}s for the specified {@link Company} only if the {@link CompanyStylesStyles.labels} matches all of the given {@link Parameters.labels}.
 **/
export class PayCompanyStylesListByCompanyAndLabels extends PayCompanyStylesListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link CompanyStyles.labels}
	 **/
	labels: string[];

	constructor(json: any) {
		super(json);
		this.labels = json?.labels ?? [];
	}

	override createReply(json: any): Reply {
		return new RepCompanyStylesListByCompanyAndLabels(json);
	}
}
/**
 * Gets the list of {@link CompanyStyles}s for the specified {@link Company} only if one of the specified {@link CompanyStylesStyles.references} fields match.
 * If no references are specified, it will match any {@link CompanyStyles} with no references.
 * If a reference value is null, it will match any {@link CompanyStyles} without that reference key.
 **/
export class PayCompanyStylesListByCompanyAndRefPairs extends PayCompanyStylesListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link CompanyStylesStyles.references}
	 **/
	references: Map<string, string>;

	constructor(json: any) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json.references)
			: new Map<string, string>();
	}

	override createReply(json: any): Reply {
		return new RepCompanyStylesListByCompanyAndRefPairs(json);
	}
}