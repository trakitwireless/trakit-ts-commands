import { ParamId } from "commands/API/Requests/Parameters/ParamId";
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

	constructor(json: any) {
		super(json);
		this.includeSuspended = json?.includeSuspended ?? true;
		this.includeDeleted = json?.includeDeleted ?? false;
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

	constructor(json: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json: any): Reply {
		return new RepProviderGeneralListByCompany(json);
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

	constructor(json: any) {
		super(json);
		this.config = new ParamId(json?.config);
	}

	override createReply(json: any): Reply {
		return new RepProviderGeneralListByConfig(json);
	}
}