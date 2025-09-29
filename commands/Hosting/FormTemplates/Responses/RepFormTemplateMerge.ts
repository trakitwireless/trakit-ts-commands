import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";

/**
 * A container for the {@link formTemplate}.
 */
export class RepFormTemplateMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 */
	formTemplate: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.formTemplate = ContentIdCompany.fromJSON(json?.formTemplate);
	}
}