import { codified, email, guid, JsonObject, nothing, ProviderConfig, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
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
		super(json, "ProviderConfig");
		this.providerConfigs = (json?.providerConfigs as JsonObject[])?.map((v: any) => new ProviderConfig(v));
	}
	override getCollection() { return this.providerConfigs as ProviderConfig[]; }
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
	override _filterCollection(pair: [ulong | guid | email | codified | string, ProviderConfig], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}
/**
 * Contains the {@link ProviderScript.id} of the collection.
 **/
export class RepProviderConfigListByProviderScript extends RepProviderConfigList {
	/**
	 * Identifier of the {@link ProviderScript} to which this collection belongs.
	 **/
	providerScript: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerScript = ContentIdCompany.fromJSON(json?.providerScript as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, ProviderConfig], index: number): boolean {
		return pair[1].scriptId === (this.providerScript as ContentIdCompany).id;
	}
	override getCompanyId() { return this.providerScript?.company as ulong; }
}