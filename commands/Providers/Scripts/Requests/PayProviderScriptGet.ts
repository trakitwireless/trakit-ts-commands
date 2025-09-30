import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayProviderScript } from "./PayProviderScript";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepProviderScriptGet } from "../Responses/RepProviderScriptGet";

/**
 * Gets details of the specified {@link ProviderScript}.
 **/
export class PayProviderScriptGet extends PayProviderScript implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link ProviderScript} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepProviderScriptGet(json as JsonObject);
	}
}