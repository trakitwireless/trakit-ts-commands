import { nothing, SystemsOfUnits, Timezone, ulong, url, UserNotifications } from '@trakit/objects';
import { PaySelfContact } from '../commands/Accounts/Self/Requests/PaySelfContact';
import { PaySelfGet } from '../commands/Accounts/Self/Requests/PaySelfGet';
import { PaySelfLogin } from '../commands/Accounts/Self/Requests/PaySelfLogin';
import { PaySelfLogout } from '../commands/Accounts/Self/Requests/PaySelfLogout';
import { PaySelfPassword } from '../commands/Accounts/Self/Requests/PaySelfPassword';
import { PaySelfPreferences } from '../commands/Accounts/Self/Requests/PaySelfPreferences';
import { RepSelfGet } from '../commands/Accounts/Self/Responses/RepSelfGet';
import { RepSelfLogout } from '../commands/Accounts/Self/Responses/RepSelfLogout';
import { RepSelfPasswordMerge } from '../commands/Accounts/Self/Responses/RepSelfPasswordMerge';
import { ErrorCode } from '../commands/API/Responses/Errors/ErrorCode';
import { Reply } from '../commands/API/Responses/Reply';
import { TrakitCommander } from './TrakitCommander';

/**
 * The base class used to help define interaction with all Trak-iT API services.
 */
export abstract class TrakitObjectCommander extends TrakitCommander {
    /**
     * Details of the {@link User} or {@link Machine} who is connected to the underlying Trak-iT API service.
     */
    account: RepSelfGet | nothing;
    
    //#region Commands - Self
    /**
     * Requests the details of the {@link User} or {@link Machine} currently identified.
     * @returns The account details or null.
     */
    public async getSelfDetails(): Promise<RepSelfGet | null> {
        const reply = await this.command<RepSelfGet>(new PaySelfGet());
        switch (reply.errorCode) {
            case ErrorCode.success:
            case ErrorCode.passwordExpired:
            case ErrorCode.sessionExpired:
            case ErrorCode.userNotLoggedIn:
                this.account = reply;
                break;
            default:
                this.account = null;
                break;
        }
        return this.account;
    }

    /**
     * Sends a login command, and if successful, saves the ghostId as the authentication mechanism for all further requests.
     * @param username Your email address.
     * @param password Your password.
     * @param [userAgent] Optional string to identify this software.
     * @returns The response, which contains a SelfUser when successful.
     */
    public async login(username: string, password: string, userAgent: string | null = null): Promise<RepSelfGet | null> {
        this.account = await this.command<RepSelfGet>({
            username: username,
            password: password,
            userAgent: userAgent,
        } as PaySelfLogin);
        if (this.account.errorCode == ErrorCode.success) {
            if (this.account.ghostId) {
                this.setAuth(this.account.ghostId);
            } else {
                this.setAuth(this.account.machine);
            }
        }
        return this.account;
    }
    /**
     * Sends a logout command, and if successful, removes the current session using setAuth().
     * @returns The logout response.
     */
    public async logout(): Promise<RepSelfLogout> {
        const reply = await this.command<RepSelfLogout>(new PaySelfLogout());
        switch (reply.errorCode) {
            case ErrorCode.success:
            case ErrorCode.sessionExpired:
                this.setAuth();
                break;
        }
        return reply;
    }

    /**
     * Allows a {@link User} to update their own {@link Contact}. 
     * If your {@link User} has no associated {@link Contact}, you will receive a {@link ErrorCode.contactNotFound} error.
     * @param name
     * @param notes
     * @param otherNames
     * @param emails
     * @param phones
     * @param addresses
     * @param urls
     * @param dates
     * @param options
     * @param roles
     * @param pictures
     * @returns The reply from the update contact command.
     */
    public updateContact(
        name: string,
        notes: string,
        otherNames: Map<string, string | null>,
        emails: Map<string, string | null>,
        phones: Map<string, ulong | null>,
        addresses: Map<string, string | null>,
        urls: Map<string, url | null>,
        dates: Map<string, Date | null>,
        options: Map<string, string | null>,
        roles: string[],
        pictures: ulong[],
    ): Promise<Reply> {
        return this.command<Reply>({
            contact: {
                name: name,
                notes: notes,
                otherNames: otherNames,
                emails: emails,
                phones: phones,
                addresses: addresses,
                urls: urls,
                dates: dates,
                options: options,
                roles: roles,
                pictures: pictures,
            },
        } as PaySelfContact);
    }
    /**
     * Allows a session {@link User} to change their own password.
     * @param oldPassword Your current password, as verification that you are the account owner.
     * @param newPassword Your new password must conform to your company's PasswordPolicy.
     * @returns The password change response.
     */
    public updatePassword(
        oldPassword: string,
        newPassword: string
    ): Promise<RepSelfPasswordMerge> {
        return this.command<RepSelfPasswordMerge>({
            current: oldPassword,
            password: newPassword,
        } as PaySelfPassword);
    }
    /**
     * Allows a {@link User} to change their own preferences.
     * @param language
     * @param timezone
     * @param notify
     * @param formats
     * @param measurements
     * @param options
     * @returns The reply from the update preferences command.
     */
    public updatePreferences(
        language: string,
        timezone: Timezone | string,
        notify: UserNotifications[],
        formats: Map<string, string>,
        measurements: Map<string, SystemsOfUnits>,
        options: Map<string, string>
    ): Promise<Reply> {
        return this.command<Reply>({
            language: language,
            timezone: timezone,
            notify: notify,
            formats: formats,
            measurements: measurements,
            options: options,
        } as PaySelfPreferences);
    }
    //#endregion Commands - Self
}