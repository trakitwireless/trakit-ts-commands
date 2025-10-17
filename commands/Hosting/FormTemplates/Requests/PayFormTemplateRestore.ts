import { JsonObject } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { RepFormTemplateDelete } from "../Responses/RepFormTemplateDelete";
import { PayFormTemplate } from "./PayFormTemplate";

/**
 * Restores a deleted {@link FormTemplate}.
 */
export class PayFormTemplateRestore extends PayFormTemplate { 
	override createReply(json: JsonObject): Reply {
		return new RepFormTemplateDelete(json);
	}
}