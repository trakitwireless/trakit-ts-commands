import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { PayProviderGeneralList } from "./PayProviderGeneralList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { PayProviderGeneralListByCompany } from "./PayProviderGeneralList";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="ProviderGeneral"/>s.
 **/
export abstract class PayProviderGeneralList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return suspended <see cref="ProviderGeneral"/>s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted <see cref="ProviderGeneral"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="ProviderGeneral"/>s for the specified <see cref="Company"/>.
 **/
export class PayProviderGeneralListByCompany extends PayProviderGeneralList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="ProviderGeneral"/>s for the specified <see cref="Company"/> only if the <see cref="ProviderGeneralGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
 **/
export class PayProviderGeneralListByCompanyAndLabels extends PayProviderGeneralListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="ProviderGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="ProviderGeneral"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="ProviderGeneralGeneral.references"/> fields match.
 * If no references are specified, it will match any <see cref="ProviderGeneral"/> with no references.
 * If a reference value is null, it will match any <see cref="ProviderGeneral"/> without that reference key.
 **/
export class PayProviderGeneralListByCompanyAndRefPairs extends PayProviderGeneralListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="ProviderGeneralGeneral.references"/>
	 **/
	references: Map<string, string>;}