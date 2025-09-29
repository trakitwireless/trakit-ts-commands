import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepProviderControlListByCompany, RepProviderControlListByConfig } from "../Responses/RepProviderControlList";

/**
 * Gets a list of {@link ProviderControl}s.
 **/
export abstract class PayProviderControlList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return suspended {@link ProviderControl}s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted {@link ProviderControl} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeSuspended = json?.includeSuspended ?? true;
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}

/**
 * Gets the list of {@link ProviderControl}s for the specified {@link Company}.
 **/
export class PayProviderControlListByCompany extends PayProviderControlList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json?: JsonObject): Reply {
		return new RepProviderControlListByCompany(json);
	}
}
/**
 * Gets the list of {@link ProviderControl}s for the specified {@link Company}.
 **/
export class PayProviderControlListByConfig extends PayProviderControlList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	config: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.config = new ParamId(json?.config);
	}

	override createReply(json?: JsonObject): Reply {
		return new RepProviderControlListByConfig(json);
	}
}