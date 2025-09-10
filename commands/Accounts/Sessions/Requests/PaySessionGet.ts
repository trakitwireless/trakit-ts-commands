import { Payload } from "../../../API/Requests/Payload";
import { ParamHandle } from "./Parameters/ParamHandle";

/**
 * Gets details of the specified {@link Session}.
 **/
export class PaySessionGet extends Payload {
	/**
	 * An object to contain the "handle" of the {@link Session}.
	 **/
	session: ParamHandle;

	constructor(json: any) {
		super(json);
		this.session = new ParamHandle(json?.["session"]);
	}
}