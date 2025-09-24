import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { Payload } from "../../../API/Requests/Payload";
import { RepBehaviourScriptListByCompany } from "../Responses/RepBehaviourScriptList";

/**
 * Gets details of the specified {@link behaviourScript}.
 **/
export abstract class PayBehaviourScriptList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link BehaviourScript}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayBehaviourScriptListByCompany extends PayBehaviourScriptList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json: any): Reply {
		return new RepBehaviourScriptListByCompany(json);
	}
}