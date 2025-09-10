import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";
import { IPaySuspendable } from "../../API/Requests/IPaySuspendable";
import { Payload } from "../../API/Requests/Payload";

/**
 * Gets a list of {@link Asset}s.
 **/
export abstract class PayAssetList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return {@link AssetMessage}s for the asset.
	 **/
	includeMessages: boolean;
	/**
	 * When true, the command will also return {@link DispatchTask}s for the asset.
	 **/
	includeTasks: boolean;
	/**
	 * When true, the command will also return suspended {@link Asset}s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted {@link Asset} (if it exists).
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
 * Gets the list of {@link Asset}s for the specified {@link Company}.
 **/
export class PayAssetListByCompany extends PayAssetList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: any) {
		super(json);
		this.company = new ParamId(json?.company);
	}
}

/**
 * Gets the list of {@link Asset}s for the specified {@link Company} only if the {@link AssetGeneral.labels} matches all of the given {@link Parameters.labels}.
 **/
export class PayAssetListByCompanyAndLabels extends PayAssetListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link AssetGeneral.labels}
	 **/
	labels: string[];

	constructor(json?: any) {
		super(json);
		this.labels = json?.labels ?? [];
	}
}

/**
 * Gets the list of {@link Asset}s for the specified {@link Company} only if one of the specified {@link AssetGeneral.references} fields match.
 * If no references are specified, it will match any {@link Asset} with no references.
 * If a reference value is null, it will match any {@link Asset} without that reference key.
 **/
export class PayAssetListByCompanyAndRefPairs extends PayAssetListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link AssetGeneral.references}
	 **/
	references: Map<string, string>;

	constructor(json?: any) {
		super(json);
		this.references = new Map(Object.entries(json?.references ?? {}));
	}
}