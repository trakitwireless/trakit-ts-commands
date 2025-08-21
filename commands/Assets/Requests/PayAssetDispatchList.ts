import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../API/Requests/IPaySuspendable";
import { PayAssetDispatchList } from "./PayAssetDispatchList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayAssetDispatchListByCompany } from "./PayAssetDispatchList";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="AssetDispatch"/>s.
 **/
export abstract class PayAssetDispatchList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return <see cref="AssetDispatchMessage"/>s for the asset.
	 **/
	includeMessages: boolean;
	/**
	 * When true, the command will also return <see cref="DispatchTask"/>s for the asset.
	 **/
	includeTasks: boolean;
	/**
	 * When true, the command will also return suspended <see cref="AssetDispatch"/>s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted <see cref="AssetDispatch"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="AssetDispatch"/>s for the specified <see cref="Company"/>.
 **/
export class PayAssetDispatchListByCompany extends PayAssetDispatchList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="AssetDispatch"/>s for the specified <see cref="Company"/> only if the <see cref="AssetDispatchGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
 **/
export class PayAssetDispatchListByCompanyAndLabels extends PayAssetDispatchListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="AssetGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="AssetDispatch"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="AssetDispatchGeneral.references"/> fields match.
 * If no references are specified, it will match any <see cref="AssetDispatch"/> with no references.
 * If a reference value is null, it will match any <see cref="AssetDispatch"/> without that reference key.
 **/
export class PayAssetDispatchListByCompanyAndRefPairs extends PayAssetDispatchListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="AssetDispatchGeneral.references"/>
	 **/
	references: Map<string, string>;}