import { JsonObject, nothing, SystemsOfUnits, Timezone, ulong, UserNotifications } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamPermission } from "../../../Permissions/ParamPermission";
/**
 * Parameters used to create or update an {@link User}.
 */
export declare class ParamUserMerge extends ParamMergeSubscribable {
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
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamUserMerge.d.ts.map