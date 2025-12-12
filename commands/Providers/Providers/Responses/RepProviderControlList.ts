import { codified, email, guid, JsonObject, nothing, Provider, ProviderControl, storage, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link providerControls}.
 **/
export abstract class RepProviderControlList extends ReplySyncList<ProviderControl> {
	/**
	 * The list of requested {@link ProviderControl}s.
	 **/
	providerControls: ProviderControl[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderControl");
		this.providerControls = (json?.providerControls as JsonObject[])?.map((v: any) => new ProviderControl(v));
	}
	override getCollection() { return this.providerControls as ProviderControl[]; }
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepProviderControlListByCompany extends RepProviderControlList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, ProviderControl], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
}

/**
 * A container owner {@link Company} of the collection.
 **/
export class RepProviderControlListByConfig extends RepProviderControlList {
	/**
	 * Identifier of the {@link ProviderConfig} (or {@link ProviderConfiguration}) to which this collection belongs.
	 **/
	config: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.config = ContentId.fromJSON(json?.config as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, ProviderControl], index: number): boolean {
		const provider = storage.Provider.get(pair[0]) as Provider;
		return provider?.configurationId === (this.config as ContentId).id;
	}
}