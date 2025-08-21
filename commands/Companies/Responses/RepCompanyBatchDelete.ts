import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the <see cref="company"/>.
 **/
export class RepCompanyBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested <see cref="Company"/>.
	 **/
	companies: ContentIdDeleted[];}