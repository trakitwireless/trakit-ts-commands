import { JsonObject, nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link dispatchJob}.
 **/
export class RepDispatchJobMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	dispatchJob: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.dispatchJob = ContentIdCompany.fromJSON(json?.dispatchJob as JsonObject);
	}
}