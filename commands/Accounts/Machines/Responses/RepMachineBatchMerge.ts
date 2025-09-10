import { ContentIdCompany } from "commands/API/Responses/Content/ContentIdCompany";
import { Reply } from "../../../API/Responses/Reply";

/**
 * 
 **/
export class RepMachineBatchMerge extends Reply {
	/**
	 * 
	 **/
	machines: ContentIdCompany[];

	constructor(json: any) {
		super(json);
		this.machines = json?.machines.map((m: any) => new ContentIdCompany(m)) ?? [];
	}
}