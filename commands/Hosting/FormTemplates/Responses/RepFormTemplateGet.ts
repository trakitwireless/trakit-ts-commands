import { FormTemplate, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link formTemplate}.
 */
export class RepFormTemplateGet extends Reply {
	/**
	 * The requested {@link FormTemplate}.
	 */
	formTemplate: FormTemplate | nothing;

	constructor(json: any) {
		super(json);
		this.formTemplate = json?.formTemplate
			? new FormTemplate(json.formTemplate)
			: null;
	}
}