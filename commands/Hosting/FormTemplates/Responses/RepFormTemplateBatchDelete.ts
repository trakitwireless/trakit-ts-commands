import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="formTemplate"/>.

 **/
export class RepFormTemplateBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="FormTemplate"/>.

	 **/
	formTemplates: ContentIdDeleted[];}