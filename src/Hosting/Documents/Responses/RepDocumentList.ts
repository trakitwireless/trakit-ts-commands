import { codified, Document, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link documents}.
 */
export abstract class RepDocumentList extends ReplySyncList<Document> {
	/**
	 * The list of requested {@link Document}s.
	 */
	documents: Document[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Document");
		this.documents = (json?.documents as JsonObject[])?.map((item: any) => new Document(item));
	}
	override getList() { return this.documents as Document[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 */
export class RepDocumentListByCompany extends RepDocumentList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, Document], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}