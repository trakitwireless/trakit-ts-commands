import { Reply } from "../../../API/Responses/Reply";
import { RepDashcamList } from "./RepDashcamList";

/**
 * A container for the requested {@link dashcams}.
 **/
export abstract class RepDashcamList extends Reply {
	/**
	 * The list of requested {@link Dashcam}s.
	 **/
	dashcams: Dashcam[];
	}

/**
 * Contains the {@link Company.id} of the collection.
 **/
export class RepDashcamListByCompany extends RepDashcamList {
	/**
	 * Identifier of the {@link Company} to which this collection belongs.
	 **/
	company: ContentId;}