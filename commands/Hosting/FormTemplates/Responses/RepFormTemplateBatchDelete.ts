import { JsonObject } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link formTemplate}.
 */
export class RepFormTemplateBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link FormTemplate}.
	 */
	formTemplates: ContentIdDeleted[];

	constructor(json: JsonObject) {
		super(json);
		this.formTemplates = (json?.formTemplates as JsonObject[])?.map((item: any) => new ContentIdDeleted(item));
	}
}