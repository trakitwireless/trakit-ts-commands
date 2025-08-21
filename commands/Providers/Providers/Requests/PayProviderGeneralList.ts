import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPaySuspendable } from "../../../API/Requests/IPaySuspendable";
import { PayProviderGeneralList } from "./PayProviderGeneralList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { PayProviderGeneralListByCompany } from "./PayProviderGeneralList";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";

/**
 * Gets a list of @link {ProviderGeneral}s.
 **/
export abstract class PayProviderGeneralList extends Payload implements IPayDeletable, IPaySuspendable {
	/**
	 * When true, the command will also return suspended @link {ProviderGeneral}s.
	 **/
	includeSuspended: boolean;
	/**
	 * When true, the command will also return a deleted @link {ProviderGeneral} (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of @link {ProviderGeneral}s for the specified @link {Company}.
 **/
export class PayProviderGeneralListByCompany extends PayProviderGeneralList implements IPayListByCompany {
	/**
	 * Identifier of the @link {Company} to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of @link {ProviderGeneral}s for the specified @link {Company} only if the @link {ProviderGeneralGeneral.labels} matches all of the given @link {Parameters.labels}.
 **/
export class PayProviderGeneralListByCompanyAndLabels extends PayProviderGeneralListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * @see {@link ProviderGeneral.labels}
	 **/
	labels: string[];
	}
/**
 * Gets the list of @link {ProviderGeneral}s for the specified @link {Company} only if one of the specified @link {ProviderGeneralGeneral.references} fields match.
 * If no references are specified, it will match any @link {ProviderGeneral} with no references.
 * If a reference value is null, it will match any @link {ProviderGeneral} without that reference key.
 **/
export class PayProviderGeneralListByCompanyAndRefPairs extends PayProviderGeneralListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * @see {@link ProviderGeneralGeneral.references}
	 **/
	references: Map<string, string>;}