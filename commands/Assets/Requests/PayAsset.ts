import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";

/**
 * A container for the {@link asset} object.
 **/
export abstract class PayAsset extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link Asset}.
	 **/
	asset: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.asset?.id.ToString() ?? "";
		}}