import { nothing, Provider } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link provider}.
 **/
export class RepProviderGet extends Reply {
	/**
	 * The requested {@link Provider}.
	 **/
	provider: Provider | nothing;

	constructor(json: any) {
		super(json);
		this.provider = json?.provider
			? new Provider(json.provider)
			: null;
	}
}