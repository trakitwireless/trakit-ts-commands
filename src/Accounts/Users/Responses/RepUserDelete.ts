import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link user}.
 */
export class RepUserDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link User}.
	 */
	user: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json, "User");
		this.user = ContentIdDeleted.fromJSON(json?.user as JsonObject);
	}
	override getKey() { return this.user?.id as ulong; }
	override getCompanyId() { return this.user?.company as ulong; }
}