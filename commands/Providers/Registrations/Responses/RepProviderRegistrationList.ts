import { email, guid, JsonObject, nothing, ProviderRegistration, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link providerRegistrations}.
 **/
export abstract class RepProviderRegistrationList extends ReplySyncList<ProviderRegistration> {
	/**
	 * The list of requested {@link ProviderRegistration}s.
	 **/
	providerRegistrations: ProviderRegistration[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderRegistration");
		this.providerRegistrations = (json?.providerRegistrations as JsonObject[])?.map((v: any) => new ProviderRegistration(v));
	}
	override getCollection() { return this.providerRegistrations as ProviderRegistration[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepProviderRegistrationListByCompany extends RepProviderRegistrationList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [string | guid | email | ulong, ProviderRegistration], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
}