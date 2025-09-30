import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link formResult}.
 */
export class RepFormResultBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link FormResult}.
	 **/
	formResults: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.formResults = (json?.formResults as JsonObject[])?.map((item: any) => new ContentIdDeleted(item));
	}
}