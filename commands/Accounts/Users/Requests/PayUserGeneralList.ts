import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayUserGeneralList } from "./PayUserGeneralList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { PayUserGeneralListByCompany } from "./PayUserGeneralList";
import { IPayListByLabels } from "../../../API/Requests/IPayListByLabels";
import { IPayListByReferences } from "../../../API/Requests/IPayListByReferences";

/**
 * Gets a list of <see cref="UserGeneral"/>s.
 **/
export abstract class PayUserGeneralList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="UserGeneral"/> (if it exists).
	 **/
	includeDeleted: boolean;
	}

/**
 * Gets the list of <see cref="UserGeneral"/>s for the specified <see cref="Company"/>.
 **/
export class PayUserGeneralListByCompany extends PayUserGeneralList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="UserGeneral"/>s for the specified <see cref="Company"/> only if the <see cref="UserGeneralGeneral.labels"/> matches all of the given <see cref="Parameters.labels"/>.
 **/
export class PayUserGeneralListByCompanyAndLabels extends PayUserGeneralListByCompany implements IPayListByLabels {
	/**
	 * The parsed labels given as input.
	 * <seealso cref="UserGeneral.labels"/>
	 **/
	labels: string[];
	}
/**
 * Gets the list of <see cref="UserGeneral"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="UserGeneralGeneral.references"/> fields match.
 * If no references are specified, it will match any <see cref="UserGeneral"/> with no references.
 * If a reference value is null, it will match any <see cref="UserGeneral"/> without that reference key.
 **/
export class PayUserGeneralListByCompanyAndRefPairs extends PayUserGeneralListByCompany implements IPayListByReferences {
	/**
	 * The parsed references given as input.
	 * <seealso cref="UserGeneralGeneral.references"/>
	 **/
	references: Map<string, string>;}