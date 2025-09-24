import { RepCompanyDelete } from "../Responses/RepCompanyDelete";
import { Reply } from "../../API/Responses/Reply";
import { PayCompany } from "./PayCompany";

/**
 * Deletes an existing {@link Company}.
 **/
export class PayCompanyDelete extends PayCompany { 
	override createReply(json: any): Reply {
		return new RepCompanyDelete(json);
	}
}