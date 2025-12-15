import { codified, email, guid, JsonObject, nothing, ProviderConfiguration, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link providerConfigurations}.
 **/
export abstract class RepProviderConfigurationList extends ReplySyncList<ProviderConfiguration> {
	/**
	 * The list of requested {@link ProviderConfiguration}s.
	 **/
	providerConfigurations: ProviderConfiguration[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderConfiguration");
		this.providerConfigurations = (json?.providerConfigurations as JsonObject[])?.map((v: any) => new ProviderConfiguration(v));
	}
	override getList() { return this.providerConfigurations as ProviderConfiguration[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepProviderConfigurationListByCompany extends RepProviderConfigurationList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, ProviderConfiguration], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}