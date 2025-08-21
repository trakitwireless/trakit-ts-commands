import { ContentKey } from "./ContentKey";

/**
 * A container for the {@link Machine.key} and owning {@link Company.id} of the {@link Machine} requested/created.
 **/
export class ContentKeyCompany extends ContentKey {
	/**
	 * Identifier of the {@link Company} to which the {@link Machine} belongs.
	 **/
	company: ulong;}