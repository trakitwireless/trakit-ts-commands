import { Document, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the requested {@link documents}.
 **/
export abstract class RepDocumentList extends Reply {
	/**
	 * The list of requested {@link Document}s.
	 **/
	documents: Document[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.documents = (json?.documents as JsonObject[])?.map((item: any) => new Document(item));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepDocumentListByCompany extends RepDocumentList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}