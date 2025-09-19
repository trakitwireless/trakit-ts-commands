import { nothing } from "@trakit/objects";
import { Reply } from "../../../API/Responses/Reply";
import { ContentIdendifierCompany } from "commands";

/**
 * A container for the {@link provider}.
 **/
export class RepProviderMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	provider: ContentIdendifierCompany | nothing;

	constructor(json: any) {
		super(json);
		this.provider = ContentIdendifierCompany.fromJSON(json?.provider);
	}
}