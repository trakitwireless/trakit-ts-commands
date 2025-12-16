import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepContactListByCompany } from "../Responses/RepContactList";

/**
 * Gets details of the specified {@link contact}.
 */
export abstract class PayContactList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link Contact}s.
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 */
export class PayContactListByCompany extends PayContactList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepContactListByCompany(json);
	}
}