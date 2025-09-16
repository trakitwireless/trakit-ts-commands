import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamIconMerge } from "./Parameters/ParamIconMerge";

/**
 * Creates a new or updates an existing {@link Icon}.
 **/
export class PayIconMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Icon}.
	 **/
	icon: ParamIconMerge;

	constructor(json: any) {
		super(json);
		this.icon = new ParamIconMerge(json?.icon);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.icon?.id?.toString() ?? "";
	}
}