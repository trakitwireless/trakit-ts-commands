import { codified, email, guid, JsonObject, nothing, ProviderConfigurationType, ulong } from "@trakit/objects";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link providerConfigurationTypes}.
 */
export class RepProviderConfigurationTypeList extends ReplySyncList<ProviderConfigurationType> {
	/**
	 * The list of requested {@link ProviderConfigurationType}s.
	 */
	providerConfigurationTypes: ProviderConfigurationType[] | nothing;

	constructor(json: JsonObject) {
		super(json, "ProviderConfigurationType");
		this.providerConfigurationTypes = (json?.providerConfigurationTypes as JsonObject[])?.map((v: any) => new ProviderConfigurationType(v));
	}
	override getList() { return this.providerConfigurationTypes as ProviderConfigurationType[]; }
	override _filterCollection(pair: [ulong | guid | email | codified | string, ProviderConfigurationType], index: number): boolean {
		return true; // Filtering by config type means all types should be purged when a new list is loaded.
	}
	override getCompanyId() { return 0 as ulong; }
}