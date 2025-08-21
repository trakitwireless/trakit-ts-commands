import { ContentIdendifierCompany } from "./ContentIdendifierCompany";

/**
 * For delete/restore commands, this contains the <see cref="Provider.id"/>, version keys, owning <see cref="Company.id"/>, and deleted state.
 **/
export class ContentIdendifierDeleted extends ContentIdendifierCompany {
	/**
	 * Flag showing if the object is deleted.
	 **/
	deleted: boolean;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 **/
	v: uint[];}