import { Contact, storage, ulong, User, UserGroup } from '@trakit/objects';

/**
 * Similar to the {@link User} object, but instead of the {@link contact}
 * and {@link groups} properties being identifiers of other objects,
 * the {@link Contact} and {@link UserGroup} objects are embedded within.
 **/
export class SelfUser extends User {
	/**
	 * Overridden so we can parse the Contact and UserGroup information.
	 * @param json 
	 * @param force 
	 * @returns 
	 */
	override fromJSON(json: any, force?: boolean): boolean {
		let update: boolean = false;
		if (json) {
			const groups = json["groups"] as any[],
				contact = json["contact"] as any;
			json["contact"] = contact?.id as ulong | null;
			json["groups"] = groups.map(g => g.id as ulong);
			update = super.fromJSON(json, force);
			if (update) {
				if (contact) {
					let cont = storage.contacts.get(contact.id);
					if (!cont) storage.contacts.set(contact.id, cont = new Contact);
					cont.fromJSON(contact);
				}
				for (let obj of groups) {
					let group = storage.userGroups.get(obj.id);
					if (!group) storage.userGroups.set(obj.id, group = new UserGroup);
					group.fromJSON(obj);
				}
			}
		}
		return update;
	}
}