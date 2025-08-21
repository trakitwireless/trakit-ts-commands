import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { PayProviderAdvancedList } from "./PayProviderAdvancedList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { PayProviderAdvancedListByCompany } from "./PayProviderAdvancedList";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";

/**
 * Gets a list of {@link ProviderAdvanced}s.
 **/
export abstract class PayProviderAdvancedList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return suspended {@link ProviderAdvanced}s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted {@link ProviderAdvanced} (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company}.
 **/
export class PayProviderAdvancedListByCompany extends PayProviderAdvancedList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company} only if the {@link ProviderAdvancedGeneral.labels} matches all of the given {@link Parameters.labels}.
 **/
export class PayProviderAdvancedListByCompanyAndLabels extends PayProviderAdvancedListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link ProviderGeneral.labels}
	 **/
	labels: string[];
	}
/**
 * Gets the list of {@link ProviderAdvanced}s for the specified {@link Company} only if one of the specified {@link ProviderAdvancedGeneral.references} fields match.
 * If no references are specified, it will match any {@link ProviderAdvanced} with no references.
 * If a reference value is null, it will match any {@link ProviderAdvanced} without that reference key.
 **/
export class PayProviderAdvancedListByCompanyAndRefPairs extends PayProviderAdvancedListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link ProviderAdvancedGeneral.references}
	 **/
	references: Map<string, string>;}