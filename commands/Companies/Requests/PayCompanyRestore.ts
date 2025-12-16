import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyDelete } from "../Responses/RepCompanyDelete";
import { PayCompany } from "./PayCompany";

/**
 * Restores a deleted {@link Company}.
 */
export class PayCompanyRestore extends PayCompany { 
	override createReply(json: JsonObject): Reply {
		return new RepCompanyDelete(json);
	}
}