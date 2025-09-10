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
	dashcam: ParamId | undefined;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.dashcam?.id.toString() ?? "";
		}}