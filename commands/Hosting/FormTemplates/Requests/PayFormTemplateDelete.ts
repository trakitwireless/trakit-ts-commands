import { PayFormTemplate } from "./PayFormTemplate";

/**
 * Deletes an existing {@link FormTemplate}.
 */
export class PayFormTemplateDelete extends PayFormTemplate { 
	override createReply(json: any): Reply {
		return new RepFormTemplateDelete(json);
	}
}