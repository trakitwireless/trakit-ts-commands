import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayDocumentList } from "./PayDocumentList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified <see cref="document"/>.
 **/
export abstract class PayDocumentList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="Document"/>s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayDocumentListByCompany extends PayDocumentList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;}