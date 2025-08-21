import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="Place"/>.

 **/
export class PayPlaceMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="Place"/>.

	 **/
	place: ParamPlaceMerge;

	/**
	 * 

	 **/
		getKey(): string {
			return  this.place?.id?.ToString() ?? "";
		}}