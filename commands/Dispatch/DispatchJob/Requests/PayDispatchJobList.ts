import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByAsset } from "../../../API/Requests/IPayListByAsset";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";
import { Payload } from "../../../API/Requests/Payload";
import { serialization } from "@trakit/objects";

/**
 * 
 **/
export abstract class PayDispatchJobList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link DispatchJob}s.
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}

/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 **/
export class PayDispatchJobListByUnassigned extends PayDispatchJobListByCompany { 
	override createReply(json: any): Reply {
		return new RepDispatchJobListByUnassigned extends PayDispatchJobList(json);
	}
}