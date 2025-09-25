import { nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentIdDeleted } from "../../API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link place}.
 */
export class RepPlaceBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Place}.
	 */
	places: ContentIdDeleted[] | nothing;

	constructor(json?: any) {
		super(json);
		this.places = json?.places?.map((item: any) => new ContentIdDeleted(item));
	}
}