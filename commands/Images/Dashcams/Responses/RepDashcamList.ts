import { codified, Dashcam, DashcamLive, email, guid, JsonObject, nothing, ulong } from "@trakit/objects";
import { ContentId } from "../../../API/Responses/Content/ContentId";
import { ContentIdCompany } from "../../../API/Responses/Content/ContentIdCompany";
import { ContentIdendifierCompany } from "../../../API/Responses/Content/ContentIdendifierCompany";
import { Reply } from "../../../API/Responses/Reply";
import { ReplySyncList } from "../../../API/Responses/ReplySyncList";

/**
 * A container for the requested {@link dashcams}.
 **/
export abstract class RepDashcamList extends ReplySyncList<Dashcam> {
	/**
	 * The list of requested {@link Dashcam}s.
	 **/
	dashcams: Dashcam[] | nothing;

	constructor(json: JsonObject) {
		super(json, "Dashcam");
		this.dashcams = (json?.dashcams as JsonObject[])?.map((d: any) => new Dashcam(d));
	}
	override getCollection() { return this.dashcams as Dashcam[]; }
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepDashcamListByCompany extends RepDashcamList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, Dashcam], index: number): boolean {
		return pair[1].companyId === (this.company as ContentId).id;
	}
	override getCompanyId() { return this.company?.id as ulong; }
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepDashcamListByAsset extends RepDashcamList {
	/**
	 * Identifier of the {@link Asset} to which this collection belongs.
	 **/
	asset: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.asset = ContentIdCompany.fromJSON(json?.asset as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, Dashcam], index: number): boolean {
		return pair[1].assetId === (this.asset as ContentIdCompany).id;
	}
	override getCompanyId() { return this.asset?.company as ulong; }
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepDashcamListByProvider extends RepDashcamList {
	/**
	 * Identifier of the {@link Provider} to which this collection belongs.
	 **/
	provider: ContentIdendifierCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.provider = ContentIdendifierCompany.fromJSON(json?.provider as JsonObject);
	}
	override _filterCollection(pair: [ulong | guid | email | codified | string, Dashcam], index: number): boolean {
		return pair[1].providerId === (this.provider as ContentIdendifierCompany).id;
	}
	override getCompanyId() { return this.provider?.company as ulong; }
}

/**
 * A container for the requested {@link dashcams}.
 **/
export abstract class RepDashcamLiveList extends Reply {
	/**
	 * The list of requested {@link Dashcam}s.
	 **/
	dashcams: DashcamLive[] | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.dashcams = (json?.dashcams as JsonObject[])?.map((d: any) => new DashcamLive(d));
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepDashcamLiveListByCompany extends RepDashcamLiveList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.company = ContentId.fromJSON(json?.company as JsonObject);
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepDashcamLiveListByAsset extends RepDashcamLiveList {
	/**
	 * Identifier of the {@link Asset} to which this collection belongs.
	 **/
	asset: ContentIdCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.asset = ContentIdCompany.fromJSON(json?.asset as JsonObject);
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepDashcamLiveListByProvider extends RepDashcamLiveList {
	/**
	 * Identifier of the {@link Provider} to which this collection belongs.
	 **/
	provider: ContentIdendifierCompany | nothing;

	constructor(json: JsonObject) {
		super(json);
		this.provider = ContentIdendifierCompany.fromJSON(json?.provider as JsonObject);
	}
}