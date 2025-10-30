import { BehaviourLog, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link behaviourLogs}.
 **/
export abstract class RepBehaviourLogList extends ReplySyncList<BehaviourLog> {
	/**
	 * The list of requested {@link BehaviourLog}s.
	 **/
	behaviourLogs: BehaviourLog[] | nothing;
	
	constructor(json: JsonObject) {
		super(json, "BehaviourLog");
		this.behaviourLogs = (json?.behaviourLogs as JsonObject[])?.map((item: any) => new BehaviourLog(item));
	}
	override getCollection() { return this.behaviourLogs as BehaviourLog[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepBehaviourLogListByAsset extends RepBehaviourLogList {
	/**
	 * Identifier of the {@link Asset} to which this collection belongs.
	 **/
	asset: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.asset = ContentId.fromJSON(json?.asset as JsonObject);
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepBehaviourLogListByBehaviour extends RepBehaviourLogList {
	/**
	 * Identifier of the {@link Behaviour} to which this collection belongs.
	 **/
	behaviour: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.behaviour = ContentId.fromJSON(json?.behaviour as JsonObject);
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepBehaviourLogListByScript extends RepBehaviourLogList {
	/**
	 * Identifier of the {@link BehaviourScript} to which this collection belongs.
	 **/
	behaviourScript: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.behaviourScript = ContentId.fromJSON(json?.behaviourScript as JsonObject);
	}
}