import { Reply } from "../../../API/Responses/Reply";
import { RepDashcamList } from "./RepDashcamList";

/**
 * A container for the requested <see cref="dashcams"/>.
 **/
export abstract class RepDashcamList extends Reply {
	/**
	 * The list of requested <see cref="Dashcam"/>s.
	 **/
	dashcams: Dashcam[];
	}

/**
 * Contains the <see cref="Company.id"/> of the collection.
 **/
export class RepDashcamListByCompany extends RepDashcamList {
	/**
	 * Identifier of the <see cref="Company"/> to which this collection belongs.
	 **/
	company: ContentId;}