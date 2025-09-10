
/**
 * A container for the key of the {@link Machine} requested/created.
 **/
export class ContentKey {
	/**
	 * The {@link Machine}'s key.
	 **/
	key: string;

	constructor(json: any) {
		this.key = json?.key ?? "";
	}
}