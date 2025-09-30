import { JsonObject } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link formTemplate}.
 */
export class RepFormTemplateDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link FormTemplate}.
	 */
	formTemplate: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.formTemplate = ContentIdDeleted.fromJSON(json?.formTemplate as JsonObject);
	}
}