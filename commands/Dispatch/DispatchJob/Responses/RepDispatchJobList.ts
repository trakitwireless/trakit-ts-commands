import { DispatchJob, nothing, serialization } from "@trakit/objects";
import { IRepListByAsset } from "../../../API/Responses/IRepListByAsset";
import { IRepListByCompany } from "../../../API/Responses/IRepListByCompany";
import { IRepListByLabels } from "../../../API/Responses/IRepListByLabels";
import { IRepListByReferences } from "../../../API/Responses/IRepListByReferences";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "../../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link dispatchJobs}.
 **/
export abstract class RepDispatchJobList extends Reply {
	/**
	 * The list of requested {@link DispatchJob}s.
	 **/
	dispatchJobs: DispatchJob[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.dispatchJobs = (json?.dispatchJobs as JsonObject[])?.map((dj: any) => new DispatchJob(dj));
	}
}
/**
 * 
 **/
export class RepDispatchJobListByCompany extends RepDispatchJobList implements IRepListByCompany {
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
export class RepDispatchJobListByCompanyAndLabels extends RepDispatchJobListByCompany implements IRepListByLabels {
	/**
	 * A list of {@link LabelStyle.code|label codes} used to match {@link DispatchJob}s.
	 * All labels must match to include a {@link DispatchJob} in the result.
	 **/
	labels: codified[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.labels = json?.labels as codified[];
	}
}
/**
 * 
 **/
export class RepDispatchJobListByCompanyAndRefPairs extends RepDispatchJobListByCompany implements IRepListByReferences {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchJob.references}
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
export class RepDispatchJobListByAsset extends RepDispatchJobList implements IRepListByAsset {
	/**
	 * Identifier of the {@link Asset} to which this collection belongs.
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
export class RepDispatchJobListByAssetAndLabels extends RepDispatchJobListByAsset implements IRepListByLabels {
	/**
	 * A list of {@link LabelStyle.code|label codes} used to match {@link DispatchJob}s.
	 * All labels must match to include a {@link DispatchJob} in the result.
	 **/
	labels: codified[] | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.labels = json?.labels as codified[];
	}
}
/**
 * 
 **/
export class RepDispatchJobListByAssetAndRefPairs extends RepDispatchJobListByAsset implements IRepListByReferences {
	/**
	 * Case-insensitive reference pairs used to match jobs.
	 * @see {@link DispatchJob.references}
	 **/
	references: Map<string, string> | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json?.references as object)
			: null;
	}
}