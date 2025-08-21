import { PayDocument } from "./PayDocument";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified <see cref="Document"/>.
 **/
export class PayDocumentGet extends PayDocument implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted <see cref="Document"/> (if it exists).
	 **/
	includeDeleted: boolean;}