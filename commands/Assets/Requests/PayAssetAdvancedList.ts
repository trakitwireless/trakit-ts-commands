import { Payload } from "../../API/Requests/Payload";
import { IPayDeletable } from "../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../API/Requests/IPaySuspendable";
import { PayAssetAdvancedList } from "./PayAssetAdvancedList";
import { IPayListByCompany } from "../../API/Requests/IPayListByCompany";
import { PayAssetAdvancedListByCompany } from "./PayAssetAdvancedList";
import { IPayListByLabels } from "../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="AssetAdvanced"/>s.
 **/
export abstract class PayAssetAdvancedList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return <see cref="AssetAdvancedMessage"/>s for the asset.
	 **/
	includeMessages: boolean;
	/**
	 * When true, the command will also return <see cref="DispatchTask"/>s for the asset.
	 **/
	includeTasks: boolean;
	/**
	 * When true, the command will also return suspended <see cref="AssetAdvanced"/>s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted <see cref="AssetAdvanced"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="AssetAdvanced"/>s for the specified <see cref="Company"/>.
 **/
export class PayAssetAdvancedListByCompany extends PayAssetAdvancedList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="AssetAdvanced"/>s for the specified <see cref="Company"/> only if the <see cref="AssetAdvancedGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
 **/
export class PayAssetAdvancedListByCompanyAndLabels extends PayAssetAdvancedListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="AssetGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="AssetAdvanced"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="AssetAdvancedGeneral.references"/> fields match.
 * If no references are specified, it will match any <see cref="AssetAdvanced"/> with no references.
 * If a reference value is null, it will match any <see cref="AssetAdvanced"/> without that reference key.
 **/
export class PayAssetAdvancedListByCompanyAndRefPairs extends PayAssetAdvancedListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="AssetAdvancedGeneral.references"/>
	 **/
	references: Map<string, string>;}