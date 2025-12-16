import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Reply } from "../../../API/Responses/Reply";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderAdvancedListByCompany, RepProviderAdvancedListByConfig } from "../Responses/RepProviderAdvancedList";

/**
 * Gets a list of {@link ProviderAdvanced}s.
 */
export abstract class PayProviderAdvancedList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return suspended {@link ProviderAdvanced}s.
	 */
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted {@link ProviderAdvanced} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeSuspended = json?.includeSuspended as boolean ?? true;
		this.includeDeleted = !!json?.includeDeleted;
	}
}

/**
 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company}.
 */
export class PayProviderAdvancedListByCompany extends PayProviderAdvancedList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}
	
	override createReply(json: JsonObject): Reply {
		return new RepProviderAdvancedListByCompany(json);
	}
}
/**
 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company}.
 */
export class PayProviderAdvancedListByConfig extends PayProviderAdvancedList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	config: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.config = new ParamId(json?.config as JsonObject);
	}
	
	override createReply(json: JsonObject): Reply {
		return new RepProviderAdvancedListByConfig(json);
	}
}