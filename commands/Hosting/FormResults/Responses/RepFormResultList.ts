import { Reply } from "../../../API/Responses/Reply";
import { RepFormResultList } from "./RepFormResultList";

/**
 * A container for the requested {@link formResults}.

 **/
export abstract class RepFormResultList extends Reply {
	/**
	 * The list of requested {@link FormResult}s.

	 **/
	formResults: FormResult[];
	}

/**
 * Contains the {@link Company.id} of the collection.

 **/
export class RepFormResultListByCompany extends RepFormResultList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.

	 **/
	company: ContentId;}