import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link document}.
 **/
export class RepDocumentBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Document}.
	 **/
	documents: ContentIdDeleted[];}