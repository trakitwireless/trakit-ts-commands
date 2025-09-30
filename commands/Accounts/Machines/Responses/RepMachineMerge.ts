import { JsonObject, nothing } from "@trakit/objects";
import { ContentKeyCompany } from "../../../API/Responses/Content/ContentKeyCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	machine: ContentKeyCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.machine = ContentKeyCompany.fromJSON(json?.machine as JsonObject);
	}
}