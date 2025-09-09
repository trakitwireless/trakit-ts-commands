import { ParamId } from "commands";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { Payload } from "../../../API/Requests/Payload";

/**
 * Gets details of the specified {@link userGroup}.
 **/
export abstract class PayUserGroupList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link UserGroup}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeDeleted = json?.["includeDeleted"] ?? false;
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayUserGroupListByCompany extends PayUserGroupList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: any) {
		super(json);
		this.company = new ParamId(json?.["company"]);
	}
}