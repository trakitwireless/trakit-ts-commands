import trakit from "@trakit/objects";

/**
 * A container for the details of the {@link Machine} requested.
 **/
export class SelfMachine extends trakit.Machine {
	constructor(json?: any | null) {
		super(json);
	}

	override fromJSON(json: any, force?: boolean): boolean {
		let update: boolean = false;
		if (json) {
			const groups = json["groups"] as any[],
				contact = json["contact"] as any;
			json["contact"] = contact?.id ?? null;
			json["groups"] = groups.map(g => g.id);
			update = super.fromJSON(json);
			if (update) {
				if (contact) {
					let cont = trakit.storage.contacts.get(contact.id);
					if (!cont) trakit.storage.contacts.set(contact.id, new Contact);
					cont?.fromJSON(contact);
				}
				for (let obj of groups) {
					let group = trakit.storage.userGroups.get(obj.id);
					if (!group) trakit.storage.userGroups.set(obj.id, new UserGroup);
					group?.fromJSON(obj);
				}
			}
		}
		return update;
	}
}