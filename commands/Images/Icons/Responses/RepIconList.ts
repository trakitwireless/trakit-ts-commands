import { Icon, nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "../../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link icons}.
 **/
export abstract class RepIconList extends Reply {
	/**
	 * The list of requested {@link Icon}s.
	 **/
	icons: Icon[] | nothing;
	
	constructor(json: any) {
		super(json);
		this.icons = json?.icons?.map((i: any) => new Icon(i));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepIconListByCompany extends RepIconList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;
	
	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}