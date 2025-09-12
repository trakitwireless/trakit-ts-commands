import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

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