import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link icon}.
 **/
export class RepIconBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Icon}.
	 **/
	icons: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.icons = (json?.icons as JsonObject[])?.map((i: any) => new ContentIdDeleted(i));
	}
}