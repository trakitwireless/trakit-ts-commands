import { JsonObject } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByAsset } from "../../../API/Requests/IPayListByAsset";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourLogListByAsset, RepBehaviourLogListByBehaviour, RepBehaviourLogListByScript } from "../Responses/RepBehaviourLogList";

/**
 * Gets details of the specified {@link behaviourLog}.
 **/
export abstract class PayBehaviourLogList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link BehaviourLog}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayBehaviourLogListByAsset extends PayBehaviourLogList implements IPayListByAsset {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	asset: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.asset = new ParamId(json?.asset as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourLogListByAsset(json);
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayBehaviourLogListByBehaviour extends PayBehaviourLogList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	behaviour: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.behaviour = new ParamId(json?.behaviour as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourLogListByBehaviour(json);
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayBehaviourLogListByScript extends PayBehaviourLogList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	behaviourScript: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.behaviourScript = new ParamId(json?.behaviourScript as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourLogListByScript(json);
	}
}