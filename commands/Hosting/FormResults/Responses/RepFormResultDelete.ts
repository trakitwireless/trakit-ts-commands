import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link formResult}.
 */
export class RepFormResultDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link FormResult}.
	 */
	formResult: ContentIdDeleted | nothing;

	constructor(json: any) {
		super(json);
		this.formResult = ContentIdDeleted.fromJSON(json?.formResult);
	}
}