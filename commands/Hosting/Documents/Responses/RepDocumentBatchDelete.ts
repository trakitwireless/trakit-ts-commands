import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="document"/>.
 **/
export class RepDocumentBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="Document"/>.
	 **/
	documents: ContentIdDeleted[];}