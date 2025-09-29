import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchJobMerge } from "../Responses/RepDispatchJobMerge";
import { ParamDispatchJobChange } from "./Parameters/ParamDispatchJobChange";
import { PayDispatchJobSpecial } from "./PayDispatchJob";

/**
 * Completes or modifies an existing {@link DispatchJob} from a driver's perspective.
 * This can be used by dispatchers to accomodate thrid-party delivery systems, or correcting errors from drivers.
 **/
export class PayDispatchJobChange extends PayDispatchJobSpecial implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link DispatchJob}.
	 **/
	dispatchJob: ParamDispatchJobChange;

	constructor(json?: JsonObject) {
		super(json);
		this.dispatchJob = new ParamDispatchJobChange(json?.dispatchJob);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.dispatchJob?.id?.toString() ?? "";
	}

	override createReply(json?: JsonObject): Reply {
		return new RepDispatchJobMerge(json);
	}
}