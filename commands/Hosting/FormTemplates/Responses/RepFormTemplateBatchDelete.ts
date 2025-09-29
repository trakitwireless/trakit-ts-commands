import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link formTemplate}.
 */
export class RepFormTemplateBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link FormTemplate}.
	 */
	formTemplates: ContentIdDeleted[];

	constructor(json: JsonObject) {
		super(json);
		this.formTemplates = json?.formTemplates?.map((item: any) => new ContentIdDeleted(item));
	}
}