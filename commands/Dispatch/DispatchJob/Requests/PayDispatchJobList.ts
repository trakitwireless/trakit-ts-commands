import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayDispatchJobList } from "./PayDispatchJobList";
import { IPayListByAsset } from "../../../API/Requests/IPayListByAsset";
import { PayDispatchJobListByAsset } from "./PayDispatchJobList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { PayDispatchJobListByCompany } from "./PayDispatchJobList";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";
import { PayDispatchJobListByUnassigned } from "./PayDispatchJobList";

/**
	///
 **/
export abstract class PayDispatchJobList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="DispatchJob"/>s.
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Asset"/>.
 **/
export class PayDispatchJobListByAsset extends PayDispatchJobList implements IPayListByAsset {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	asset: ParamId;
	}
/**
 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Asset"/> only if the specified reference fields match.
 * If no references are specified, it will match any <see cref="DispatchJob"/> with no references.
 * If a reference value is null, it will match any <see cref="DispatchJob"/> without that reference key.
 **/
export class PayDispatchJobListByAssetAndRefPairs extends PayDispatchJobListByAsset {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * <seealso cref="DispatchJob.references"/>
	 **/
	references: Map<string, string>;
	}

/**
 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/>.
 **/
export class PayDispatchJobListByCompany extends PayDispatchJobList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> only if the <see cref="DispatchJob.labels"/> matches all of the given <see cref="labels"/>.
 **/
export class PayDispatchJobListByCompanyAndLabels extends PayDispatchJobListByCompany implements IPayListByLabels {
	/**
	 * A list of <see cref="LabelStyle.code">label codes</see> used to match <see cref="DispatchJob"/>s.
	 * All labels must match to include a <see cref="DispatchJob"/> in the result.
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> only if the specified reference fields match.
 * If no references are specified, it will match any <see cref="DispatchJob"/> with no references.
 * If a reference value is null, it will match any <see cref="DispatchJob"/> without that reference key.
 **/
export class PayDispatchJobListByCompanyAndRefPairs extends PayDispatchJobListByCompany implements IPayListByReferences {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * <seealso cref="DispatchJob.references"/>
	 **/
	references: Map<string, string>;
	}

/**
 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> which are not assigned to an <see cref="Asset"/>.
 **/
export class PayDispatchJobListByUnassigned extends PayDispatchJobListByCompany { }
/**
 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> which are not assigned to an <see cref="Asset"/>, only if the <see cref="DispatchJob.labels"/> matches all of the given <see cref="labels"/>.
 **/
export class PayDispatchJobListByUnassignedAndLabels extends PayDispatchJobListByUnassigned implements IPayListByLabels {
	/**
	 * A list of <see cref="LabelStyle.code">label codes</see> used to match <see cref="DispatchJob"/>s.
	 * All labels must match to include a <see cref="DispatchJob"/> in the result.
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> which are not assigned to an <see cref="Asset"/>, only if the specified reference fields match.
 * If no references are specified, it will match any <see cref="DispatchJob"/> with no references.
 * If a reference value is null, it will match any <see cref="DispatchJob"/> without that reference key.
 **/
export class PayDispatchJobListByUnassignedAndRefPairs extends PayDispatchJobListByUnassigned implements IPayListByReferences {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * <seealso cref="DispatchJob.references"/>
	 **/
	references: Map<string, string>;}