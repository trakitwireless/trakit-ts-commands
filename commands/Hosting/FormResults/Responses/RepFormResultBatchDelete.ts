import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link formResult}.
 */
export class RepFormResultBatchDelete extends ReplySyncBatchDelete {
	/**
	 * Details about deleting/restoring the requested {@link FormResult}.
	 **/
	formResults: ContentIdDeleted[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.formResults = (json?.formResults as JsonObject[])?.map((item: any) => new ContentIdDeleted(item));
	}
}