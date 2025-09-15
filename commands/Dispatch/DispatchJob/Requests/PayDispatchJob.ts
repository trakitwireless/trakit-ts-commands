import { Payload } from "../../../API/Requests/Payload";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";

/**
 * A container for the {@link dispatchJob} object.
 **/
export abstract class PayDispatchJob extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link DispatchJob}.
	 **/
	dispatchJob: ParamId;

	constructor(json: any) {
		super(json);
		this.dispatchJob = new ParamId(json?.dispatchJob);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.dispatchJob?.id?.toString() ?? "";
	}
}