import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayUserAdvancedList } from "./PayUserAdvancedList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { PayUserAdvancedListByCompany } from "./PayUserAdvancedList";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="UserAdvanced"/>s.
 **/
export abstract class PayUserAdvancedList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="UserAdvanced"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="UserAdvanced"/>s for the specified <see cref="Company"/>.
 **/
export class PayUserAdvancedListByCompany extends PayUserAdvancedList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="UserAdvanced"/>s for the specified <see cref="Company"/> only if the <see cref="UserAdvancedGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
 **/
export class PayUserAdvancedListByCompanyAndLabels extends PayUserAdvancedListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="UserGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="UserAdvanced"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="UserAdvancedGeneral.references"/> fields match.
 * If no references are specified, it will match any <see cref="UserAdvanced"/> with no references.
 * If a reference value is null, it will match any <see cref="UserAdvanced"/> without that reference key.
 **/
export class PayUserAdvancedListByCompanyAndRefPairs extends PayUserAdvancedListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="UserAdvancedGeneral.references"/>
	 **/
	references: Map<string, string>;}