import { JsonObject, nothing, SyncName, SystemsOfUnits, Timezone, UserNotifications } from "@trakit/objects";
import { Payload } from "../../../API/Requests/Payload";
import { Reply } from "../../../API/Responses/Reply";
/**
 * Allows a session {@link User} to change their own preferences.
 */
export declare class PaySelfPreferences extends Payload {
    /**
     * Preferred region/language for the UI and notifications.
     * Valid formats use &lt;ISO 639-1&gt;&lt;dash&gt;&lt;ISO 3166-2&gt; such as "fr-CA" or "en-US".
     */
    language: string | nothing;
    /**
     * Your local {@link Timezone} used to calculate times.
     * @see {@link Timezone.code}
     */
    timezone: Timezone | nothing;
    /**
     * List of {@link UserNotifications} preferences.
     * Please note that active times cannot overlap.
     */
    notify: UserNotifications[] | nothing;
    /**
     * Formatting help for dates, times, numbers.
     */
    formats: Map<string, string | nothing> | nothing;
    /**
     * Preferred way of displaying ambiguous numbers in the context of measurements.
     */
    measurements: Map<string, SystemsOfUnits | nothing> | nothing;
    constructor(json?: JsonObject);
    getAction(): {
        kind: "Merge";
        object: SyncName;
        filter: "Preferences";
        batch: false;
    };
    createReply(json: JsonObject): Reply;
    toJSON(): JsonObject;
}
//# sourceMappingURL=PaySelfPreferences.d.ts.map