import { nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link contact}.
 **/
export class RepContactBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Contact}.
	 **/
	contacts: ContentIdDeleted[] | nothing;

	constructor(json: any) {
		super(json);
		this.contacts = json?.contacts?.map((c: any) => new ContentIdDeleted(c));
	}
}