import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { serialization } from "@trakit/objects";

/**
 * Gets a list of {@link UserGeneral}s.
 **/
export abstract class PayUserGeneralList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserGeneral} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeDeleted = !!(json?.includeDeleted);
	}
}

/**
 * Gets the list of {@link UserGeneral}s for the specified {@link Company}.
 **/
export class PayUserGeneralListByCompany extends PayUserGeneralList implements IPayListByCompany {
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
 * Gets the list of {@link UserGeneral}s for the specified {@link Company} only if the {@link UserGeneralGeneral.labels} matches all of the given {@link Parameters.labels}.
 **/
export class PayUserGeneralListByCompanyAndLabels extends PayUserGeneralListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link UserGeneral.labels}
	 **/
	labels: string[];

	constructor(json: any) {
		super(json);
		this.labels = json?.labels ?? [];
	}
}
/**
 * Gets the list of {@link UserGeneral}s for the specified {@link Company} only if one of the specified {@link UserGeneralGeneral.references} fields match.
 * If no references are specified, it will match any {@link UserGeneral} with no references.
 * If a reference value is null, it will match any {@link UserGeneral} without that reference key.
 **/
export class PayUserGeneralListByCompanyAndRefPairs extends PayUserGeneralListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link UserGeneralGeneral.references}
	 **/
	references: Map<string, string>;

	constructor(json: any) {
		super(json);
		this.references = serialization.toMap(json?.references ?? {});
	}
}