import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByAsset } from "../../../API/Requests/IPayListByAsset";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";
import { Payload } from "../../../API/Requests/Payload";
import { serialization } from "@trakit/objects";

/**
 * 
 **/
export abstract class PayDispatchJobList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link DispatchJob}s.
	 **/
	includeDeleted: boolean;

	constructor(json: any) {
		super(json);
		this.includeDeleted = json?.includeDeleted ?? false;
	}
}

/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 **/
export class PayDispatchJobListByAsset extends PayDispatchJobList implements IPayListByAsset {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	asset: ParamId;

	constructor(json: any) {
		super(json);
		this.asset = new ParamId(json?.asset);
	}
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

	constructor(json: any) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json.references)
			: new Map<string, string>();
	}
}

/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Company}.
 **/
export class PayDispatchJobListByCompany extends PayDispatchJobList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}
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

	constructor(json: any) {
		super(json);
		this.labels = json?.labels ?? [];
	}
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

	constructor(json: any) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json.references)
			: new Map<string, string>();
	}
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

	constructor(json: any) {
		super(json);
		this.labels = json?.labels ?? [];
	}
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
	references: Map<string, string>;

	constructor(json: any) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json.references)
			: new Map<string, string>();
	}
}