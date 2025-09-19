import { nothing, ProviderConfigurationType } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "commands/API/Responses/Content/ContentId";

/**
 * A container for the requested {@link providerConfigurationTypes}.
 **/
export abstract class RepProviderConfigurationTypeList extends Reply {
	/**
	 * The list of requested {@link ProviderConfigurationType}s.
	 **/
	providerConfigurationTypes: ProviderConfigurationType[] | nothing;

	constructor(json: any) {
		super(json);
		this.providerConfigurationTypes = json?.providerConfigurationTypes?.map((v: any) => new ProviderConfigurationType(v));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepProviderConfigurationTypeListByCompany extends RepProviderConfigurationTypeList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}