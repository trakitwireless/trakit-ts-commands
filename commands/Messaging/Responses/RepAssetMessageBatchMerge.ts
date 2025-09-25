import { nothing } from "@trakit/objects";
import { ContentIdCompany } from "../../API/Responses/Content/ContentIdCompany";
import { Reply } from "../../API/Responses/Reply";

/**
 * 
 **/
export class RepAssetMessageBatchMerge extends Reply {
	/**
	 * 
	 **/
	assetMessages: ContentIdCompany[] | nothing;

	constructor(json: any) {
		super(json);
		this.assetMessages = json?.assetMessages?.map((v: any) => ContentIdCompany.fromJSON(v));
	}
}