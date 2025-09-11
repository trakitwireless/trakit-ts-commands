import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	machine: ContentIdCompany | nothing;

	constructor(json: any) {
		super(json);
		this.machine = ContentIdCompany.fromJSON(json?.machine);
	}
}