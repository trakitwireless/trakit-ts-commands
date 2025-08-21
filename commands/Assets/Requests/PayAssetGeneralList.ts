import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../API/Requests/IPaySuspendable";
import { PayAssetGeneralList } from "./PayAssetGeneralList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayAssetGeneralListByCompany } from "./PayAssetGeneralList";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="AssetGeneral"/>s.
 **/
export abstract class PayAssetGeneralList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return <see cref="AssetGeneralMessage"/>s for the asset.
	 **/
	includeMessages: boolean;
	/**
	 * When true, the command will also return <see cref="DispatchTask"/>s for the asset.
	 **/
	includeTasks: boolean;
	/**
	 * When true, the command will also return suspended <see cref="AssetGeneral"/>s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted <see cref="AssetGeneral"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="AssetGeneral"/>s for the specified <see cref="Company"/>.
 **/
export class PayAssetGeneralListByCompany extends PayAssetGeneralList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="AssetGeneral"/>s for the specified <see cref="Company"/> only if the <see cref="AssetGeneralGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
 **/
export class PayAssetGeneralListByCompanyAndLabels extends PayAssetGeneralListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="AssetGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="AssetGeneral"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="AssetGeneralGeneral.references"/> fields match.
 * If no references are specified, it will match any <see cref="AssetGeneral"/> with no references.
 * If a reference value is null, it will match any <see cref="AssetGeneral"/> without that reference key.
 **/
export class PayAssetGeneralListByCompanyAndRefPairs extends PayAssetGeneralListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="AssetGeneralGeneral.references"/>
	 **/
	references: Map<string, string>;}