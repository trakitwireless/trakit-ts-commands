import { byte, DashcamMediaType, JsonObject, nothing } from "@trakit/objects";
import { IPayListByAsset } from "commands/API/Requests/IPayListByAsset";
import { ParamIdentifier } from "commands/API/Requests/Parameters/ParamIdentifier";
import { PayListByDate } from "commands/API/Requests/PayListByDate";
import { IPayDeletable } from "../../../API/Requests/IPayDeletable";
import { IPayListByCompany } from "../../../API/Requests/IPayListByCompany";
import { ParamId } from "../../../API/Requests/Parameters/ParamId";
import { Reply } from "../../../API/Responses/Reply";
import { RepDashcamListByAsset, RepDashcamListByCompany, RepDashcamListByProvider, RepDashcamLiveListByAsset, RepDashcamLiveListByCompany, RepDashcamLiveListByProvider } from "../Responses/RepDashcamList";

/**
 * Gets details of the specified {@link dashcam}.
 **/
export abstract class PayDashcamList extends PayListByDate implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link Dashcam}s.
	 **/
	includeDeleted: boolean;
	/**
	 * The type of dashcam data to include.
	 */
	kind: DashcamMediaType | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
		this.kind = DashcamMediaType[json?.kind as DashcamMediaType];
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayDashcamListByCompany extends PayDashcamList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepDashcamListByCompany(json as JsonObject);
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayDashcamListByAsset extends PayDashcamList implements IPayListByAsset {
	/**
	 * Identifier of the {@link Asset} to which this collection belongs.
	 **/
	asset: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.asset = new ParamId(json?.asset as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepDashcamListByAsset(json as JsonObject);
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayDashcamListByProvider extends PayDashcamList {
	/**
	 * Identifier of the {@link Provider} to which this collection belongs.
	 **/
	provider: ParamIdentifier;

	constructor(json?: JsonObject) {
		super(json);
		this.provider = new ParamIdentifier(json?.provider as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepDashcamListByProvider(json as JsonObject);
	}
}

/**
 * Gets details of the specified {@link dashcam}.
 **/
export abstract class PayDashcamLiveList extends PayListByDate implements IPayDeletable {
	/**
	 * When true, the command will also return  deleted {@link DashcamLive}s.
	 **/
	includeDeleted: boolean;
	/**
	 * Number assigned to the camera that took the image/video.
	 */
	camera: byte | nothing;

	constructor(json?: JsonObject) {
		super(json);
		this.includeDeleted = !!json?.includeDeleted;
		this.camera = json?.camera as byte;
	}
}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayDashcamLiveListByCompany extends PayDashcamLiveList implements IPayListByCompany {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.company = new ParamId(json?.company as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepDashcamLiveListByCompany(json as JsonObject);
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayDashcamLiveListByAsset extends PayDashcamLiveList implements IPayListByAsset {
	/**
	 * Identifier of the {@link Asset} to which this collection belongs.
	 **/
	asset: ParamId;

	constructor(json?: JsonObject) {
		super(json);
		this.asset = new ParamId(json?.asset as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepDashcamLiveListByAsset(json as JsonObject);
	}
}
/**
 * Contains the {@link Company.id} of the collection.
 **/
export class PayDashcamLiveListByProvider extends PayDashcamLiveList {
	/**
	 * Identifier of the {@link Provider} to which this collection belongs.
	 **/
	provider: ParamIdentifier;

	constructor(json?: JsonObject) {
		super(json);
		this.provider = new ParamIdentifier(json?.provider as JsonObject);
	}

	override createReply(json: JsonObject): Reply {
		return new RepDashcamLiveListByProvider(json as JsonObject);
	}
}