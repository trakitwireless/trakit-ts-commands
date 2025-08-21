import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the @link {company}.
 **/
export class RepCompanyBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested @link {Company}.
	 **/
	companies: ContentIdDeleted[];}