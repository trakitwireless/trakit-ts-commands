import { Payload } from "../../../API/Requests/Payload";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { PayProviderScriptList } from "./PayProviderScriptList";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";

/**
 * Gets details of the specified {@link providerScript}.
 **/
export abstract class PayProviderScriptList extends Payload implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link ProviderScript}s.
	 **/
	includeDeleted: boolean;
	}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayProviderScriptListByCompany extends PayProviderScriptList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;}