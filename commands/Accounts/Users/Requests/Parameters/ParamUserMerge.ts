import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";

/**
 * Parameters used to create or update an <see cref="User"/>.
 **/
export class ParamUserMerge extends ParamMergeSubscribable {
	/**
	 * The unique identifier of the <see cref="User"/> you want to update.
	 **/
	login: string;
	/**
	 * The company to which this <see cref="User"/> belongs.
	 * After creation, this value is read-only.
	 **/
	company: ulong | undefined;
	/**
	 * Human friendly name for these credentials
	 **/
	nickname: string;
	/**
	 * This <see cref="User"/>'s password.
	 **/
		[JsonIgnore]
	password: string;
	/**
	 * Indicated whether the credentials have expired according to the company's policy.
	 **/
	passwordExpired: boolean | undefined;
	/**
	 * Indicates whether system access is disable.
	 **/
	enabled: boolean | undefined;
	/**
	 * Contact information for this <see cref="User"/>.
	 * <seealso cref="Contact.id" />
	 **/
	contact: ulong | undefined;
	/**
	 * The <see cref="User"/>'s local timezone.
	 * <seealso cref="Timezone.code" />
	 **/
	timezone: TimeZoneInfo;
	/**
	 * Preferred region/language for the UI and notifications.
	 * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
	 **/
	language: string;
	/**
	 * The format strings defining the preferred way to display ambiguous values.
	 **/
	formats: Map<string, string>;
	/**
	 * Preferred way of displaying ambiguous numbers in the context of measurements.
	 **/
	measurements: Map<string, SystemsOfUnits?>;
	/**
	 * Additional options which do not fit in with the formats or measurements preferences.
	 **/
	options: Map<string, string>;
	/**
	 * Definition of how and when to send alerts to the <see cref="User"/>.
	 **/
	notify: UserNotifications[];
	/**
	 * A list of <see cref="UserGroup"/>s to which this <see cref="User"/> is a member.
	 **/
	groups: ulong[];
	/**
	 * Individual permission rules which override the <see cref="UserGroup"/> rules.
	 **/
	permissions: ParamPermission[];}