import { JsonObject, nothing } from "@trakit/objects";
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

	constructor(json: JsonObject) {
		super(json);
		this.assetMessages = (json?.assetMessages as JsonObject[])?.map((v: any) => new ContentIdCompany(v));
	}
}