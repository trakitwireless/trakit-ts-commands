import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the <see cref="place"/>.

 **/
export class RepPlaceBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="Place"/>.

	 **/
	places: ContentIdDeleted[];}