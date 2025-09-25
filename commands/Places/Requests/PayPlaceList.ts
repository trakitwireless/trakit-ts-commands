import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { RepPlaceListByCompany } from "../Responses/RepPlaceList";

/**
 * Gets details of the specified {@link place}.
 */
export abstract class PayPlaceList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link Place}s.
	 */
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted;
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export class PayPlaceListByCompany extends PayPlaceList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ParamId;

	constructor(json?: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json: any): Reply {
		return new RepPlaceListByCompany(json);
	}
}