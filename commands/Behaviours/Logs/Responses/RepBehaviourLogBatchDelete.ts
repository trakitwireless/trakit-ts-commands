import { BehaviourLog, JsonObject, nothing, storage, ulong } from "@trakit/objects";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ContentIdScript } from "../../../API/Responses/Content/ContentIdScript";
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
	asset: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json, (log) => log.assetId === this.asset?.id);
		this.asset = ContentIdCompany.fromJSON(json?.asset as JsonObject);
	}
	override getResults() { return [] as ContentIdCompany[]; }
	override getCompanyId() { return this.asset?.company as ulong; }
}
/**
 * A container for the {@link behaviourLog}.
 **/
export class RepBehaviourLogBatchDeleteByBehaviour extends RepBehaviourLogBatchDelete {
	/**
	 * Identifier of the {@link Behaviour} to which this collection belongs.
	 **/
	behaviour: ContentIdScript | nothing;

	constructor(json: JsonObject) {
		super(json, (log) => log.behaviourId === this.behaviour?.id);
		this.behaviour = ContentIdScript.fromJSON(json?.behaviour as JsonObject);
	}
	override getResults() { return [] as ContentIdScript[]; }
	override getCompanyId() { return this.behaviour?.company as ulong; }
}
/**
 * A container for the {@link behaviourLog}.
 **/
export class RepBehaviourLogBatchDeleteByScript extends RepBehaviourLogBatchDelete {
	/**
	 * Identifier of the {@link BehaviourScript} to which this collection belongs.
	 **/
	behaviourScript: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json, (log) => log.behaviour?.scriptId === this.behaviourScript?.id);
		this.behaviourScript = ContentIdCompany.fromJSON(json?.behaviourScript as JsonObject);
	}
	override getResults() { return [] as ContentIdCompany[]; }
	override getCompanyId() { return this.behaviourScript?.company as ulong; }
}