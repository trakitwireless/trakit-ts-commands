import { BehaviourScript, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "../../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link behaviourScripts}.
 **/
export abstract class RepBehaviourScriptList extends Reply {
	/**
	 * The list of requested {@link BehaviourScript}s.
	 **/
	behaviourScripts: BehaviourScript[] | nothing;

	constructor(json?: any) {
		super(json);
		this.behaviourScripts = json?.behaviourScripts?.map((x: any) => new BehaviourScript(x));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepBehaviourScriptListByCompany extends RepBehaviourScriptList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json?: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}