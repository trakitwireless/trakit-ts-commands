import { email, JsonObject, ulong } from "@trakit/objects";
import { ContentLoginDeleted } from "../../../API/Responses/Content/ContentLoginDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link user}.
 */
export class RepUserBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link User}.
	 */
	users: ContentLoginDeleted[];

	constructor(json: JsonObject) {
		super(json, "User");
		this.users = (json?.users as JsonObject[])?.map((u: any) => new ContentLoginDeleted(u));
	}
	protected override _getKeys() { return this.users?.map(u => u.login) as email[]; }
	override getCompanyId() { return this.users?.[0]?.company as ulong; }
	override getResults() { return this.users as ContentLoginDeleted[]; }
}