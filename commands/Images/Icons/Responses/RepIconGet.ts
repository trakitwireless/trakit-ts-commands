import { JsonObject, ulong } from "@trakit/objects";
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
		super(json, "Icon");
		if (json?.icon) {
			this.icon = new Icon(json.icon as JsonObject);
		}
	}
	override getObject() { return this.icon as Icon; }
	override getCompanyId() { return this.icon?.companyId as ulong; }
}