import { JsonObject } from "@trakit/objects";
import { Icon, nothing } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link icon}.
 **/
export class RepIconGet extends ReplySyncGet<Icon> {
	/**
	 * The requested {@link Icon}.
	 **/
	icon: Icon | nothing;

	constructor(json: JsonObject) {
		super(json);
		if (json?.icon) {
			this.icon = new Icon(json.icon as JsonObject);
		}
	}
}