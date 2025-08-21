import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the <see cref="formResult"/>.

 **/
export class RepFormResultBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="FormResult"/>.

	 **/
	formResults: ContentIdDeleted[];}