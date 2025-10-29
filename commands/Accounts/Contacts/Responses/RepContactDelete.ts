import { Contact, JsonObject, nothing, storage, ulong } from "@trakit/objects";
import { ContentIdDeleted } from "../../../API/Responses/Content/ContentIdDeleted";
import { ReplySyncDelete } from "../../../API/Responses/ReplySyncDelete";

/**
 * A container for the {@link contact}.
 **/
export class RepContactDelete extends ReplySyncDelete {
	/**
	 * Details about deleting/restoring the requested {@link Contact}.
	 **/
	contact: ContentIdDeleted | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.contact = ContentIdDeleted.fromJSON(json?.contact as JsonObject);
	}

	protected override _getKey() { return this.contact?.id as ulong; }
	protected override _getStorage() { return storage.Contact as Map<ulong, Contact>; }
}