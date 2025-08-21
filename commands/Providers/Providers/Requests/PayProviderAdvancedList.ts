import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { PayProviderAdvancedList } from "./PayProviderAdvancedList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { PayProviderAdvancedListByCompany } from "./PayProviderAdvancedList";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="ProviderAdvanced"/>s.
 **/
export abstract class PayProviderAdvancedList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return suspended <see cref="ProviderAdvanced"/>s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted <see cref="ProviderAdvanced"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="ProviderAdvanced"/>s for the specified <see cref="Company"/>.
 **/
export class PayProviderAdvancedListByCompany extends PayProviderAdvancedList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="ProviderAdvanced"/>s for the specified <see cref="Company"/> only if the <see cref="ProviderAdvancedGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
 **/
export class PayProviderAdvancedListByCompanyAndLabels extends PayProviderAdvancedListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="ProviderGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="ProviderAdvanced"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="ProviderAdvancedGeneral.references"/> fields match.
 * If no references are specified, it will match any <see cref="ProviderAdvanced"/> with no references.
 * If a reference value is null, it will match any <see cref="ProviderAdvanced"/> without that reference key.
 **/
export class PayProviderAdvancedListByCompanyAndRefPairs extends PayProviderAdvancedListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="ProviderAdvancedGeneral.references"/>
	 **/
	references: Map<string, string>;}