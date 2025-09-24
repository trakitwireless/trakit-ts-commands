import { PayDispatchJob } from "./PayDispatchJob";

/**
 * Restores a deleted {@link DispatchJob}.
 **/
export class PayDispatchJobRestore extends PayDispatchJob { 
	override createReply(json: any): Reply {
		return new RepDispatchJobRestore(json);
	}
}