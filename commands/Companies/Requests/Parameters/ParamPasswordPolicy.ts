

	/// <summary>
	/// Parameter values for creating a new or updating an existing <see cref="PasswordPolicy"/>.
	/// </summary>
	export class ParamPasswordPolicy extends ParamMerge {
		/// <summary>
		/// The minimum number of characters required.
		/// </summary>
		public minimumLength?: byte;
		/// <summary>
		/// Do passwords require alphabetical characters.
		/// </summary>
		public includeLetters?: boolean;
		/// <summary>
		/// Do passwords require numeric characters.
		/// </summary>
		public includeNumbers?: boolean;
		/// <summary>
		/// Do passwords require upper-case and lower-case letters.
		/// </summary>
		public includeUpperLower?: boolean;
		/// <summary>
		/// Do passwords require non-alphanumeric characters.
		/// </summary>
		public includeSpecial?: boolean;
		/// <summary>
		/// Defines how passwords expire.
		/// </summary>
		public expireMode?: PasswordExpiryMode;
		/// <summary>
		/// The threshold for expiry (in days).
		/// </summary>
		public expireThreshold?: byte;  
	}