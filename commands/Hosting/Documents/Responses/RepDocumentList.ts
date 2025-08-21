import { Reply } from "../../../API/Responses/Reply";
import { RepDocumentList } from "./RepDocumentList";

/**
 * A container for the requested <see cref="documents"/>.
 **/
export abstract class RepDocumentList extends Reply {
	/**
	 * The list of requested <see cref="Document"/>s.
	 **/
	documents: Document[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepDocumentListByCompany extends RepDocumentList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}