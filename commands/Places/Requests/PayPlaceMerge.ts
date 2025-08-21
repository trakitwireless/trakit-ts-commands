import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing @link {Place}.

 **/
export class PayPlaceMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a @link {Place}.

	 **/
	place: ParamPlaceMerge;

	/**
	 * 

	 **/
		getKey(): string {
			return  this.place?.id?.ToString() ?? "";
		}}