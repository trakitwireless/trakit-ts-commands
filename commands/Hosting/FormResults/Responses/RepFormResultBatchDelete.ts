import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdDeleted } from "commands/API/Responses/Content/ContentIdDeleted";

/**
 * A container for the {@link formResult}.
 */
export class RepFormResultBatchDelete extends Reply {
	/**
	 * Details about deleting/restoring the requested {@link FormResult}.
	 **/
	formResults: ContentIdDeleted[] | nothing;

	constructor(json: any) {
		super(json);
		this.formResults = json?.formResults?.map((item: any) => new ContentIdDeleted(item));
	}
}