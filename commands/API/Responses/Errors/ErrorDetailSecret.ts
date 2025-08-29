import { long } from "@trakit/objects";
import { ErrorDetail } from "./ErrorDetail";
import { ErrorDetailType } from "./ErrorDetailType";

/**
 * Details about why the request failed an authentication process when a {@link Machine.secret} is used.
 * <remarks>
 * Only available for {@link Machine} accounts using the beta services.
 * </remarks>
 **/
export class ErrorDetailSecret extends ErrorDetail {
	override get kind() { return ErrorDetailType.secret; }
	/**
	 * A listing of all the request headers as given.
	 **/
	headers!: Map<string, string[]>;
	/**
	 * The time of the server from when the HTTP request was accepted.
	 **/
	accepted!: Date;

	/**
	 * The unique identifier given for the {@link Machine} to access the system.
	 **/
	key!: string;
	/**
	 * The signature calculated for this request based on all the inputs.
	 **/
	signature!: string;
	/**
	 * The parsed Date header timestamp.
	 **/
	date!: string;
	/**
	 * The parsed {@link HttpMethod} (should be upper-case).
	 **/
	method!: string;
	/**
	 * Sanitized absolute URL of the request including query-string and fragment, but with any session or api-keys stripped out.
	 **/
	uri!: string;
	/**
	 * The length of the content body (or the Content-Length header value).
	 **/
	length!: long | undefined;

	/**
	 * The input for creating a signature.
	 **/
	input!: string;
	/**
	 * The signature expected.
	 **/
	output!: string;
}