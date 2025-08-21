import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchJobList } from "./RepDispatchJobList";
import { IRepListByAsset } from "../../../API/Responses/IRepListByAsset";
import { RepDispatchJobListByAsset } from "./RepDispatchJobList";
import { IRepListByCompany } from "../../../API/Responses/IRepListByCompany";
import { RepDispatchJobListByCompany } from "./RepDispatchJobList";
import { IRepListByLabels } from "../../../API/Responses/IRepListByLabels";
import { IRepListByReferences } from "../../../API/Responses/IRepListByReferences";

/**
 * A container for the requested {@link dispatchJobs}.
 **/
export abstract class RepDispatchJobList extends Reply {
	/**
	 * The list of requested {@link DispatchJob}s.
	 **/
	dispatchJobs: DispatchJob[];
	}

/**
 * 
 **/
export class RepDispatchJobListByAsset extends RepDispatchJobList implements IRepListByAsset {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	asset: ContentId;
	}
/**
 * 
 **/
export class RepDispatchJobListByAssetAndRefPairs extends RepDispatchJobListByAsset {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchJob.references}
	 **/
	references: Map<string, string>;
	}

/**
 * 
 **/
export class RepDispatchJobListByCompany extends RepDispatchJobList implements IRepListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
 * 
 **/
export class RepDispatchJobListByCompanyAndLabels extends RepDispatchJobListByCompany implements IRepListByLabels {
	/**
	 * A list of {@link LabelStyle.code|label codes} used to match {@link DispatchJob}s.
	 * All labels must match to include a {@link DispatchJob} in the result.
	 **/
	labels: string[];
	}
/**
 * 
 **/
export class RepDispatchJobListByCompanyAndRefPairs extends RepDispatchJobListByCompany implements IRepListByReferences {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchJob.references}
	 **/
	references: Map<string, string>;}