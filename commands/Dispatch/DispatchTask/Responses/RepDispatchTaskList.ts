import { codified, DispatchJob, DispatchTask, email, guid, JsonObject, nothing, serialization, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { IRepListByAsset } from "../../../API/Responses/IRepListByAsset";
import { IRepListByCompany } from "../../../API/Responses/IRepListByCompany";
import { IRepListByReferences } from "../../../API/Responses/IRepListByReferences";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";

/**
 * A container for the requested {@link dispatchTasks}.
 **/
export abstract class RepDispatchTaskList extends ReplySyncList<DispatchTask> {
	/**
	 * The list of requested {@link DispatchTask}s.
	 **/
	dispatchTasks: DispatchTask[] | nothing;

	constructor(json: JsonObject) {
		super(json, "DispatchTask");
		this.dispatchTasks = (json?.dispatchTasks as JsonObject[])?.map((dt: any) => new DispatchTask(dt));
	}
	override getList() { return this.dispatchTasks as DispatchTask[]; }
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
	override _filterCollection(pair: [ulong | guid | email | codified | string, DispatchTask], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
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
	override _filterCollection(pair: [ulong | guid | email | codified | string, DispatchTask], index: number): boolean {
		return false; // Filtering by references does not guarantee that the other tasks should be purged.
	}
}

/**
 * 
 **/
export class RepDispatchTaskListByAsset extends RepDispatchTaskList implements IRepListByAsset {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	asset: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.asset = ContentIdCompany.fromJSON(json?.asset as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, DispatchTask], index: number): boolean {
		return pair[1].assetId === (this.asset as ContentIdCompany).id;
	}
	override getCompanyId() { return this.asset?.company as ulong; }
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
	override _filterCollection(pair: [ulong | guid | email | codified | string, DispatchTask], index: number): boolean {
		return false; // Filtering by references does not guarantee that the other tasks should be purged.
	}
}