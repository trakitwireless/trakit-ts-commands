import { JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link userGroup}.
 **/
export class RepUserGroupBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link UserGroup}.
	 **/
	userGroups: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json, "UserGroup");
		this.userGroups = (json.userGroups as JsonObject[])?.map((ug: any) => new ContentIdDeleted(ug));
	}
	protected override _getKeys() { return this.userGroups?.map(ug => ug.id) as ulong[]; }
}