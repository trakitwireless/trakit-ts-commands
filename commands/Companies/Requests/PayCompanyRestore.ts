import { Reply } from "../../API/Responses/Reply";
import { RepCompanyDelete } from "../Responses/RepCompanyDelete";
import { PayCompany } from "./PayCompany";

/**
 * Restores a deleted {@link Company}.
 **/
export class PayCompanyRestore extends PayCompany { 
	override createReply(json: any): Reply {
		return new RepCompanyDelete(json);
	}
}