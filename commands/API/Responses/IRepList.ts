import { Component } from "trakit-ts-objects";
/**
 * Interface for responses that return a list or loaded objects.
 **/
export interface IRepTComponent<TComponent extends Component> {
	/**
	 * The collection of objects.
	 **/
	GetCollection(): TComponent[];
}