import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link document}.
 **/
export class RepDocumentBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link Document}.
	 **/
	documents: ContentIdDeleted[] | nothing;

	constructor(json: any) {
		super(json);
		this.documents = json?.documents?.map((item: any) => new ContentIdDeleted(item));
	}
}