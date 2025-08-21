import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { PayProviderControlList } from "./PayProviderControlList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { PayProviderControlListByCompany } from "./PayProviderControlList";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";

/**
 * Gets a list of {@link ProviderControl}s.
 **/
export abstract class PayProviderControlList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return suspended {@link ProviderControl}s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted {@link ProviderControl} (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of {@link ProviderControl}s for the specified {@link Company}.
 **/
export class PayProviderControlListByCompany extends PayProviderControlList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of {@link ProviderControl}s for the specified {@link Company} only if the {@link ProviderControlGeneral.labels} matches all of the given {@link Parameters.labels}.
 **/
export class PayProviderControlListByCompanyAndLabels extends PayProviderControlListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link ProviderGeneral.labels}
	 **/
	labels: string[];
	}
/**
 * Gets the list of {@link ProviderControl}s for the specified {@link Company} only if one of the specified {@link ProviderControlGeneral.references} fields match.
 * If no references are specified, it will match any {@link ProviderControl} with no references.
 * If a reference value is null, it will match any {@link ProviderControl} without that reference key.
 **/
export class PayProviderControlListByCompanyAndRefPairs extends PayProviderControlListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link ProviderControlGeneral.references}
	 **/
	references: Map<string, string>;}