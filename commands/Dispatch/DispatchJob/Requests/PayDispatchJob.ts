import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="dispatchJob"/> object.
 **/
export abstract class PayDispatchJob extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="DispatchJob"/>.
	 **/
	dispatchJob: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.dispatchJob?.id.ToString() ?? "";
		}}