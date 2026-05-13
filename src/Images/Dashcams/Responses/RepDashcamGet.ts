import { Dashcam, JsonObject, nothing, ulong } from "@trakit/objects";
import { ReplySyncGet } from "../../../API/Responses/ReplySyncGet";

/**
 * A container for the {@link dashcam}.
 */
export class RepDashcamGet extends ReplySyncGet<Dashcam> {
	/**
	 * The requested {@link Dashcam}.
	 */
	dashcam: Dashcam | nothing;

	constructor(json: JsonObject) {
		super(json, "Dashcam");
		if (json?.dashcam) {
			this.dashcam = new Dashcam(json.dashcam as JsonObject);
		}
	}
	override getObject() { return this.dashcam as Dashcam; }
	override getCompanyId() { return this.dashcam?.companyId as ulong; }
}