import { codified, email, guid, JsonObject, Machine, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link machines}.
 */
export declare abstract class RepMachineList extends ReplySyncList<Machine> {
    /**
     * The list of requested {@link Machine}s.
     */
    machines: Machine[] | nothing;
    constructor(json: JsonObject);
    getList(): Machine[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepMachineListByCompany extends RepMachineList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Machine], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * Contains the {@link UserGroup.id} of the collection.
 */
export declare class RepMachineListByUserGroup extends RepMachineList {
    /**
     * Identifier of the {@link UserGroup} to which this collection belongs.
     */
    userGroup: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Machine], index: number): boolean;
    getCompanyId(): ulong;
}
//# sourceMappingURL=RepMachineList.d.ts.map