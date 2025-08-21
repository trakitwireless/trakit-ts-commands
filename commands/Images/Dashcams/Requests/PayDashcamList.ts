import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayDashcamList } from "./PayDashcamList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified <see cref="dashcam"/>.
 **/
export abstract class PayDashcamList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted <see cref="Dashcam"/>s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class PayDashcamListByCompany extends PayDashcamList implements IPayListByCompany {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ParamId;}