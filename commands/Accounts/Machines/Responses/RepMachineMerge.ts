import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link machine}.
 **/
export class RepMachineMerge extends Reply {
	/**
	 * An object which contains the `id</c> and <c>company` keys when there is no error.
	 **/
	machine: ContentIdCompany;

	constructor(json: any) {
		super(json);
		this.machine = new ContentIdCompany(json?.machine);
	}
}