import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayDocumentList } from "./PayDocumentList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified {@link document}.
 **/
export abstract class PayDocumentList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link Document}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayDocumentListByCompany extends PayDocumentList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;}