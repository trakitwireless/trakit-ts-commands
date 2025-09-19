import { nothing, ProviderConfigurationType } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerConfigurationType}.
 **/
export class RepProviderConfigurationTypeGet extends Reply {
	/**
	 * The requested {@link ProviderConfigurationType}.
	 **/
	providerConfigurationType: ProviderConfigurationType | nothing;

	constructor(json: any) {
		super(json);
		this.providerConfigurationType = json?.providerConfigurationType
			? new ProviderConfigurationType(json.providerConfigurationType)
			: null;
	}
}