import { Reply } from "../../../API/Responses/Reply";
import { nothing, Provider } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
/**
 * A container for the requested {@link providers}.
 **/
export abstract class RepProviderList extends Reply {
	/**
	 * The list of requested {@link Provider}s.
	 **/
	providers: Provider[] | nothing;

	constructor(json: any) {
		super(json);
		this.providers = json?.providers?.map((v: any) => new Provider(v));
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

	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
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

	constructor(json: any) {
		super(json);
		this.config = ContentId.fromJSON(json?.config);
	}
}