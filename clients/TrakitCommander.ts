import { Machine } from '@objects/Accounts/Machine';
import { guid, url } from '@objects/API/Types';
import { RepSelfGet } from 'commands/Accounts/Self/Responses/RepSelfGet';
import { Payload } from 'commands/API/Requests/Payload';
import { Reply } from 'commands/API/Responses/Reply';

/**
 * The base class used to help define interaction with all Trak-iT API services.
 */
export abstract class TrakitCommander {
    /**
     * {@link url} of the underlying Trak-iT API service.
     */
    baseAddress!: url;
    /**
     * Additional (optional) values added to the query-string of the connection request.
     */
    readonly query = new Map<string, string>();
    /**
     * Additional (optional) HTTP headers added to the connection request.
     */
    readonly headers = new Map<string, string>();

    /**
     * Returns the {@link baseAddress} with the appropriate path, query values.
     * @param path  Optional path to append to the base address.
     * @returns     The constructed URL string.
     */
    protected createBaseUrl(path: string | null = null): URL {
        const endpoint = new URL(path ?? "", this.baseAddress);
        for (let [key, value] of this.query) {
            endpoint.searchParams.append(key, value);
        }
        return endpoint;
    }

    constructor(baseAddress?: url | null) {
        this.baseAddress = baseAddress || "";
    }

    //#region Authorization
    // saved API credentials when using a service account
    #machine?: Machine | null;
    // saved session identifier when using a user account
    #sessionId?: guid | null;
    /**
     * Unsets the authentication mechanism so that requests are sent without any.
     */
    setAuth(): void
    /**
     * Saves the authentication mechanism as a {@link Machine}.
     * @param machine          The machine to use for authentication.
     */
    setAuth(machine?: Machine | null): void
    /**
     * Saves the authentication mechanism as a session id.
     * @param sessionId         The session id to use for authentication.
     */
    setAuth(sessionId?: guid | null): void
    /**
     * Saves the authentication mechanism as a session id.
     * @param account         The {@link RepSelfGet} object from a login, or "get self details" response.
     */
    setAuth(account?: RepSelfGet | null): void
    /**
     * Sets the authentication mechanism using either a session id or a Machine object.
     * @param value  The session id (string), {@link Machine} object, or {@link RepSelfGet} object.
     */
    setAuth(value?: any | null): void {
        this.#machine = null;
        this.#sessionId = null;
        if (typeof value === "string") {
            this.#sessionId = value;
        } else if (value instanceof Machine) {
            this.#machine = value;
        } else if (value?.key) {
            this.setAuth(new Machine(value));
        } else if (value?.machine?.key) {
            this.setAuth(value.machine);
        } else if (value?.ghostId) {
            this.setAuth(value.ghostId);
        }
    }
    //#endregion Authorization

    /**
     * Sends a command to the underlying service, and returns a Promise that completes when a reply is received.
     * @param payload   The payload to send to the service.
     * @returns         A promise that resolves with the reply.
     */
    abstract command<TReply extends Reply>(payload: Payload): Promise<TReply>;
}