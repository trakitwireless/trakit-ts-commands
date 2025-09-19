import { nothing, ProviderControl } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerControl}.
 **/
export class RepProviderControlGet extends Reply {
	/**
	 * The requested {@link ProviderControl}.
	 **/
	providerControl: ProviderControl | nothing;

	constructor(json: any) {
		super(json);
		this.providerControl = json?.providerControl
			? new ProviderControl(json.providerControl)
			: null;
	}
}