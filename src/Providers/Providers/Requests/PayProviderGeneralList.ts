import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepProviderGeneralListByCompany, RepProviderGeneralListByConfig } from "../Responses/RepProviderGeneralList";

/**
 * Gets a list of {@link ProviderGeneral}s.
 */
export abstract class PayProviderGeneralList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return a deleted {@link ProviderGeneral} (if it exists).
	 */
	includeDeleted: boolean;
	/**
	 * When true, the command will also return suspended {@link ProviderGeneral}s.
	 */
	includeSuspended: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeSuspended = json?.includeSuspended as boolean ?? true;
		this.includeDeleted = !!json?.includeDeleted;
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
			includeSuspended: !!this.includeSuspended,
		};
	}
}

/**
 * Gets the list of {@link ProviderGeneral}s for the specified {@link Company}.
 */
export class PayProviderGeneralListByCompany extends PayProviderGeneralList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderGeneralListByCompany(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			company: this.company.toJSON(),
		};
	}
}
/**
 * Gets the list of {@link ProviderGeneral}s for the specified {@link Company}.
 */
export class PayProviderGeneralListByConfig extends PayProviderGeneralList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	config: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.config = new ParamId(json?.config as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderGeneralListByConfig(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			config: this.config.toJSON(),
		};
	}
}