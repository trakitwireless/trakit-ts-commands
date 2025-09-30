import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link picture}.
 **/
export class RepPictureBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Picture}.
	 **/
	pictures: ContentIdDeleted[];

	constructor(json: JsonObject) {
		super(json);
		this.pictures = (json?.pictures as JsonObject[])?.map((p: any) => new ContentIdDeleted(p));
	}
}