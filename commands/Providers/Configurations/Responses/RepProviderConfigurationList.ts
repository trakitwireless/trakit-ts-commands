import { nothing, ProviderConfiguration } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "commands/API/Responses/Content/ContentId";

/**
 * A container for the requested {@link providerConfigurations}.
 **/
export abstract class RepProviderConfigurationList extends Reply {
	/**
	 * The list of requested {@link ProviderConfiguration}s.
	 **/
	providerConfigurations: ProviderConfiguration[] | nothing;

	constructor(json: any) {
		super(json);
		this.providerConfigurations = json?.providerConfigurations?.map((v: any) => new ProviderConfiguration(v));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepProviderConfigurationListByCompany extends RepProviderConfigurationList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}