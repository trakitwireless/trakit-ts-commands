import { Reply } from "../../../API/Responses/Reply";
import { PayBehaviourScript } from "./PayBehaviourScript";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepBehaviourScriptGet } from "../Responses/RepBehaviourScriptGet";

/**
 * Gets details of the specified {@link BehaviourScript}.
 **/
export class PayBehaviourScriptGet extends PayBehaviourScript implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link BehaviourScript} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}

	override createReply(json: any): Reply {
		return new RepBehaviourScriptGet(json);
	}
}