import { codified, JsonObject, serialization } from "@trakit/objects";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByAsset } from "../../../API/Requests/IPayListByAsset";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
import { RepDispatchJobListByAsset, RepDispatchJobListByAssetAndLabels, RepDispatchJobListByAssetAndRefPairs, RepDispatchJobListByCompany, RepDispatchJobListByCompanyAndLabels, RepDispatchJobListByCompanyAndRefPairs } from "../Responses/RepDispatchJobList";

/**
 * 
 */
export abstract class PayDispatchJobList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link DispatchJob}s.
	 */
	includeDeleted: boolean;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			includeDeleted: !!this.includeDeleted,
		};
	}
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export class PayDispatchJobListByCompany extends PayDispatchJobList implements IPayListByCompany {
	/**
	 * 
	 */
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchJobListByCompany(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			company: this.company.toJSON(),
		};
	}
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export class PayDispatchJobListByCompanyAndLabels extends PayDispatchJobListByCompany implements IPayListByLabels {
	/**
	 * Labels used to filter the {@link DispatchJob}s.
	 */
	labels: codified[];
	
	constructor(json?: JsonObject) {
		super(json);
		this.labels = json?.labels as codified[] ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchJobListByCompanyAndLabels(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			labels: [...this.labels],
		};
	}
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export class PayDispatchJobListByCompanyAndRefPairs extends PayDispatchJobListByCompany implements IPayListByReferences{
	/**
	 * Case-insensitive reference pairs used to match {@link Company}s.
	 * @see {@link CompanyGeneral.references}
	 */
	references: Map<string, string>;
	
	constructor(json?: JsonObject) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json?.references as object)
			: new Map<string, string>();
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchJobListByCompanyAndRefPairs(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			references: serialization.fromMap(this.references),
		};
	}
}

/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export class PayDispatchJobListByAsset extends PayDispatchJobList implements IPayListByAsset {
	/**
	 * 
	 */
	asset: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.asset = new ParamId(json?.asset as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchJobListByAsset(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			asset: this.asset.toJSON(),
		};
	}
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export class PayDispatchJobListByAssetAndLabels extends PayDispatchJobListByAsset implements IPayListByLabels {
	/**
	 * Labels used to filter the {@link DispatchJob}s.
	 */
	labels: codified[];
	
	constructor(json?: JsonObject) {
		super(json);
		this.labels = json?.labels as codified[] ?? [];
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchJobListByAssetAndLabels(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			labels: [...this.labels],
		};
	}
}
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export class PayDispatchJobListByAssetAndRefPairs extends PayDispatchJobListByAsset implements IPayListByReferences{
	/**
	 * Case-insensitive reference pairs used to match {@link Asset}s.
	 * @see {@link AssetGeneral.references}
	 */
	references: Map<string, string>;
	
	constructor(json?: JsonObject) {
		super(json);
		this.references = json?.references
			? serialization.toMap(json?.references as object)
			: new Map<string, string>();
	}

	override createReply(json: JsonObject): Reply {
		return new RepDispatchJobListByAssetAndRefPairs(json);
	}
	override toJSON(): JsonObject {
		return {
			...super.toJSON(),
			references: serialization.fromMap(this.references),
		};
	}
}

/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export class PayDispatchJobListByUnassigned extends PayDispatchJobListByCompany { }
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export class PayDispatchJobListByUnassignedAndLabels extends PayDispatchJobListByCompanyAndLabels { }
/**
 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
 */
export class PayDispatchJobListByUnassignedAndRefPairs extends PayDispatchJobListByCompanyAndRefPairs { }