import { JsonObject } from "@trakit/objects";
import { nothing, ProviderGeneral } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";

/**
 * A container for the {@link providerGeneral}.
 **/
export class RepProviderGeneralGet extends Reply {
	/**
	 * The requested {@link Provider}.
	 **/
	providerGeneral: ProviderGeneral | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.providerGeneral = json?.providerGeneral
			? new ProviderGeneral(json.providerGeneral)
			: null;
	}
}