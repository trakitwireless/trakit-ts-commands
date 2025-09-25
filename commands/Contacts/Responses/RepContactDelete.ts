import { nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../API/Responses/Reply";

/**
 * A container for the {@link contact}.
 **/
export class RepContactDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Contact}.
	 **/
	contact: ContentIdDeleted | nothing;

	constructor(json: any) {
		super(json);
		this.contact = ContentIdDeleted.fromJSON(json?.contact);
	}
}