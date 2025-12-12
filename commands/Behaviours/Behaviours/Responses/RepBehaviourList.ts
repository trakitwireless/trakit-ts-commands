import { Behaviour, codified, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link behaviours}.
 **/
export abstract class RepBehaviourList extends ReplySyncList<Behaviour> {
	/**
	 * The list of requested {@link Behaviour}s.
	 **/
	behaviours: Behaviour[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Behaviour");
		this.behaviours = (json?.behaviours as JsonObject[])?.map((item: any) => new Behaviour(item));
	}
	override getCollection() { return this.behaviours as Behaviour[]; }
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
	override _filterCollection(pair: [ulong | guid | email | codified | string, Behaviour], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}