import { FormTemplate, JsonObject, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link formTemplate}.
 */
export class RepFormTemplateGet extends Reply {
	/**
	 * The requested {@link FormTemplate}.
	 */
	formTemplate: FormTemplate | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.formTemplate) {
			this.formTemplate = new FormTemplate(json.formTemplate as JsonObject);
		}
	}
}