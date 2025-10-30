import { Contact, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link contacts}.
 **/
export abstract class RepContactList extends ReplySyncList<Contact> {
	/**
	 * The list of requested {@link Contact}s.
	 **/
	contacts: Contact[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Contact");
		this.contacts = (json?.contacts as JsonObject[])?.map((c: any) => new Contact(c)) ?? [];
	}

	override getCollection() { return this.contacts as Contact[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepContactListByCompany extends RepContactList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}