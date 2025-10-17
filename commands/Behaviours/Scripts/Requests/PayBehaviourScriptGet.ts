import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourScriptGet } from "../Responses/RepBehaviourScriptGet";
import { PayBehaviourScript } from "./PayBehaviourScript";

/**
 * Gets details of the specified {@link BehaviourScript}.
 **/
export class PayBehaviourScriptGet extends PayBehaviourScript implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link BehaviourScript} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourScriptGet(json);
	}
}