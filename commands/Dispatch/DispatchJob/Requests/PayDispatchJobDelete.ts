import { PayDispatchJob } from "./PayDispatchJob";

/**
 * Deletes an existing {@link DispatchJob}.
 **/
export class PayDispatchJobDelete extends PayDispatchJob { 
	override createReply(json: any): Reply {
		return new RepDispatchJobDelete(json);
	}
}