import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link behaviourScript}.
 **/
export class RepBehaviourScriptMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	behaviourScript: ContentIdCompany | nothing;

	constructor(json?: any) {
		super(json);
		this.behaviourScript = ContentIdCompany.fromJSON(json?.behaviourScript);
	}
}