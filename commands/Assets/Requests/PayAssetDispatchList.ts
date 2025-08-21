import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../API/Requests/IPaySuspendable";
import { PayAssetDispatchList } from "./PayAssetDispatchList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayAssetDispatchListByCompany } from "./PayAssetDispatchList";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets a list of {@link AssetDispatch}s.
 **/
export abstract class PayAssetDispatchList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return {@link AssetDispatchMessage}s for the asset.
	 **/
	includeMessages: boolean;
	/**
	 * When true, the command will also return {@link DispatchTask}s for the asset.
	 **/
	includeTasks: boolean;
	/**
	 * When true, the command will also return suspended {@link AssetDispatch}s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted {@link AssetDispatch} (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of {@link AssetDispatch}s for the specified {@link Company}.
 **/
export class PayAssetDispatchListByCompany extends PayAssetDispatchList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of {@link AssetDispatch}s for the specified {@link Company} only if the {@link AssetDispatchGeneral.labels} matches all of the given {@link Parameters.labels}.
 **/
export class PayAssetDispatchListByCompanyAndLabels extends PayAssetDispatchListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link AssetGeneral.labels}
	 **/
	labels: string[];
	}
/**
 * Gets the list of {@link AssetDispatch}s for the specified {@link Company} only if one of the specified {@link AssetDispatchGeneral.references} fields match.
 * If no references are specified, it will match any {@link AssetDispatch} with no references.
 * If a reference value is null, it will match any {@link AssetDispatch} without that reference key.
 **/
export class PayAssetDispatchListByCompanyAndRefPairs extends PayAssetDispatchListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link AssetDispatchGeneral.references}
	 **/
	references: Map<string, string>;}