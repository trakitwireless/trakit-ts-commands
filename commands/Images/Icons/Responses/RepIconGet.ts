import { Icon, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link icon}.
 **/
export class RepIconGet extends Reply {
	/**
	 * The requested {@link Icon}.
	 **/
	icon: Icon | nothing;

	constructor(json: any) {
		super(json);
		this.icon = json?.icon
			? new Icon(json.icon)
			: null;
	}
}