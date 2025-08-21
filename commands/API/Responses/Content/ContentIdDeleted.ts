import { ContentIdCompany } from "./ContentIdCompany";

/**
 * For delete/restore commands, this contains the id, version keys, owning {@link Company.id}, and deleted state.
 **/
export abstract class ContentIdDeleted extends ContentIdCompany {
	/**
	 * Flag showing if the object is deleted.
	 **/
	deleted: boolean;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 **/
	v: uint[];}