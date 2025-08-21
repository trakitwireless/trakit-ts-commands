import { ContentKey } from "./ContentKey";

/**
 * A container for the <see cref="Machine.key"/> and owning <see cref="Company.id"/> of the <see cref="Machine"/> requested/created.
 **/
export class ContentKeyCompany extends ContentKey {
	/**
	 * Identifier of the <see cref="Company"/> to which the <see cref="Machine"/> belongs.
	 **/
	company: ulong;}