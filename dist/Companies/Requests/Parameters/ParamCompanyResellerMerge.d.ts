import { ColourStyle, JsonObject, nothing, ulong } from "@trakit/objects";
import { ParamMergeSubscribable } from "../../../API/Requests/Parameters/ParamMergeSubscribable";
import { ParamEmailServer } from "./ParamEmailServer";
import { ParamSmsServer } from "./ParamSmsServer";
/**
 * Parameters used to create or update an {@link Company}.
 */
export declare class ParamCompanyResellerMerge extends ParamMergeSubscribable {
    /**
     * The unique identifier of the company you want to update.
     */
    id: ulong;
    /**
     * The name of the branded service being provided to the seller's customers.
     */
    serviceName: string | nothing;
    /**
     * A list of Contacts for company specific things like Technical Support, Billing, etc...
     */
    contactInfo: Map<string, ulong | nothing> | nothing;
    /**
     * The name of the image uploaded as the logo (used for regular view).
     */
    logo: string | nothing;
    /**
     * The name of the image uploaded as the logo (used for collapsed/mobile view).
     */
    icon: string | nothing;
    /**
     * The name of the icon file used for browser bookmarks.
     */
    favourite: string | nothing;
    /**
     * The URN and path to the instance of v4.
     * It does not contain the protocol because all instances are required to be HTTPS.
     */
    domain: string | nothing;
    /**
     * The list of supported languages for your customers.
     */
    languages: string[] | nothing;
    /**
     * Themed colours used in the web-based UI.
     */
    website: Map<string, string | nothing> | nothing;
    /**
     * A list of symbol names and their corresponding FontAwesome icon names.
     */
    graphics: Map<string, string | nothing> | nothing;
    /**
     * Colours used as templates for status tags, labels, and places.
     */
    gamut: Map<string, ColourStyle | nothing> | nothing;
    /**
     * Settings for sending and receiving email notifcations and asset messages.
     */
    notifyEmail: ParamEmailServer | nothing;
    /**
     * Settings for sending and receiving SMS notifcations and asset messages.
     */
    notifySms: ParamSmsServer | nothing;
    /**
     * A small body of text added as a preamble for the Trak-iT Wireless Inc. terms of service.
     */
    termsPreamble: string | nothing;
    /**
     * A timestamp from when the preamble was changed.
     */
    termsUpdated: Date | nothing;
    /**
     * The subject of the email sent to a user requesting a password reset.
     */
    recoverSubject: string | nothing;
    /**
     * The body of the email sent to a user requesting a password reset.
     */
    recoverBody: string | nothing;
    /**
     * When true, sends the password reset email as an HTML email instead of plain text.
     */
    recoverIsHtml: boolean | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
}
//# sourceMappingURL=ParamCompanyResellerMerge.d.ts.map