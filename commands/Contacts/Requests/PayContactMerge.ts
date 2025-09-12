import { Payload } from "../../API/Requests/Payload";
import { IPaySingle } from "../../API/Requests/IPaySingle";
import { ParamContactMerge } from "./Parameters/ParamContactMerge";

/**
 * Creates a new or updates an existing {@link Contact}.
 **/
export class PayContactMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Contact}.
	 **/
	contact: ParamContactMerge;


	constructor(json: any) {
		super(json);
		this.contact = new ParamContactMerge(json?.contact);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.contact?.id?.toString() ?? "";
	}
}