import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the <see cref="contact"/>.
 **/
export class RepContactBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="Contact"/>.
	 **/
	contacts: ContentIdDeleted[];}