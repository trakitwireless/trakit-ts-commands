import { codified, email, guid, JsonObject, nothing, Provider, ProviderConfig, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link providers}.
 */
export abstract class RepProviderList extends ReplySyncList<Provider> {
	/**
	 * The list of requested {@link Provider}s.
	 */
	providers: Provider[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Provider");
		this.providers = (json?.providers as JsonObject[])?.map((v: any) => new Provider(v));
	}
	override getList() { return this.providers as Provider[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 */
export class RepProviderListByCompany extends RepProviderList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, Provider], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}
/**
 * A container owner {@link Company} of the collection.
 */
export class RepProviderListByConfig extends RepProviderList {
	/**
	 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
	 */
	config: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.config = ContentIdCompany.fromJSON(json?.config as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, Provider], index: number): boolean {
		return pair[1].configurationId === (this.config as ContentIdCompany).id;
	}
	override getCompanyId() { return this.config?.company as ulong; }
}