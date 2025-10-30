import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link formResult}.
 */
export class RepFormResultDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link FormResult}.
	 */
	formResult: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.formResult = ContentIdDeleted.fromJSON(json?.formResult as JsonObject);
	}
}