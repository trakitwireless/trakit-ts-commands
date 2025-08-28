import { Contact, storage, ulong, UserGeneral, UserGroup } from '@trakit/objects';

/**
 * Similar to the {@link UserGeneral} object, but instead of the {@link contact} being an identifier,
 * it is a {@link Contact} object.
 **/
export class SelfUserGeneral extends UserGeneral {
	/**
	 * Overridden so we can parse the Contact information.
	 * @param json 
	 * @param force 
	 * @returns 
	 */
	override fromJSON(json: any, force?: boolean): boolean {
		let update = false;
		if (json) {
			const contact = json["contact"] as any;
			json["contact"] = contact?.id as ulong | null;
			update = super.fromJSON(json, force);
			if (update) {
				if (contact) {
					let cont = storage.contacts.get(contact.id);
					if (!cont) storage.contacts.set(contact.id, cont = new Contact);
					cont.fromJSON(contact);
				}
			}
		}
		return update;
	}
}