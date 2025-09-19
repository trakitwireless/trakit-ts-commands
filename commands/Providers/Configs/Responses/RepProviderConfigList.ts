import { nothing, ProviderConfig } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentId } from "commands/API/Responses/Content/ContentId";

/**
 * A container for the requested {@link providerConfigs}.
 **/
export abstract class RepProviderConfigList extends Reply {
	/**
	 * The list of requested {@link ProviderConfig}s.
	 **/
	providerConfigs: ProviderConfig[] | nothing;

	constructor(json: any) {
		super(json);
		this.providerConfigs = json?.providerConfigs?.map((v: any) => new ProviderConfig(v));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepProviderConfigListByCompany extends RepProviderConfigList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: any) {
		super(json);
		this.company = ContentId.fromJSON(json?.company);
	}
}