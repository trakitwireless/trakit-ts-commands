import { Behaviour, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the requested {@link behaviours}.
 **/
export abstract class RepBehaviourList extends Reply {
	/**
	 * The list of requested {@link Behaviour}s.
	 **/
	behaviours: Behaviour[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.behaviours = (json?.behaviours as JsonObject[])?.map((item: any) => new Behaviour(item));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepBehaviourListByCompany extends RepBehaviourList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}