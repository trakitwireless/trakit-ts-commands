import { JsonObject } from "@trakit/objects";
import { ParamGuid } from "../../../API/Requests/Parameters/ParamGuid";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link dashcam} object.
 */
export abstract class PayDashcam extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Dashcam}.
	 */
	dashcam: ParamGuid;

	constructor(json?: JsonObject) {
		super(json);
		this.dashcam = new ParamGuid(json?.dashcam as JsonObject);
	}

	/**
	 * 
	 */
	getKey(): string {
		return this.dashcam?.guid ?? "";
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			dashcam: this.dashcam.toJSON(),
		};
	}
}