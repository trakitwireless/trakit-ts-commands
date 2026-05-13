import { codified, Dashcam, DashcamLive, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ContentIdendifierCompany } from "../../../API/Responses/Content/ContentIdendifierCompany";
import { Reply } from "../../../API/Responses/Reply";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";
/**
 * A container for the requested {@link dashcams}.
 */
export declare abstract class RepDashcamList extends ReplySyncList<Dashcam> {
    /**
     * The list of requested {@link Dashcam}s.
     */
    dashcams: Dashcam[] | nothing;
    constructor(json: JsonObject);
    getList(): Dashcam[];
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepDashcamListByCompany extends RepDashcamList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Dashcam], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepDashcamListByAsset extends RepDashcamList {
    /**
     * Identifier of the {@link Asset} to which this collection belongs.
     */
    asset: ContentIdCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Dashcam], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepDashcamListByProvider extends RepDashcamList {
    /**
     * Identifier of the {@link Provider} to which this collection belongs.
     */
    provider: ContentIdendifierCompany | nothing;
    constructor(json: JsonObject);
    _filterCollection(pair: [ulong | guid | email | codified | string, Dashcam], index: number): boolean;
    getCompanyId(): ulong;
}
/**
 * A container for the requested {@link dashcams}.
 */
export declare abstract class RepDashcamLiveList extends Reply {
    /**
     * The list of requested {@link Dashcam}s.
     */
    dashcams: DashcamLive[] | nothing;
    constructor(json: JsonObject);
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepDashcamLiveListByCompany extends RepDashcamLiveList {
    /**
     * Identifier of the {@link Company} to which this collection belongs.
     */
    company: ContentId | nothing;
    constructor(json: JsonObject);
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepDashcamLiveListByAsset extends RepDashcamLiveList {
    /**
     * Identifier of the {@link Asset} to which this collection belongs.
     */
    asset: ContentIdCompany | nothing;
    constructor(json: JsonObject);
}
/**
 * Contains the {@link Company.id} of the collection.
 */
export declare class RepDashcamLiveListByProvider extends RepDashcamLiveList {
    /**
     * Identifier of the {@link Provider} to which this collection belongs.
     */
    provider: ContentIdendifierCompany | nothing;
    constructor(json: JsonObject);
}
//# sourceMappingURL=RepDashcamList.d.ts.map