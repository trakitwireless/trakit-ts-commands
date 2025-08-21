import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../API/Requests/IPaySuspendable";
import { PayAssetGeneralList } from "./PayAssetGeneralList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayAssetGeneralListByCompany } from "./PayAssetGeneralList";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets a list of {@link AssetGeneral}s.
 **/
export abstract class PayAssetGeneralList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return {@link AssetGeneralMessage}s for the asset.
	 **/
	includeMessages: boolean;
	/**
	 * When true, the command will also return {@link DispatchTask}s for the asset.
	 **/
	includeTasks: boolean;
	/**
	 * When true, the command will also return suspended {@link AssetGeneral}s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted {@link AssetGeneral} (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of {@link AssetGeneral}s for the specified {@link Company}.
 **/
export class PayAssetGeneralListByCompany extends PayAssetGeneralList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of {@link AssetGeneral}s for the specified {@link Company} only if the {@link AssetGeneralGeneral.labels} matches all of the given {@link Parameters.labels}.
 **/
export class PayAssetGeneralListByCompanyAndLabels extends PayAssetGeneralListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link AssetGeneral.labels}
	 **/
	labels: string[];
	}
/**
 * Gets the list of {@link AssetGeneral}s for the specified {@link Company} only if one of the specified {@link AssetGeneralGeneral.references} fields match.
 * If no references are specified, it will match any {@link AssetGeneral} with no references.
 * If a reference value is null, it will match any {@link AssetGeneral} without that reference key.
 **/
export class PayAssetGeneralListByCompanyAndRefPairs extends PayAssetGeneralListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link AssetGeneralGeneral.references}
	 **/
	references: Map<string, string>;}