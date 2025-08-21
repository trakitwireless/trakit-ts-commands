import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchTaskList } from "./RepDispatchTaskList";
import { IRepListByAsset } from "../../../API/Responses/IRepListByAsset";
import { RepDispatchTaskListByAsset } from "./RepDispatchTaskList";
import { IRepListByCompany } from "../../../API/Responses/IRepListByCompany";
import { RepDispatchTaskListByCompany } from "./RepDispatchTaskList";
import { IRepListByReferences } from "../../../API/Responses/IRepListByReferences";

/**
 * A container for the requested @link {dispatchTasks}.
 **/
export abstract class RepDispatchTaskList extends Reply {
	/**
	 * The list of requested @link {DispatchTask}s.
	 **/
	dispatchTasks: DispatchTask[];
	}

/**
 * 
 **/
export class RepDispatchTaskListByAsset extends RepDispatchTaskList implements IRepListByAsset {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	asset: ContentId;
	}
/**
 * 
 **/
export class RepDispatchTaskListByAssetAndRefPairs extends RepDispatchTaskListByAsset {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchTask.references}
	 **/
	references: Map<string, string>;
	}

/**
 * 
 **/
export class RepDispatchTaskListByCompany extends RepDispatchTaskList implements IRepListByCompany {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * 
 **/
export class RepDispatchTaskListByCompanyAndRefPairs extends RepDispatchTaskListByCompany implements IRepListByReferences {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchTask.references}
	 **/
	references: Map<string, string>;}