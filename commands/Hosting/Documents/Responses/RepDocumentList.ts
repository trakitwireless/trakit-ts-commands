import { Reply } from "../../../API/Responses/Reply";
import { RepDocumentList } from "./RepDocumentList";

/**
 * A container for the requested {@link documents}.
 **/
export abstract class RepDocumentList extends Reply {
	/**
	 * The list of requested {@link Document}s.
	 **/
	documents: Document[];
	}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepDocumentListByCompany extends RepDocumentList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;}