import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { Payload } from "../../API/Requests/Payload";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyListByCompany } from "../Responses/RepCompanyList";

/**
 * Gets details of the specified {@link company}.
 **/
export abstract class PayCompanyList extends Payload implements IPayDeletable {
	/**
	 * When set to true, the full tree of {@link Company|companies} is returned.
	 * Otherwise, only the first-level child-{@link Company|companies} are included.
	 **/
	tree: boolean;
	/**
	 * When set to true, the parent {@link Company} is included in the results.
	 **/
	includeParent: boolean;
	/**
	 * When true, the command will also return  deleted {@link Company}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super();
		this.tree = json?.tree as boolean ?? true;
		this.includeParent = !!json?.includeParent;
		this.includeDeleted = !!json?.includeDeleted;
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyListByCompany(json as JsonObject);
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayCompanyListByCompany extends PayCompanyList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepCompanyListByCompany(json as JsonObject);
	}
}