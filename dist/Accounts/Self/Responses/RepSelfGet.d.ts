import { codified, CompanyPolicy, Contact, email, guid, IRequestable, ISerializable, JsonObject, Machine, nothing, ulong, User, UserGroup } from "@trakit/objects";
import { ReplySync } from "../../../API/Responses/ReplySync";
/**
 * A container for the {@link User} or {@link Machine} of the current session.
 */
export declare class RepSelfGet extends ReplySync {
    #private;
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
    get userLogin(): string | undefined;
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
    get machineKey(): string | undefined;
    /**
     * The {@link UserGroup}s that the current session's {@link User} or {@link Machine} belongs to.
     */
    groups: UserGroup[];
    /**
     * The {@link CompanyPolicy} which apply to this {@link User}.
     */
    policy: CompanyPolicy | nothing;
    constructor(json?: JsonObject);
    toJSON(): JsonObject;
    getCompanyId(): ulong;
    store(): boolean;
    _storePart(map: Map<ulong | guid | email | codified | string, IRequestable>, obj: IRequestable & ISerializable): boolean;
    _storePolicy(): boolean;
}
//# sourceMappingURL=RepSelfGet.d.ts.map