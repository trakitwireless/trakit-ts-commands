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
 * 
 **/
export abstract class PayDispatchJobList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link DispatchJob}s.
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 **/
export class PayDispatchJobListByAsset extends PayDispatchJobList implements IPayListByAsset {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	asset: ParamId;
	}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset} only if the specified reference fields match.
 * If no references are specified, it will match any {@link DispatchJob} with no references.
 * If a reference value is null, it will match any {@link DispatchJob} without that reference key.
 **/
export class PayDispatchJobListByAssetAndRefPairs extends PayDispatchJobListByAsset {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchJob.references}
	 **/
	references: Map<string, string>;
	}

/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Company}.
 **/
export class PayDispatchJobListByCompany extends PayDispatchJobList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Company} only if the {@link DispatchJob.labels} matches all of the given {@link labels}.
 **/
export class PayDispatchJobListByCompanyAndLabels extends PayDispatchJobListByCompany implements IPayListByLabels {
	/**
	 * A list of {@link LabelStyle.code|label codes} used to match {@link DispatchJob}s.
	 * All labels must match to include a {@link DispatchJob} in the result.
	 **/
	labels: string[];
	}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Company} only if the specified reference fields match.
 * If no references are specified, it will match any {@link DispatchJob} with no references.
 * If a reference value is null, it will match any {@link DispatchJob} without that reference key.
 **/
export class PayDispatchJobListByCompanyAndRefPairs extends PayDispatchJobListByCompany implements IPayListByReferences {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchJob.references}
	 **/
	references: Map<string, string>;
	}

/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Company} which are not assigned to an {@link Asset}.
 **/
export class PayDispatchJobListByUnassigned extends PayDispatchJobListByCompany { }
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Company} which are not assigned to an {@link Asset}, only if the {@link DispatchJob.labels} matches all of the given {@link labels}.
 **/
export class PayDispatchJobListByUnassignedAndLabels extends PayDispatchJobListByUnassigned implements IPayListByLabels {
	/**
	 * A list of {@link LabelStyle.code|label codes} used to match {@link DispatchJob}s.
	 * All labels must match to include a {@link DispatchJob} in the result.
	 **/
	labels: string[];
	}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Company} which are not assigned to an {@link Asset}, only if the specified reference fields match.
 * If no references are specified, it will match any {@link DispatchJob} with no references.
 * If a reference value is null, it will match any {@link DispatchJob} without that reference key.
 **/
export class PayDispatchJobListByUnassignedAndRefPairs extends PayDispatchJobListByUnassigned implements IPayListByReferences {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchJob.references}
	 **/
	references: Map<string, string>;}