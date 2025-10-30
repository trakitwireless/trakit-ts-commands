import { FormTemplate, JsonObject, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link formTemplate}.
 */
export class RepFormTemplateGet extends ReplySyncGet<FormTemplate> {
	/**
	 * The requested {@link FormTemplate}.
	 */
	formTemplate: FormTemplate | nothing;

	constructor(json: JsonObject) {
		super(json, "FormTemplate");
		if (json?.formTemplate) {
			this.formTemplate = new FormTemplate(json.formTemplate as JsonObject);
		}
	}
	override getObject() { return this.formTemplate as FormTemplate; }
}