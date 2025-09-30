import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link document}.
 **/
export class RepDocumentBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Document}.
	 **/
	documents: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.documents = (json?.documents as JsonObject[])?.map((item: any) => new ContentIdDeleted(item));
	}
}