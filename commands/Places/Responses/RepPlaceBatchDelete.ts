import { JsonObject } from "@trakit/objects";
import { nothing } from "@trakit/objects";
import { ReplySyncDelete } from "../../API/Responses/ReplySyncDelete";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link place}.
 */
export class RepPlaceBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Place}.
	 */
	places: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.places = (json?.places as JsonObject[])?.map((item: any) => new ContentIdDeleted(item));
	}
}