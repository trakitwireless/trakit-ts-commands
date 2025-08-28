import { storage, ulong, UserAdvanced, UserGroup } from '@trakit/objects';

/**
 * Similar to the {@link UserAdvanced} object, but instead of the {@link groups} being a list of identifiers,
 * the {@link UserGroup} objects are embedded within.
 **/
export class SelfUserAdvanced extends UserAdvanced {
	/**
	 * Overridden so we can parse the UserGroup information.
	 * @param json 
	 * @param force 
	 * @returns 
	 */
	override fromJSON(json: any, force?: boolean): boolean {
		let update: boolean = false;
		if (json) {
			const groups = json["groups"] as any[];
			json["groups"] = groups.map(g => g.id as ulong);
			update = super.fromJSON(json, force);
			if (update) {
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