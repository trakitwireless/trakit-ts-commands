import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { PayFormTemplate } from "./PayFormTemplate";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { RepFormTemplateGet } from "../Responses/RepFormTemplateGet";

/**
 * Gets details of the specified {@link FormTemplate}.
 */
export class PayFormTemplateGet extends PayFormTemplate implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link FormTemplate} (if it exists).
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepFormTemplateGet(json as JsonObject);
	}
}