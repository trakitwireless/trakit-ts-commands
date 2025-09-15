import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";

/**
 * A container for the {@link formResult}.
 */
export class RepFormResultMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 */
	formResult: ContentIdCompany | nothing;

	constructor(json: any) {
		super(json);
		this.formResult = ContentIdCompany.fromJSON(json?.formResult);
	}
}