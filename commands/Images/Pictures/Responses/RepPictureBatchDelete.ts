import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link picture}.
 **/
export class RepPictureBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link Picture}.
	 **/
	pictures: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.pictures = (json?.pictures as JsonObject[])?.map((p: any) => new ContentIdDeleted(p));
	}
}