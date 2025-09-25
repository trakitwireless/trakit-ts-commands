import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Reply } from "../../../API/Responses/Reply";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { Payload } from "../../../API/Requests/Payload";
import { RepProviderAdvancedListByCompany, RepProviderAdvancedListByConfig } from "../Responses/RepProviderAdvancedList";

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
	
	override createReply(json: any): Reply {
		return new RepProviderAdvancedListByCompany(json);
	}
}
/**
 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company}.
 **/
export class PayProviderAdvancedListByConfig extends PayProviderAdvancedList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	config: ParamId;

	constructor(json: any) {
		super(json);
		this.config = new ParamId(json?.config);
	}
	
	override createReply(json: any): Reply {
		return new RepProviderAdvancedListByConfig(json);
	}
}