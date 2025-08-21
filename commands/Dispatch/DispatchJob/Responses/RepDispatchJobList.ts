import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchJobList } from "./RepDispatchJobList";
import { IRepListByAsset } from "../../../API/Responses/IRepListByAsset";
import { RepDispatchJobListByAsset } from "./RepDispatchJobList";
import { IRepListByCompany } from "../../../API/Responses/IRepListByCompany";
import { RepDispatchJobListByCompany } from "./RepDispatchJobList";
import { IRepListByLabels } from "../../../API/Responses/IRepListByLabels";
import { IRepListByReferences } from "../../../API/Responses/IRepListByReferences";

/**
 * A container for the requested <see cref="dispatchJobs"/>.
 **/
export abstract class RepDispatchJobList extends Reply {
	/**
	 * The list of requested <see cref="DispatchJob"/>s.
	 **/
	dispatchJobs: DispatchJob[];
	}

/**
	///
 **/
export class RepDispatchJobListByAsset extends RepDispatchJobList implements IRepListByAsset {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	asset: ContentId;
	}
/**
	///
 **/
export class RepDispatchJobListByAssetAndRefPairs extends RepDispatchJobListByAsset {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * <seealso cref="DispatchJob.references"/>
	 **/
	references: Map<string, string>;
	}

/**
	///
 **/
export class RepDispatchJobListByCompany extends RepDispatchJobList implements IRepListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;
	}
/**
	///
 **/
export class RepDispatchJobListByCompanyAndLabels extends RepDispatchJobListByCompany implements IRepListByLabels {
	/**
	 * A list of <see cref="LabelStyle.code">label codes</see> used to match <see cref="DispatchJob"/>s.
	 * All labels must match to include a <see cref="DispatchJob"/> in the result.
	 **/
	labels: string[];
	}
/**
	///
 **/
export class RepDispatchJobListByCompanyAndRefPairs extends RepDispatchJobListByCompany implements IRepListByReferences {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * <seealso cref="DispatchJob.references"/>
	 **/
	references: Map<string, string>;}