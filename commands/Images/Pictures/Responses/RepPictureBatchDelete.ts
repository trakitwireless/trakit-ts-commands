import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the @link {picture}.
 **/
export class RepPictureBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {Picture}.
	 **/
	pictures: ContentIdDeleted[];}