import { ContentCodeCompany } from "./ContentCodeCompany";

/**
 * A container for the id of the <see cref="ProviderRegistration"/> requested/created.
 * For delete/restore commands, this contains the <see cref="ProviderRegistration.code"/>, owning <see cref="Company.id"/>, and deleted state.
 **/
export class ContentCodeDeleted extends ContentCodeCompany {
	/**
	 * Flag showing if the object is deleted.
	 **/
	deleted: boolean;}