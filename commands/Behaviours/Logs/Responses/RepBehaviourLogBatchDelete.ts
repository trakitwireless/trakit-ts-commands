import { BehaviourLog, JsonObject, nothing, storage, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncBatchDelete } from "../../../API/Responses/ReplySyncBatchDelete";

/**
 * 
 */
abstract class RepBehaviourLogBatchDelete extends ReplySyncBatchDelete {
	/**
	 * A filter function to select which {@link BehaviourLog}s to delete from storage.
	 */
	protected _filter: (log: BehaviourLog) => boolean;

	constructor(json: JsonObject, filter: (log: BehaviourLog) => boolean) {
		super(json, "BehaviourLog");
		this._filter = filter;
	}
	protected override _getKeys() {
		return [
			...(storage[this._typeName] as Map<ulong, BehaviourLog>)
				.entries()
				.filter(([key, log]) => this._filter(log))
				.map(([key, log]) => key)
		];
	}
}

/**
 * A container for the {@link behaviourLog}.
 **/
export class RepBehaviourLogBatchDeleteByAsset extends RepBehaviourLogBatchDelete {
	/**
	 * Identifier of the {@link Asset} to which this collection belongs.
	 **/
	asset: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json, (log) => log.assetId === this.asset?.id);
		this.asset = ContentId.fromJSON(json?.asset as JsonObject);
	}
}
/**
 * A container for the {@link behaviourLog}.
 **/
export class RepBehaviourLogBatchDeleteByBehaviour extends RepBehaviourLogBatchDelete {
	/**
	 * Identifier of the {@link Behaviour} to which this collection belongs.
	 **/
	behaviour: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json, (log) => log.behaviourId === this.behaviour?.id);
		this.behaviour = ContentId.fromJSON(json?.behaviour as JsonObject);
	}
}
/**
 * A container for the {@link behaviourLog}.
 **/
export class RepBehaviourLogBatchDeleteByScript extends RepBehaviourLogBatchDelete {
	/**
	 * Identifier of the {@link BehaviourScript} to which this collection belongs.
	 **/
	behaviourScript: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json, (log) => log.behaviour?.scriptId === this.behaviourScript?.id);
		this.behaviourScript = ContentId.fromJSON(json?.behaviourScript as JsonObject);
	}
}