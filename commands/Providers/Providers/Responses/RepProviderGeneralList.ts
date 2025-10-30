import { JsonObject, nothing, ProviderGeneral } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link providerGenerals}.
 **/
export abstract class RepProviderGeneralList extends ReplySyncList<ProviderGeneral> {
	/**
	 * The list of requested {@link ProviderGeneral}s.
	 **/
	providerGenerals: ProviderGeneral[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderGeneral");
		this.providerGenerals = (json?.providerGenerals as JsonObject[])?.map((v: any) => new ProviderGeneral(v));
	}
	override getCollection() { return this.providerGenerals as ProviderGeneral[]; }
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepProviderGeneralListByCompany extends RepProviderGeneralList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepProviderGeneralListByConfig extends RepProviderGeneralList {
	/**
	 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
	 **/
	config: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.config = ContentId.fromJSON(json?.config as JsonObject);
	}
}