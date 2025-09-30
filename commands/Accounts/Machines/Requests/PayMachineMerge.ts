import { JsonObject } from "@trakit/objects";
import { IPaySingle } from "../../../API/Requests/IPaySingle";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepMachineMerge } from "../Responses/RepMachineMerge";
import { ParamMachineMerge } from "./Parameters/ParamMachineMerge";

/**
 * Creates a new or updates an existing {@link Machine}.
 **/
export class PayMachineMerge extends Payload implements IPaySingle {
	/**
	 * Parameters given to create or update a {@link Machine}.
	 **/
	machine: ParamMachineMerge;

	constructor(json?: JsonObject) {
		super(json);
		this.machine = new ParamMachineMerge(json?.machine as JsonObject);
	}

	/**
	 * 
	 **/
	getKey(): string {
		return this.machine?.key ?? "";
	}

	override createReply(json?: JsonObject): Reply {
		return new RepMachineMerge(json as JsonObject);
	}
}