import { Payload } from "../../../API/Requests/Payload";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { IPayListByUser } from "../../../API/Requests/IPayListByUser";

/**
 * Gets the list of <see cref="Session"/> for the specified <see cref="Company"/>.
 **/
export class PaySessionListByCompany extends Payload implements IPayListByCompany {
	/**
	 * An object to contain the "id" of the <see cref="Company"/>.
	 **/
	company: ParamId;
	}
/**
 * Gets the list of <see cref="Session"/>s for the specified <see cref="User"/>.
 **/
export class PaySessionListByUser extends Payload implements IPayListByUser {
	/**
	 * An object to contain the "login" of the <see cref="User"/>.
	 **/
	user: ParamLogin;}