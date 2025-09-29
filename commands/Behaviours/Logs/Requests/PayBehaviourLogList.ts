import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { Payload } from "../../../API/Requests/Payload";
import { RepBehaviourLogListByCompany } from "../Responses/RepBehaviourLogList";

/**
 * Gets details of the specified {@link behaviourLog}.
 **/
export abstract class PayBehaviourLogList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link BehaviourLog}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayBehaviourLogListByCompany extends PayBehaviourLogList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json?: JsonObject): Reply {
		return new RepBehaviourLogListByCompany(json);
	}
}