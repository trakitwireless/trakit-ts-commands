import { BehaviourLog, codified, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ContentIdScript } from "../../../API/Responses/Content/ContentIdScript";

/**
 * A container for the requested {@link behaviourLogs}.
 */
export abstract class RepBehaviourLogList extends ReplySyncList<BehaviourLog> {
	/**
	 * The list of requested {@link BehaviourLog}s.
	 */
	behaviourLogs: BehaviourLog[] | nothing;
	
	constructor(json: JsonObject) {
		super(json, "BehaviourLog");
		this.behaviourLogs = (json?.behaviourLogs as JsonObject[])?.map((item: any) => new BehaviourLog(item));
	}
	override getList() { return this.behaviourLogs as BehaviourLog[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 */
export class RepBehaviourLogListByAsset extends RepBehaviourLogList {
	/**
	 * Identifier of the {@link Asset} to which this collection belongs.
	 */
	asset: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.asset = ContentIdCompany.fromJSON(json?.asset as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, BehaviourLog], index: number): boolean {
		return pair[1].assetId === (this.asset as ContentIdCompany).id;
	}
	override getCompanyId() { return this.asset?.company as ulong; }
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export class RepBehaviourLogListByBehaviour extends RepBehaviourLogList {
	/**
	 * Identifier of the {@link Behaviour} to which this collection belongs.
	 */
	behaviour: ContentIdScript | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.behaviour = ContentIdScript.fromJSON(json?.behaviour as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, BehaviourLog], index: number): boolean {
		return pair[1].behaviourId === (this.behaviour as ContentIdScript).id;
	}
	override getCompanyId() { return this.behaviour?.company as ulong; }
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export class RepBehaviourLogListByScript extends RepBehaviourLogList {
	/**
	 * Identifier of the {@link BehaviourScript} to which this collection belongs.
	 */
	behaviourScript: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.behaviourScript = ContentIdCompany.fromJSON(json?.behaviourScript as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, BehaviourLog], index: number): boolean {
		return pair[1].scriptId === (this.behaviourScript as ContentIdCompany).id;
	}
	override getCompanyId() { return this.behaviourScript?.company as ulong; }
}