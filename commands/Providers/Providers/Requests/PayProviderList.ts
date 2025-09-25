import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepProviderListByCompany, RepProviderListByConfig } from "../Responses/RepProviderList";

/**
 * Gets details of the specified {@link provider}.
 **/
export abstract class PayProviderList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return suspended {@link ProviderControl}s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted {@link ProviderControl} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeSuspended = json?.includeSuspended ?? true;
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayProviderListByCompany extends PayProviderList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json: any): Reply {
		return new RepProviderListByCompany(json);
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayProviderListByConfig extends PayProviderList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	config: ParamId;

	constructor(json: any) {
		super(json);
		this.config = new ParamId(json?.config);
	}

	override createReply(json: any): Reply {
		return new RepProviderListByConfig(json);
	}
}