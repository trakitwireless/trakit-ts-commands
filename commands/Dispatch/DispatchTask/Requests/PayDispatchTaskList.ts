import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayDispatchTaskList } from "./PayDispatchTaskList";
import { IPayListByAsset } from "../../../API/Requests/IPayListByAsset";
import { PayDispatchTaskListByAsset } from "./PayDispatchTaskList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { PayDispatchTaskListByCompany } from "./PayDispatchTaskList";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";

/**
 * 
 **/
export abstract class PayDispatchTaskList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted @link {DispatchTask}s.
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of @link {DispatchTask}s for the specified @link {Asset}.
 **/
export class PayDispatchTaskListByAsset extends PayDispatchTaskList implements IPayListByAsset {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	asset: ParamId;
	}
/**
 * Gets the list of @link {DispatchTask}s for the specified @link {Asset} only if the specified reference fields match.
 * If no references are specified, it will match any @link {DispatchTask} with no references.
 * If a reference value is null, it will match any @link {DispatchTask} without that reference key.
 **/
export class PayDispatchTaskListByAssetAndRefPairs extends PayDispatchTaskListByAsset {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchTask.references}
	 **/
	references: Map<string, string>;
	}

/**
 * Gets the list of @link {DispatchTask}s for the specified @link {Company}.
 **/
export class PayDispatchTaskListByCompany extends PayDispatchTaskList implements IPayListByCompany {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of @link {DispatchTask}s for the specified @link {Company} only if the specified reference fields match.
 * If no references are specified, it will match any @link {DispatchTask} with no references.
 * If a reference value is null, it will match any @link {DispatchTask} without that reference key.
 **/
export class PayDispatchTaskListByCompanyAndRefPairs extends PayDispatchTaskListByCompany implements IPayListByReferences {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchTask.references}
	 **/
	references: Map<string, string>;}