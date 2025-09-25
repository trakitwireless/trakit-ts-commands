import { Reply } from "../../API/Responses/Reply";
import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../API/Requests/IPaySuspendable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";
import { ParamId } from "../../API/Requests/Parameters/ParamId";
import { RepAssetAdvancedListByCompany, RepAssetAdvancedListByCompanyAndLabels, RepAssetAdvancedListByCompanyAndRefPairs } from "../Responses/RepAssetAdvancedList";

/**
 * Gets a list of {@link AssetAdvanced}s.
 **/
export abstract class PayAssetAdvancedList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return {@link AssetAdvancedMessage}s for the asset.
	 **/
	includeMessages: boolean;
	/**
	 * When true, the command will also return {@link DispatchTask}s for the asset.
	 **/
	includeTasks: boolean;
	/**
	 * When true, the command will also return suspended {@link AssetAdvanced}s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted {@link AssetAdvanced} (if it exists).
	 **/
	includeDeleted: boolean;

	constructor(json?: any) {
		super(json);
		this.includeMessages = json?.includeMessages;
		this.includeTasks = json?.includeTasks;
		this.includeSuspended = json?.includeSuspended;
		this.includeDeleted = json?.includeDeleted;
	}
}

/**
 * Gets the list of {@link AssetAdvanced}s for the specified {@link Company}.
 **/
export class PayAssetAdvancedListByCompany extends PayAssetAdvancedList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}

	override createReply(json: any): Reply {
		return new RepAssetAdvancedListByCompany(json);
	}
}
/**
 * Gets the list of {@link AssetAdvanced}s for the specified {@link Company} only if the {@link AssetAdvancedGeneral.labels} matches all of the given {@link Parameters.labels}.
 **/
export class PayAssetAdvancedListByCompanyAndLabels extends PayAssetAdvancedListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link AssetGeneral.labels}
	 **/
	labels: string[];

	constructor(json?: any) {
		super(json);
		this.labels = json?.labels ?? [];
	}

	override createReply(json: any): Reply {
		return new RepAssetAdvancedListByCompanyAndLabels(json);
	}
}
/**
 * Gets the list of {@link AssetAdvanced}s for the specified {@link Company} only if one of the specified {@link AssetAdvancedGeneral.references} fields match.
 * If no references are specified, it will match any {@link AssetAdvanced} with no references.
 * If a reference value is null, it will match any {@link AssetAdvanced} without that reference key.
 **/
export class PayAssetAdvancedListByCompanyAndRefPairs extends PayAssetAdvancedListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link AssetAdvancedGeneral.references}
	 **/
	references: Map<string, string>;

	constructor(json?: any) {
		super(json);
		this.references = json?.references ? new Map(Object.entries(json.references)) : new Map();
	}

	override createReply(json: any): Reply {
		return new RepAssetAdvancedListByCompanyAndRefPairs(json);
	}
}