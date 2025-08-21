import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";

/**
 * Creates a new or updates an existing <see cref="Company"/>.
 **/
export class PayCompanyMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a <see cref="Company"/>.
	 **/
	company: ParamCompanyMerge;

	/**
		///
	 **/
		getKey(): string {
			return  this.company?.id?.ToString() ?? "";
		}}