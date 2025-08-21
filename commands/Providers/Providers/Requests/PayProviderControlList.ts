import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { PayProviderControlList } from "./PayProviderControlList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { PayProviderControlListByCompany } from "./PayProviderControlList";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="ProviderControl"/>s.
 **/
export abstract class PayProviderControlList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return suspended <see cref="ProviderControl"/>s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted <see cref="ProviderControl"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="ProviderControl"/>s for the specified <see cref="Company"/>.
 **/
export class PayProviderControlListByCompany extends PayProviderControlList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="ProviderControl"/>s for the specified <see cref="Company"/> only if the <see cref="ProviderControlGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
 **/
export class PayProviderControlListByCompanyAndLabels extends PayProviderControlListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="ProviderGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="ProviderControl"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="ProviderControlGeneral.references"/> fields match.
 * If no references are specified, it will match any <see cref="ProviderControl"/> with no references.
 * If a reference value is null, it will match any <see cref="ProviderControl"/> without that reference key.
 **/
export class PayProviderControlListByCompanyAndRefPairs extends PayProviderControlListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="ProviderControlGeneral.references"/>
	 **/
	references: Map<string, string>;}