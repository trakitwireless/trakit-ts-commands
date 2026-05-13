import { codified, email, guid, JsonObject, Session, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentLoginCompany } from "../../../API/Responses/Content/ContentLoginCompany";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link sessions}.
 */
export declare abstract class RepSessionList extends ReplySyncList<Session> {
    /**
     * The list of requested {@link Session}.
     */
    sessions: Session[];
    constructor(json: JsonObject);
    getList(): Session[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepSessionListByCompany extends RepSessionList {
    /**
     * An object to contain the "id" of the {@link Company} to which the array of {@link Session}s belong.
     */
    company: ContentId;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Session], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * Contains the {@link User.login} of the collection.
 */
export declare class RepSessionListByUser extends RepSessionList {
    /**
     * An object to contain the "login" of the {@link User} to which the array of {@link Session}s belong.
     */
    user: ContentLoginCompany;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Session], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepSessionList.d.ts.map