import { Reply } from "../../../API/Responses/Reply";
import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByAsset } from "../../../API/Requests/IPayListByAsset";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";
import { Payload } from "../../../API/Requests/Payload";
import { serialization } from "@trakit/objects";
import { RepDispatchJobListByAsset, RepDispatchJobListByAssetAndLabels, RepDispatchJobListByAssetAndRefPairs, RepDispatchJobListByCompany, RepDispatchJobListByCompanyAndLabels, RepDispatchJobListByCompanyAndRefPairs } from "../Responses/RepDispatchJobList";

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
export class PayDispatchJobListByCompany extends PayDispatchJobList implements IPayListByCompany {
	/**
	 * 
	 */
	company: ParamId;

	constructor(json: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json: any): Reply {
		return new RepDispatchJobListByCompany(json);
	}
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 **/
export class PayDispatchJobListByCompanyAndLabels extends PayDispatchJobListByCompany implements IPayListByLabels {
	/**
	 * Labels used to filter the {@link DispatchJob}s.
	 **/
	labels: string[];
	
	constructor(json?: any) {
		super(json);
		this.labels = json?.labels ?? [];
	}

	override createReply(json: any): Reply {
		return new RepDispatchJobListByCompanyAndLabels(json);
	}
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 **/
export class PayDispatchJobListByCompanyAndRefPairs extends PayDispatchJobListByCompany implements IPayListByReferences{
	/**
	 * Case-insensitive reference pairs used to match {@link Company}s.
	 * @see {@link CompanyGeneral.references}
	 **/
	references: Map<string, string>;
	
	constructor(json: any) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json.references)
			: new Map<string, string>();
	}

	override createReply(json: any): Reply {
		return new RepDispatchJobListByCompanyAndRefPairs(json);
	}
}

/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 **/
export class PayDispatchJobListByAsset extends PayDispatchJobList implements IPayListByAsset {
	/**
	 * 
	 */
	asset: ParamId;

	constructor(json: any) {
		super(json);
		this.asset = new ParamId(json?.asset);
	}

	override createReply(json: any): Reply {
		return new RepDispatchJobListByAsset(json);
	}
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 **/
export class PayDispatchJobListByAssetAndLabels extends PayDispatchJobListByAsset implements IPayListByLabels {
	/**
	 * Labels used to filter the {@link DispatchJob}s.
	 **/
	labels: string[];
	
	constructor(json?: any) {
		super(json);
		this.labels = json?.labels ?? [];
	}

	override createReply(json: any): Reply {
		return new RepDispatchJobListByAssetAndLabels(json);
	}
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 **/
export class PayDispatchJobListByAssetAndRefPairs extends PayDispatchJobListByAsset implements IPayListByReferences{
	/**
	 * Case-insensitive reference pairs used to match {@link Asset}s.
	 * @see {@link AssetGeneral.references}
	 **/
	references: Map<string, string>;
	
	constructor(json: any) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json.references)
			: new Map<string, string>();
	}

	override createReply(json: any): Reply {
		return new RepDispatchJobListByAssetAndRefPairs(json);
	}
}

/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 **/
export class PayDispatchJobListByUnassigned extends PayDispatchJobListByCompany { }
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 **/
export class PayDispatchJobListByUnassignedAndLabels extends PayDispatchJobListByCompanyAndLabels { }
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 **/
export class PayDispatchJobListByUnassignedAndRefPairs extends PayDispatchJobListByCompanyAndRefPairs { }