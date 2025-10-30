import { JsonObject } from "@trakit/objects";
import { nothing, ProviderRegistration } from "@trakit/objects";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
import { ContentId } from "../../../API/Responses/Content/ContentId";

/**
 * A container for the requested {@link providerRegistrations}.
 **/
export abstract class RepProviderRegistrationList extends ReplySyncList<ProviderRegistration> {
	/**
	 * The list of requested {@link ProviderRegistration}s.
	 **/
	providerRegistrations: ProviderRegistration[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerRegistrations = (json?.providerRegistrations as JsonObject[])?.map((v: any) => new ProviderRegistration(v));
	}
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
}