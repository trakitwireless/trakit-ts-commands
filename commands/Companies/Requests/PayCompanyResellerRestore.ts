import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyResellerDelete } from "../Responses/RepCompanyResellerDelete";
import { PayCompany } from "./PayCompany";

/**
 * Deletes an existing {@link Company}.
 **/
export class PayCompanyResellerRestore extends PayCompany { 
	override createReply(json: JsonObject): Reply {
		return new RepCompanyResellerDelete(json as JsonObject);
	}
}