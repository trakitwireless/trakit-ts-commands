import { Behaviour, Company, nothing, Picture, serialization, ulong, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an {@link Behaviour}.
 **/
export class ParamBehaviourMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link Behaviour} you want to update.
	 * Leave this as `null` when creating a new {@link Behaviour}.
	 **/
	id: ulong | nothing;
	/**
	 * The {@link BehaviourScript} this {@link Behaviour} implements.
	 **/
	script: ulong | nothing;
	/**
	 * The {@link Company} to which this {@link Behaviour} belongs.
	 * After creation, this value is read-only.
	 **/
	company: ulong | nothing;
	/**
	 * Name for the {@link Behaviour}.
	 **/
	name: string | nothing;
	/**
	 * Notes for the {@link Behaviour}.
	 **/
	notes: string | nothing;








// wtf







	/**
	 * A collection of other names this person might go by.
	 * Use the object key like a name identifier.
	 * Example keys: Initials, Nickname, Maiden Name, etc.
	 **/
	otherNames: Map<string, string | nothing> | nothing;
	/**
	 * Email addresses
	 * Use the object key like a name of the address.
	 * Example keys: Home, Work, Support, Old, etc.
	 **/
	emails: Map<string, string | nothing> | nothing;
	/**
	 * Phone numbers.
	 * Use the object key like a name of the phone number.
	 * Example keys: Mobile, Fax, Home, Office, etc.
	 **/
	phones: Map<string, ulong | nothing> | nothing;
	/**
	 * Mailing addresses
	 * Use the object key like a name of the address.
	 * Example keys: Home, Work, Park, etc.
	 **/
	addresses: Map<string, string | nothing> | nothing;
	/**
	 * Websites and other online resources
	 * Use the object key like a name of the address.
	 * Example keys: Downloads, Support, FTP, etc.
	 **/
	urls: Map<string, URL | nothing> | nothing;
	/**
	 * Date information
	 * Use the object key like a name of the date.
	 * Example keys: Birthday, Started Date, Retired On, etc.
	 **/
	dates: Map<string, Date | nothing> | nothing;
	/**
	 * Uncategorized information
	 * Use the object keys and values however you'd like.
	 **/
	options: Map<string, object | string | nothing> | nothing;
	/**
	 * A list of roles they play in the {@link Company}.
	 **/
	roles: string[] | nothing;
	/**
	 * {@link Picture}s of this {@link Behaviour}.
	 **/
	pictures: ulong[] | nothing;

	constructor(json: any) {
		super(json);
		this.id = json?.id;
		this.company = json?.company;
		this.name = json?.name;
		this.notes = json?.notes;
		this.otherNames = serialization.toMap(json?.otherNames);
		this.emails = serialization.toMap(json?.emails);
		this.phones = serialization.toMapPredicate(json?.phones, (key, value) => [key, value ? utility.phoneNumber(value) : null]);
		this.addresses = serialization.toMap(json?.addresses);
		this.urls = serialization.toMapPredicate(json?.urls, (key, value) => [key, value ? new URL(value) : null]);
		this.dates = serialization.toMapPredicate(json?.dates, (key, value) => [key, value ? utility.date(value) : null]);
		this.options = serialization.toMap(json?.options);
		this.roles = json?.roles;
		this.pictures = json?.pictures;
	}

	override toJSON(): any {
		const json: any = {};
		if (this.id) {
			json.id = this.id;
			json.v = [...this.v];
		} else {
			json.script = this.script;
		}
		if (this.company) json.company = this.company;
		if (this.name) json.name = this.name;
		if (this.notes) json.notes = this.notes;
		if (this.otherNames) json.otherNames = serialization.fromMap(this.otherNames);
		if (this.emails) json.emails = serialization.fromMap(this.emails);
		if (this.phones) json.phones = serialization.fromMapPredicate(this.phones, (key, value) => [key, value || null]);
		if (this.addresses) json.addresses = serialization.fromMap(this.addresses);
		if (this.urls) json.urls = serialization.fromMapPredicate(this.urls, (key, value) => [key, value?.toString() ?? null]);
		if (this.dates) json.dates = serialization.fromMapPredicate(this.dates, (key, value) => [key, utility.isntNaN(value?.valueOf()) ? value.toISOString() : null]);
		if (this.options) json.options = serialization.fromMap(this.options);
		if (this.roles) json.roles = [...this.roles];
		if (this.pictures) json.pictures = [...this.pictures];
		return json;
	}
}