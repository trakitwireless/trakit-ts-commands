import {
	codified,
	Company,
	CompanyPolicy,
	Contact,
	datetime,
	email,
	guid,
	IDeserializable,
	IRequestable,
	ISerializable,
	JsonObject,
	Machine,
	nothing,
	storage,
	SyncName,
	ulong,
	User,
	UserGroup,
	utility
} from "@trakit/objects";
import { ReplySync } from "../../../API/Responses/ReplySync";

/**
 * A container for the {@link User} or {@link Machine} of the current session.
 */
export class RepSelfGet extends ReplySync {
	/**
	 * The UTC date/time of the server hosting the connection.
	 */
	serverTime: Date;
	/**
	 * Your session identifier.
	 */
	ghostId: guid;
	/**
	 * The timestamp of when this session expires.
	 */
	expiry: Date;
	/**
	 * This session's {@link User} details (if the service is being used by a {@link User}).
	 * If this value is not present, then the session is not yet authenticated.
	 */
	user: User | nothing;
	/**
	 * The login of the current {@link User} (if the service is being used by a {@link User}).
	 */
	get userLogin() { return this.user?.login; }
	/**
	 * The {@link Contact} details of the current {@link User} (if the service is being used by a {@link User} and the {@link User} has a {@link Contact}).
	 */
	contact: Contact | nothing;
	/**
	 * This {@link Machine}'s details (if the service is being used by a {@link Machine}).
	 * If this value is not present, then the session is not a machine account.
	 */
	machine: Machine | nothing;
	/**
	 * The key of the current {@link Machine} (if the service is being used by a {@link Machine}).
	 */
	get machineKey() { return this.machine?.key; }
	/**
	 * The {@link UserGroup}s that the current session's {@link User} or {@link Machine} belongs to.
	 */
	groups: UserGroup[] = [];
	/**
	 * The {@link CompanyPolicy} which apply to this {@link User}.
	 */
	policy: CompanyPolicy | nothing;

	constructor(json?: JsonObject) {
		super(json as JsonObject, "Self" as SyncName);
		this.serverTime = utility.date(json?.serverTime as datetime);
		this.ghostId = json?.ghostId as guid ?? "";
		this.expiry = utility.date(json?.expiry as datetime);
		this.policy = (json?.user as JsonObject)?.policies
			? new CompanyPolicy((json?.user as JsonObject)?.policies as JsonObject)
			: null;
		this.#ctorSelf(json as JsonObject);
	}
	/**
	 * Updates the account information based on the received message content.
	 * @param json The JSON object containing the account information.
	 */
	#ctorSelf(json: JsonObject): void {
		if (json?.user) {
			this.user = new User(
				this.#ctorAdvanced(
					this.#ctorGeneral(
						json.user as JsonObject
					)
				)
			);
		}
		if (json?.machine) {
			this.machine = new Machine(
				this.#ctorAdvanced(
					json.machine as JsonObject
				)
			);
		}
	}
	/**
	 * Strips the `contact` object out of the `json` object,
	 * then returns a copy of the `json` with the `contact` replaced with the `id`,
	 * so that the object can be used to construct a `User` object.
	 * @param json The JSON object containing the account information.
	 * @returns A {@link User} compatible JSON object with the updated account information.
	 */
	#ctorGeneral(json: JsonObject): JsonObject {
		if (json?.contact) {
			this.contact = new Contact(json.contact as JsonObject);
			return {
				...json,
				contact: this.contact.id,
			};
		}
		return json;
	}
	/**
	 * Strips the `groups` array out of the `json` object,
	 * then returns a copy of the `json` with the `groups` array replaced with the `id` of each object,
	 * so that the object can be used to construct a `User` or `Machine` object.
	 * @param json The JSON object containing the account information.
	 * @returns A {@link User} compatible JSON object with the updated account information.
	 */
	#ctorAdvanced(json: JsonObject): JsonObject {
		if ((json?.groups as JsonObject[])?.length) {
			return {
				...json,
				groups: (json.groups as JsonObject[]).map(grp => {
					this.groups.push(new UserGroup(grp));
					return grp["id"];
				}),
			};
		}
		return json;
	}

	override toJSON(): JsonObject {
		const json: JsonObject = {
			...super.toJSON(),
			"ghostId": this.ghostId,
			"expiry": utility.isntNaN(this.expiry.valueOf())
				? this.expiry.toISOString()
				: null,
			"serverTime": utility.isntNaN(this.serverTime.valueOf())
				? this.serverTime.toISOString()
				: null,
		};
		if (this.user) {
			json["user"] = {
				...this.user.toJSON(),
				"contact": this.contact?.toJSON() ?? null,
				"policies": this.policy?.toJSON() ?? null,
				"groups": this.groups.map(g => g.toJSON()),
			};
		}
		if (this.machine) {
			json["machine"] = {
				...this.machine.toJSON(),
				"groups": this.groups.map(g => g.toJSON()),
			};
		}
		return json;
	}

	override getCompanyId(): ulong { return (this.user?.companyId ?? this.machine?.companyId) as ulong; }

	override store(): boolean {
		const modContact = !!this.contact && this._storePart(storage["Contact"], this.contact),
			modPolicy = !!this.policy && this._storePolicy(),
			modUser = !!this.user && this._storePart(storage["User"], this.user),
			modMachine = !!this.machine && this._storePart(storage["Machine"], this.machine),
			modGroups = this.groups.reduce((modified, group) => this._storePart(storage["UserGroup"], group) || modified, false);
		return modContact || modPolicy || modUser || modMachine || modGroups;
	}
	_storePart(
		map: Map<ulong | guid | email | codified | string, IRequestable>,
		obj: IRequestable & ISerializable
	): boolean {
		const key = obj.getKey(),
			stored = map.get(key) as unknown as IDeserializable;
		let modified = !stored;
		if (modified) map.set(key, obj);
		else modified = stored.fromJSON(obj.toJSON());
		return modified;
	}
	_storePolicy(): boolean {
		const map = storage["Company"] as Map<ulong, Company>,
			obj = this.policy as CompanyPolicy;
		let stored = map.get(obj.id),
			modified = !stored;
		if (!stored) map.set(obj.id, stored = new Company());
		modified = stored.pieces[4].fromJSON(obj.toJSON()) || modified;
		return modified;
	}
}