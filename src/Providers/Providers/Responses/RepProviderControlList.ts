import { codified, email, guid, JsonObject, nothing, Provider, ProviderControl, storage, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncListPiece } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link providerControls}.
 */
export abstract class RepProviderControlList extends ReplySyncListPiece<ProviderControl> {
	/**
	 * The list of requested {@link ProviderControl}s.
	 */
	providerControls: ProviderControl[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderControl", 2);
		this.providerControls = (json?.providerControls as JsonObject[])?.map((v: any) => new ProviderControl(v));
	}
	override getList() { return this.providerControls as ProviderControl[]; }
	protected override _createBlank() { return new Provider(); }
}

/**
 * A container owner {@link Company} of the collection.
 */
export class RepProviderControlListByCompany extends RepProviderControlList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 */
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, ProviderControl], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}

/**
 * A container owner {@link Company} of the collection.
 */
export class RepProviderControlListByConfig extends RepProviderControlList {
	/**
	 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
	 */
	config: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.config = ContentIdCompany.fromJSON(json?.config as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, ProviderControl], index: number): boolean {
		const provider = storage.Provider.get(pair[0]) as Provider;
		return provider?.configurationId === (this.config as ContentIdCompany).id;
	}
	override getCompanyId() { return this.config?.company as ulong; }
}