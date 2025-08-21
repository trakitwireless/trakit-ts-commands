import { PayFormTemplate } from "./PayFormTemplate";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";

/**
 * Gets details of the specified {@link FormTemplate}.

 **/
export class PayFormTemplateGet extends PayFormTemplate implements IPayDeletable {
	/**
	 * When true, the command will also return a deleted {@link FormTemplate} (if it exists).

	 **/
	includeDeleted: boolean;}