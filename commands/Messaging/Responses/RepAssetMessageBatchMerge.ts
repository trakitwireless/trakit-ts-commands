import { nothing } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";

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