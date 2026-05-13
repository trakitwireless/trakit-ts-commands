import { codified, email, JsonObject, nothing, serialization, SystemsOfUnits, Timezone, ulong, UserNotifications, utility } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamPermission } from "../../../Permissions/ParamPermission";

/**
 * Parameters used to create or update an {@link User}.
 */
export class ParamUserMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the {@link User} you want to update.
	 */
	login: string;
	/**
	 * The company to which this {@link User} belongs.
	 * After creation, this value is read-only.
	 */
	company: ulong | nothing;
	/**
	 * Human friendly name for these credentials
	 */
	nickname: string | nothing;
	/**
	 * This {@link User}'s password.
	 */
	password: string | nothing;
	/**
	 * Indicated whether the credentials have expired according to the company's policy.
	 */
	passwordExpired: boolean | nothing;
	/**
	 * Indicates whether system access is disable.
	 */
	enabled: boolean | nothing;
	/**
	 * Contact information for this {@link User}.
	 * @see {@link Contact.id}
	 */
	contact: ulong | nothing;
	/**
	 * The {@link User}'s local timezone.
	 * @see {@link Timezone.code}
	 */
	timezone: Timezone | nothing;
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 */
	language: string | nothing;
	/**
	 * The format strings defining the preferred way to display ambiguous values.
	 */
	formats: Map<string, string> | nothing;
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 */
	measurements: Map<string, SystemsOfUnits | nothing> | nothing;
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 */
	options: Map<string, string> | nothing;
	/**
	 * Definition of how and when to send alerts to the {@link User}.
	 */
	notify: UserNotifications[] | nothing;
	/**
	 * A list of {@link UserGroup}s to which this {@link User} is a member.
	 */
	groups: ulong[] | nothing;
	/**
	 * Individual permission rules which override the {@link UserGroup} rules.
	 */
	permissions: ParamPermission[] | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.login = json?.login as email;
		this.company = json?.company as ulong;
		this.nickname = json?.nickname as string;
		this.password = json?.password as string;
		this.passwordExpired = json?.passwordExpired as boolean;
		this.enabled = json?.enabled as boolean;
		this.contact = json?.contact as ulong;
		this.timezone = utility.findTimeZoneById(json?.timezone as codified);
		this.language = json?.language as codified;
		this.formats = json?.formats ? serialization.toMap(json?.formats as object) : null;
		this.measurements = json?.measurements ? serialization.toMap(json?.measurements as object) : null;
		this.options = json?.options ? serialization.toMap(json?.options as object) : null;
		this.notify = (json?.notify as JsonObject[])?.map((n: any) => UserNotifications.fromJSON(n));
		this.groups = json?.groups as ulong[];
		this.permissions = (json?.permissions as JsonObject[])?.map((p: any) => new ParamPermission(p));
	}

	override toJSON(): JsonObject {
		const json: JsonObject = {
			"login": this.login,
		};
		if (this.v?.length) {
			json.v = [...this.v];
		} else {
			json["company"] = this.company as ulong;
		}

		if (this.nickname?.length) {
			json["nickname"] = this.nickname;
		}
		if (this.password?.length) {
			json["password"] = this.password;
		}
		if (!utility.isNothing(this.passwordExpired)) {
			json["passwordExpired"] = this.passwordExpired;
		}
		if (!utility.isNothing(this.enabled)) {
			json["enabled"] = this.enabled;
		}
		if (utility.isntNaN(this.contact as ulong)) {
			json["contact"] = this.contact as ulong;
		}
		if (this.timezone) {
			json["timezone"] = this.timezone.code
		}
		if (this.language?.length) {
			json["language"] = this.language;
		}
		if (this.formats?.size) {
			json["formats"] = serialization.fromMap(this.formats);
		}
		if (this.measurements?.size) {
			json["measurements"] = serialization.fromMap(this.measurements);
		}
		if (this.options?.size) {
			json["options"] = serialization.fromMap(this.options);
		}
		if (this.notify?.length) {
			json["notify"] = this.notify?.map(n => n.toJSON());
		}
		if (this.groups?.length) {
			json["groups"] = [...this.groups as ulong[]];
		}
		if (this.permissions?.length) {
			json["permissions"] = this.permissions?.map(p => p.toJSON());
		}
		return json;
	}
}