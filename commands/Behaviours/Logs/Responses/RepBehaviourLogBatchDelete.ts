import { JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * A container for the {@link behaviourLog}.
 **/
export class RepBehaviourLogBatchDeleteByAsset extends Reply {
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
 * A container for the {@link behaviourLog}.
 **/
export class RepBehaviourLogBatchDeleteByBehaviour extends Reply {
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
 * A container for the {@link behaviourLog}.
 **/
export class RepBehaviourLogBatchDeleteByScript extends Reply {
	/**
	 * Identifier of the {@link BehaviourScript} to which this collection belongs.
	 **/
	behaviourScript: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.behaviourScript = ContentId.fromJSON(json?.behaviourScript as JsonObject);
	}
}