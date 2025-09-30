import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link dashcam} object.
 **/
export abstract class PayDashcam extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Dashcam}.
	 **/
	dashcam: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.dashcam = new ParamId(json?.dashcam as JsonObject);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.dashcam?.id?.toString() ?? "";
	}
}