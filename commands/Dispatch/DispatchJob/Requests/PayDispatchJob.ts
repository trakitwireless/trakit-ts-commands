import { JsonObject, SyncName } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { ActionType, Payload } from "../../../API/Requests/Payload";

/**
 * A container for the {@link dispatchJob} object.
 */
export abstract class PayDispatchJob extends Payload implements IPaySingle {
	/**
	 * An object to contain the "id" of the {@link DispatchJob}.
	 */
	dispatchJob: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.dispatchJob = new ParamId(json?.dispatchJob as JsonObject);
	}

	/**
	 * 
	 */
	getKey(): string {
		return this.dispatchJob?.id?.toString() ?? "";
	}
}

/**
 * 
 */
export abstract class PayDispatchJobSpecial extends Payload {
	/**
	 * 
	 * @returns 
	 */
	override getAction(): {
		kind: ActionType,
		object: SyncName,
		filter: string,
		batch: boolean,
	} {
		const action = super.getAction();
		action.filter = action.kind;
		action.kind = "Merge";
		return action;
	}
}