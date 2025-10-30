import { Icon, JsonObject, nothing } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link icons}.
 **/
export abstract class RepIconList extends ReplySyncList<Icon> {
	/**
	 * The list of requested {@link Icon}s.
	 **/
	icons: Icon[] | nothing;
	
	constructor(json: JsonObject) {
		super(json, "Icon");
		this.icons = (json?.icons as JsonObject[])?.map((i: any) => new Icon(i));
	}
	override getCollection() { return this.icons as Icon[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepIconListByCompany extends RepIconList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}