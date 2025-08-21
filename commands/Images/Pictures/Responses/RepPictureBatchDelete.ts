import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="picture"/>.
 **/
export class RepPictureBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="Picture"/>.
	 **/
	pictures: ContentIdDeleted[];}