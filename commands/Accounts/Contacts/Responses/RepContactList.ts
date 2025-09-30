import { Contact, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the requested {@link contacts}.
 **/
export abstract class RepContactList extends Reply {
	/**
	 * The list of requested {@link Contact}s.
	 **/
	contacts: Contact[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.contacts = (json?.contacts as JsonObject[])?.map((c: any) => new Contact(c)) ?? [];
	}
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
		this.company = ContentId.fromJSON(json?.company);
	}
}