import { ContentKeyCompany } from "./ContentKeyCompany";

/**
 * For delete/restore commands, this contains the <see cref="Machine.key"/>, version keys, owning <see cref="Company.id"/>, and deleted state.
 **/
export class ContentKeyDeleted extends ContentKeyCompany {
	/**
	 * Flag showing if the object is deleted.
	 **/
	deleted: boolean;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 **/
	v: uint[];}