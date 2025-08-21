import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayFormTemplateList } from "./PayFormTemplateList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified <see cref="formTemplate"/>.

 **/
export abstract class PayFormTemplateList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="FormTemplate"/>s.

	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.

 **/
export class PayFormTemplateListByCompany extends PayFormTemplateList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.

	 **/
	company: ParamId;}