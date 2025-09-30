import { JsonObject } from "@trakit/objects";
import { RepFormTemplateDelete } from "../Responses/RepFormTemplateDelete";
import { Reply } from "../../../API/Responses/Reply";
import { PayFormTemplate } from "./PayFormTemplate";

/**
 * Deletes an existing {@link FormTemplate}.
 */
export class PayFormTemplateDelete extends PayFormTemplate { 
	override createReply(json: JsonObject): Reply {
		return new RepFormTemplateDelete(json as JsonObject);
	}
}