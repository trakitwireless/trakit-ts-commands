import { Reply } from "../../../API/Responses/Reply";
import { RepFormResultList } from "./RepFormResultList";

/**
 * A container for the requested <see cref="formResults"/>.

 **/
export abstract class RepFormResultList extends Reply {
	/**
	 * The list of requested <see cref="FormResult"/>s.

	 **/
	formResults: FormResult[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.

 **/
export class RepFormResultListByCompany extends RepFormResultList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.

	 **/
	company: ContentId;}