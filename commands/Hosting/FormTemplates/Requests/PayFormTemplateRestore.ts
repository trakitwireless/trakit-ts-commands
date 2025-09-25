import { Reply } from "../../../API/Responses/Reply";
import { RepFormTemplateDelete } from "../Responses/RepFormTemplateDelete";
import { PayFormTemplate } from "./PayFormTemplate";

/**
 * Restores a deleted {@link FormTemplate}.
 */
export class PayFormTemplateRestore extends PayFormTemplate { 
	override createReply(json: any): Reply {
		return new RepFormTemplateDelete(json);
	}
}