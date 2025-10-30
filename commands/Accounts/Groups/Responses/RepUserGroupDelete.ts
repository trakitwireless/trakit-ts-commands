import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link userGroup}.
 **/
export class RepUserGroupDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link UserGroup}.
	 **/
	userGroup: ContentIdDeleted | nothing;
	
	constructor(json: JsonObject) {
		super(json, "UserGroup");
		this.userGroup = ContentIdDeleted.fromJSON(json?.userGroups as JsonObject);
	}

	protected override _getKey() { return this.userGroup?.id as ulong; }
}