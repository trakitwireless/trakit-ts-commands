import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * A container for the <see cref="provider"/> object.
 **/
export abstract class PayProvider extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the <see cref="Provider"/>.
	 **/
	provider: ParamIdentifier;

	/**
		///
	 **/
		getKey(): string {
			return  this.provider?.id ?? "";
		}}