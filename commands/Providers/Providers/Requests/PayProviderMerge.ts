import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamProviderMerge } from "./Parameters/ParamProviderMerge";

/**
 * Creates a new or updates an existing {@link Provider}.
 **/
export class PayProviderMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Provider}.
	 **/
	provider: ParamProviderMerge;

	constructor(json: any) {
		super(json);
		this.provider = new ParamProviderMerge(json?.provider);
	}
	/**
	 * 
	 **/
	getKey(): string {
		return this.provider?.id?.toString() ?? "";
	}
}