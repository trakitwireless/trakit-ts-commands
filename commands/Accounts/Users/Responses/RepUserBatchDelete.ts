import { JsonObject } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link user}.
 **/
export class RepUserBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link User}.
	 **/
	users: ContentIdDeleted[];

	constructor(json: JsonObject) {
		super(json);
		this.users = (json?.users as JsonObject[])?.map((u: any) => new ContentIdDeleted(u));
	}
}