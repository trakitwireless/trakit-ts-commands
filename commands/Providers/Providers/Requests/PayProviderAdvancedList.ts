import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { serialization } from "@trakit/objects";

/**
 * Gets a list of {@link ProviderAdvanced}s.
 **/
export abstract class PayProviderAdvancedList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return suspended {@link ProviderAdvanced}s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted {@link ProviderAdvanced} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeSuspended = json?.includeSuspended ?? false;
		this.includeDeleted = json?.includeDeleted ?? true;
	}
}

/**
 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company}.
 **/
export class PayProviderAdvancedListByCompany extends PayProviderAdvancedList implements IPayListByCompany {
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
 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company} only if the {@link ProviderAdvancedGeneral.labels} matches all of the given {@link Parameters.labels}.
 **/
export class PayProviderAdvancedListByCompanyAndLabels extends PayProviderAdvancedListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link ProviderGeneral.labels}
	 **/
	labels: string[];

	constructor(json: any) {
		super(json);
		this.labels = json?.labels ?? [];
	}
}
/**
 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company} only if one of the specified {@link ProviderAdvancedGeneral.references} fields match.
 * If no references are specified, it will match any {@link ProviderAdvanced} with no references.
 * If a reference value is null, it will match any {@link ProviderAdvanced} without that reference key.
 **/
export class PayProviderAdvancedListByCompanyAndRefPairs extends PayProviderAdvancedListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link ProviderAdvancedGeneral.references}
	 **/
	references: Map<string, string>;

	constructor(json: any) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json.references)
			: new Map;
	}

	override createReply(json: any): Reply {
		return new RepProviderAdvancedListByCompany extends PayProviderAdvancedList implements IPayList(json);
	}
}