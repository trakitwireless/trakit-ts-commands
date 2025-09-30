import { nothing, ProviderConfig } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "../../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link providerConfigs}.
 **/
export abstract class RepProviderConfigList extends Reply {
	/**
	 * The list of requested {@link ProviderConfig}s.
	 **/
	providerConfigs: ProviderConfig[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerConfigs = (json?.providerConfigs as JsonObject[])?.map((v: any) => new ProviderConfig(v));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepProviderConfigListByCompany extends RepProviderConfigList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}