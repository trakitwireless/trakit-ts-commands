import { codified, email, guid, JsonObject, nothing, Picture, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link pictures}.
 **/
export abstract class RepPictureList extends ReplySyncList<Picture> {
	/**
	 * The list of requested {@link Picture}s.
	 **/
	pictures: Picture[] | nothing;
	
	constructor(json: JsonObject) {
		super(json, "Picture");
		this.pictures = (json?.pictures as JsonObject[])?.map((i: any) => new Picture(i));
	}
	override getList() { return this.pictures as Picture[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepPictureListByCompany extends RepPictureList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, Picture], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}