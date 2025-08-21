import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="machine"/>.
 **/
export class RepMachineBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="Machine"/>.
	 **/
	machines: ContentIdDeleted[];}