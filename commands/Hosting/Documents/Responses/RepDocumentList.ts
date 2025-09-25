import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";
import { nothing,Document } from "@trakit/objects";

/**
 * A container for the requested {@link documents}.
 **/
export abstract class RepDocumentList extends Reply {
	/**
	 * The list of requested {@link Document}s.
	 **/
	documents: Document[] | nothing;

	constructor(json: any) {
		super(json);
		this.documents = json?.documents?.map((item: any) => new Document(item));
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
	
	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}