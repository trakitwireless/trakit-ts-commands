import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Payload } from "../../../API/Requests/Payload";
import { serialization } from "@trakit/objects";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";

/**
 * Gets a list of {@link UserAdvanced}s.
 **/
export abstract class PayUserAdvancedList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link UserAdvanced} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted;
	}
}

/**
 * Gets the list of {@link UserAdvanced}s for the specified {@link Company}.
 **/
export class PayUserAdvancedListByCompany extends PayUserAdvancedList implements IPayListByCompany {
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
 * Gets the list of {@link UserAdvanced}s for the specified {@link Company} only if the {@link UserAdvancedGeneral.labels} matches all of the given {@link Parameters.labels}.
 **/
export class PayUserAdvancedListByCompanyAndLabels extends PayUserAdvancedListByCompany implements IPayListByLabels {
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
 * Gets the list of {@link UserAdvanced}s for the specified {@link Company} only if one of the specified {@link UserAdvancedGeneral.references} fields match.
 * If no references are specified, it will match any {@link UserAdvanced} with no references.
 * If a reference value is null, it will match any {@link UserAdvanced} without that reference key.
 **/
export class PayUserAdvancedListByCompanyAndRefPairs extends PayUserAdvancedListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link UserAdvancedGeneral.references}
	 **/
	references: Map<string, string>;

	constructor(json: any) {
		super(json);
		this.references = serialization.toMap(json?.references ?? {});
	}
}