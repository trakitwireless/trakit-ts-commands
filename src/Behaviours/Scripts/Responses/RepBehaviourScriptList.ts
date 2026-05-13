import { BehaviourScript, codified, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link behaviourScripts}.
 */
export abstract class RepBehaviourScriptList extends ReplySyncList<BehaviourScript> {
	/**
	 * The list of requested {@link BehaviourScript}s.
	 */
	behaviourScripts: BehaviourScript[] | nothing;

	constructor(json: JsonObject) {
		super(json, "BehaviourScript");
		this.behaviourScripts = (json?.behaviourScripts as JsonObject[])?.map((x: any) => new BehaviourScript(x));
	}
	override getList() { return this.behaviourScripts as BehaviourScript[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 */
export class RepBehaviourScriptListByCompany extends RepBehaviourScriptList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, BehaviourScript], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}