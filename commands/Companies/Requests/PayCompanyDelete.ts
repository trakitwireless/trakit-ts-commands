import { JsonObject } from "@trakit/objects";
import { Reply } from "../../API/Responses/Reply";
import { RepCompanyDelete } from "../Responses/RepCompanyDelete";
import { PayCompany } from "./PayCompany";

/**
 * Deletes an existing {@link Company}.
 **/
export class PayCompanyDelete extends PayCompany { 
	override createReply(json: JsonObject): Reply {
		return new RepCompanyDelete(json);
	}
}