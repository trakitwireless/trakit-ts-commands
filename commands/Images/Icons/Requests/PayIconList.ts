import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { Payload } from "../../../API/Requests/Payload";
import { RepIconListByCompany } from "../Responses/RepIconList";

/**
 * Gets details of the specified {@link icon}.
 */
export abstract class PayIconList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link Icon}s.
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
export class PayIconListByCompany extends PayIconList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepIconListByCompany(json);
	}
}