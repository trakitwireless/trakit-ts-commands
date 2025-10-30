import { JsonObject, nothing, ProviderConfig } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link providerConfigs}.
 **/
export abstract class RepProviderConfigList extends ReplySyncList<ProviderConfig> {
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
/**
 * Contains the {@link ProviderScript.id} of the collection.
 **/
export class RepProviderConfigListByProviderScript extends RepProviderConfigList {
	/**
	 * Identifier of the {@link ProviderScript} to which this collection belongs.
	 **/
	providerScript: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerScript = ContentId.fromJSON(json?.providerScript as JsonObject);
	}
}