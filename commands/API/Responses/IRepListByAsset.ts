import { ContentId } from "./Content/ContentId";

/**
 * Interface for responses that return a list by asset.
 **/
export interface IRepListByAsset {
	/**
	 * The asset to filter the list by.
	 **/
	asset: ContentId;
}