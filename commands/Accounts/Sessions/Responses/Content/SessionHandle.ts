
/**
 * A container class used to house the "handle" identifying a <see cref="Session"/>.
 **/
export class SessionHandle {
	/**
	 * A "handle" identifying a resource.
	 **/
	handle: string;
	/**
	 * Identifier of the <see cref="Company"/> to which this object belongs
	 * <seealso cref="Company.id"/>
	 **/
	company: ulong;
	/**
	 * The <see cref="User"/> to which the <see cref="Session"/> belongs.
	 * <seealso cref="User.login" />
	 **/
	login: string;
	/**
	 * A timestamp for when the <see cref="Session"/> will expire.
	 **/
	expiry: Date;}