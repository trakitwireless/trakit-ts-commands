import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByAsset } from "../../../API/Requests/IPayListByAsset";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";
import { Payload } from "../../../API/Requests/Payload";
import { serialization } from "@trakit/objects";
import { RepDispatchTaskListByAsset, RepDispatchTaskListByAssetAndRefPairs, RepDispatchTaskListByCompany, RepDispatchTaskListByCompanyAndRefPairs } from "../Responses/RepDispatchTaskList";

/**
 * 
 **/
export abstract class PayDispatchTaskList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link DispatchTask}s.
	 **/
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}

/**
 * Gets the list of {@link DispatchTask}s for the specified {@link Asset}.
 **/
export class PayDispatchTaskListByAsset extends PayDispatchTaskList implements IPayListByAsset {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	asset: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.asset = new ParamId(json?.asset);
	}

	override createReply(json?: JsonObject): Reply {
		return new RepDispatchTaskListByAsset(json);
	}
}
/**
 * Gets the list of {@link DispatchTask}s for the specified {@link Asset} only if the specified reference fields match.
 * If no references are specified, it will match any {@link DispatchTask} with no references.
 * If a reference value is null, it will match any {@link DispatchTask} without that reference key.
 **/
export class PayDispatchTaskListByAssetAndRefPairs extends PayDispatchTaskListByAsset {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchTask.references}
	 **/
	references: Map<string, string>;

	constructor(json?: JsonObject) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json.references)
			: new Map<string, string>();
	}

	override createReply(json?: JsonObject): Reply {
		return new RepDispatchTaskListByAssetAndRefPairs(json);
	}
}
/**
 * Gets the list of {@link DispatchTask}s for the specified {@link Company}.
 **/
export class PayDispatchTaskListByCompany extends PayDispatchTaskList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json?: JsonObject): Reply {
		return new RepDispatchTaskListByCompany(json);
	}
}
/**
 * Gets the list of {@link DispatchTask}s for the specified {@link Company} only if the specified reference fields match.
 * If no references are specified, it will match any {@link DispatchTask} with no references.
 * If a reference value is null, it will match any {@link DispatchTask} without that reference key.
 **/
export class PayDispatchTaskListByCompanyAndRefPairs extends PayDispatchTaskListByCompany implements IPayListByReferences {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchTask.references}
	 **/
	references: Map<string, string>;

	constructor(json?: JsonObject) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json.references)
			: new Map<string, string>();
	}

	override createReply(json?: JsonObject): Reply {
		return new RepDispatchTaskListByCompanyAndRefPairs(json);
	}
}