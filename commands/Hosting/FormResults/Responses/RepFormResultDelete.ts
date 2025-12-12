import { JsonObject, nothing, ulong } from "@trakit/objects";
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
		super(json, "FormResult");
		this.formResult = ContentIdDeleted.fromJSON(json?.formResult as JsonObject);
	}
	override getKey() { return this.formResult?.id as ulong; }
	override getCompanyId() { return this.formResult?.company as ulong; }
}