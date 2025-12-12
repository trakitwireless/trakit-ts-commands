import { codified, email, guid, JsonObject, nothing, Provider, ProviderGeneral, ulong } from "@trakit/objects";
import { ContentIdCompany } from "../../../..";
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
	override _filterCollection(pair: [ulong | guid | email | codified | string, ProviderGeneral], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}
/**
 * A container owner {@link Company} of the collection.
 **/
export class RepProviderGeneralListByConfig extends RepProviderGeneralList {
	/**
	 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
	 **/
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