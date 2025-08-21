import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the @link {place}.

 **/
export class RepPlaceBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {Place}.

	 **/
	places: ContentIdDeleted[];}