import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepProviderListByCompany, RepProviderListByConfig } from "../Responses/RepProviderList";

/**
 * Gets details of the specified {@link provider}.
 */
export abstract class PayProviderList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return suspended {@link ProviderControl}s.
	 */
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted {@link ProviderControl} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeSuspended = json?.includeSuspended as boolean ?? true;
		this.includeDeleted = !!json?.includeDeleted;
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeSuspended: !!this.includeSuspended,
			includeDeleted: !!this.includeDeleted,
		};
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 */
export class PayProviderListByCompany extends PayProviderList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderListByCompany(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			company: this.company.toJSON(),
		};
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export class PayProviderListByConfig extends PayProviderList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	config: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.config = new ParamId(json?.config as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderListByConfig(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			config: this.config.toJSON(),
		};
	}
}