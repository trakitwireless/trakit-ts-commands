import { ContentIdendifierCompany } from "./ContentIdendifierCompany";

/**
 * For delete/restore commands, this contains the {@link Provider.id}, version keys, owning {@link Company.id}, and deleted state.
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