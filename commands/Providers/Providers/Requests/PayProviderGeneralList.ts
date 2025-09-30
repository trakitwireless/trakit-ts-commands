import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepProviderGeneralListByCompany, RepProviderGeneralListByConfig } from "../Responses/RepProviderGeneralList";

/**
 * Gets a list of {@link ProviderGeneral}s.
 **/
export abstract class PayProviderGeneralList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return a deleted {@link ProviderGeneral} (if it exists).
	 **/
	includeDeleted: boolean;
	/**
	 * When true, the command will also return suspended {@link ProviderGeneral}s.
	 **/
	includeSuspended: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeSuspended = json?.includeSuspended as boolean ?? true;
		this.includeDeleted = !!json?.includeDeleted;
	}
}

/**
 * Gets the list of {@link ProviderGeneral}s for the specified {@link Company}.
 **/
export class PayProviderGeneralListByCompany extends PayProviderGeneralList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderGeneralListByCompany(json as JsonObject);
	}
}
/**
 * Gets the list of {@link ProviderGeneral}s for the specified {@link Company}.
 **/
export class PayProviderGeneralListByConfig extends PayProviderGeneralList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	config: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.config = new ParamId(json?.config as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderGeneralListByConfig(json as JsonObject);
	}
}