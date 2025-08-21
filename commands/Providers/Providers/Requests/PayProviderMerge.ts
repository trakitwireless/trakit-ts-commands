import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="Provider"/>.
 **/
export class PayProviderMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="Provider"/>.
	 **/
	provider: ParamProviderMerge;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.provider?.id?.ToString() ?? "";
		}}