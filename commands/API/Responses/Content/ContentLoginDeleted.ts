import { ContentLoginCompany } from "./ContentLoginCompany";

/**
 * For delete/restore commands, this contains the <see cref="User"/> login, version keys, owning <see cref="Company.id"/>, and deleted state.
 **/
export class ContentLoginDeleted extends ContentLoginCompany {
	/**
	 * Flag showing if the object is deleted.
	 **/
	deleted: boolean;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 **/
	v: uint[];}