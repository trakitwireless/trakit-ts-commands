import { JsonObject, nothing, ProviderConfigurationType } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link providerConfigurationTypes}.
 **/
export abstract class RepProviderConfigurationTypeList extends ReplySyncList<ProviderConfigurationType> {
	/**
	 * The list of requested {@link ProviderConfigurationType}s.
	 **/
	providerConfigurationTypes: ProviderConfigurationType[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerConfigurationTypes = (json?.providerConfigurationTypes as JsonObject[])?.map((v: any) => new ProviderConfigurationType(v));
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

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}