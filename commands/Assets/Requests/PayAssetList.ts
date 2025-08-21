import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../API/Requests/IPaySuspendable";
import { PayAssetList } from "./PayAssetList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayAssetListByCompany } from "./PayAssetList";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="Asset"/>s.
 **/
export abstract class PayAssetList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return <see cref="AssetMessage"/>s for the asset.
	 **/
	includeMessages: boolean;
	/**
	 * When true, the command will also return <see cref="DispatchTask"/>s for the asset.
	 **/
	includeTasks: boolean;
	/**
	 * When true, the command will also return suspended <see cref="Asset"/>s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted <see cref="Asset"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="Asset"/>s for the specified <see cref="Company"/>.
 **/
export class PayAssetListByCompany extends PayAssetList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="Asset"/>s for the specified <see cref="Company"/> only if the <see cref="AssetGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
 **/
export class PayAssetListByCompanyAndLabels extends PayAssetListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="AssetGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="Asset"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="AssetGeneral.references"/> fields match.
 * If no references are specified, it will match any <see cref="Asset"/> with no references.
 * If a reference value is null, it will match any <see cref="Asset"/> without that reference key.
 **/
export class PayAssetListByCompanyAndRefPairs extends PayAssetListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="AssetGeneral.references"/>
	 **/
	references: Map<string, string>;}