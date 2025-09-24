import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";
import { nothing } from "@trakit/objects";

/**
 * A container for the {@link assets}.
 **/
export class RepAssetBatchMerge extends Reply {
	/**
	 * An object which contains the `id` and `company` keys when there is no error.
	 **/
	assets: ContentIdCompany[] | nothing;

	constructor(json?: any) {
		super(json);
		this.assets = json?.assets?.map((a: any) => new ContentIdCompany(a)) ;
	}
}