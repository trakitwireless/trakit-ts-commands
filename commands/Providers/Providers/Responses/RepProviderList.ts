import { JsonObject, nothing, Provider } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link providers}.
 **/
export abstract class RepProviderList extends ReplySyncList<Provider> {
	/**
	 * The list of requested {@link Provider}s.
	 **/
	providers: Provider[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providers = (json?.providers as JsonObject[])?.map((v: any) => new Provider(v));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepProviderListByCompany extends RepProviderList {
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
export class RepProviderListByConfig extends RepProviderList {
	/**
	 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
	 **/
	config: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.config = ContentId.fromJSON(json?.config as JsonObject);
	}
}