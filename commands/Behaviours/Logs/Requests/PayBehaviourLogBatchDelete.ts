import { JsonObject } from "@trakit/objects";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepBehaviourLogBatchDeleteByAsset, RepBehaviourLogBatchDeleteByBehaviour, RepBehaviourLogBatchDeleteByScript } from "../Responses/RepBehaviourLogBatchDelete";

/**
 * 
 **/
export class PayBehaviourLogBatchDeleteByAsset extends Payload {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	asset: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.asset = new ParamId(json?.asset as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourLogBatchDeleteByAsset(json as JsonObject);
	}
}
/**
 * 
 **/
export class PayBehaviourLogBatchDeleteByBehaviour extends Payload {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	behaviour: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.behaviour = new ParamId(json?.behaviour as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourLogBatchDeleteByBehaviour(json as JsonObject);
	}
}
/**
 * 
 **/
export class PayBehaviourLogBatchDeleteByScript extends Payload {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	behaviourScript: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.behaviourScript = new ParamId(json?.behaviourScript as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepBehaviourLogBatchDeleteByScript(json as JsonObject);
	}
}