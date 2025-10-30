import { DispatchTask, JsonObject, nothing, serialization } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { IRepListByAsset } from "../../../API/Responses/IRepListByAsset";
import { IRepListByCompany } from "../../../API/Responses/IRepListByCompany";
import { IRepListByReferences } from "../../../API/Responses/IRepListByReferences";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link dispatchTasks}.
 **/
export abstract class RepDispatchTaskList extends ReplySyncList<DispatchTask> {
	/**
	 * The list of requested {@link DispatchTask}s.
	 **/
	dispatchTasks: DispatchTask[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.dispatchTasks = (json?.dispatchTasks as JsonObject[])?.map((dt: any) => new DispatchTask(dt));
	}
}

/**
 * 
 **/
export class RepDispatchTaskListByAsset extends RepDispatchTaskList implements IRepListByAsset {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	asset: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.asset = ContentId.fromJSON(json?.asset as JsonObject);
	}
}
/**
 * 
 **/
export class RepDispatchTaskListByAssetAndRefPairs extends RepDispatchTaskListByAsset {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchTask.references}
	 **/
	references: Map<string, string> | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json?.references as object)
			: null;
	}
}
/**
 * 
 **/
export class RepDispatchTaskListByCompany extends RepDispatchTaskList implements IRepListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}
/**
 * 
 **/
export class RepDispatchTaskListByCompanyAndRefPairs extends RepDispatchTaskListByCompany implements IRepListByReferences {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchTask.references}
	 **/
	references: Map<string, string> | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json?.references as object)
			: null;
	}
}