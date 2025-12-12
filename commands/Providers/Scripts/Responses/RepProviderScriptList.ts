import { codified, email, guid, JsonObject, nothing, ProviderScript, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link providerScripts}.
 **/
export abstract class RepProviderScriptList extends ReplySyncList<ProviderScript> {
	/**
	 * The list of requested {@link ProviderScript}s.
	 **/
	providerScripts: ProviderScript[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderScript");
		this.providerScripts = (json?.providerScripts as JsonObject[])?.map((v: any) => new ProviderScript(v));
	}
	override getCollection() { return this.providerScripts as ProviderScript[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepProviderScriptListByCompany extends RepProviderScriptList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;
	
	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, ProviderScript], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
}