import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { Payload } from "../../../API/Requests/Payload";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified {@link formResult}.
 */
export abstract class PayFormResultList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link FormResult}s.
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
export class PayFormResultListByCompany extends PayFormResultList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}
}