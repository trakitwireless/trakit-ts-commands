import { ContentIdendifierCompany } from "./ContentIdendifierCompany";

/**
 * For suspend/revive commands, this contains the {@link Provider} id, version keys, owning {@link Company.id}, and suspended state.
 **/
export class ContentIdendifierSuspended extends ContentIdendifierCompany {
	/**
	 * Flag showing if the object is suspended.
	 **/
	suspended: boolean;
	/**
	 * Object version keys used to validate synchronization for all object properties.
	 **/
	v: uint[];}