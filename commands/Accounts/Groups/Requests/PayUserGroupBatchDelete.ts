import { ParamId } from "commands/API/Requests/Parameters/ParamId";
import { Payload } from "../../../API/Requests/Payload";
import { ContentIdCompany } from "commands";

/**
 * 
 **/
export class PayUserGroupBatchDelete extends Payload {
	/**
	 * 
	 **/
	userGroups: ParamId[];

	constructor(json?: any) {
		super(json);
		this.userGroups = (json?.["userGroups"] || []).map((ug: any) => new ParamId(ug)) ?? [];
	}
}