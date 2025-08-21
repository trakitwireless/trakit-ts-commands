import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";

/**
 * A container for the @link {company} object.
 **/
export abstract class PayCompany extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the @link {Company}.
	 **/
	company: ParamId;

	/**
	 * 
	 **/
		getKey(): string {
			return  this.company?.id.ToString() ?? "";
		}}