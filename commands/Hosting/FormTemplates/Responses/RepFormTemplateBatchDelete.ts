import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {formTemplate}.

 **/
export class RepFormTemplateBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {FormTemplate}.

	 **/
	formTemplates: ContentIdDeleted[];}