
/**
 * The possible errors returned by the system.
 **/
export enum ErrorCode {
	/**
	 * Success!
	 * Operation completed without error.
	 **/
	success = 0,

	//#region Accounts
	/**
	 * {@link User}'s session is expired or unknown.
	 **/
	sessionExpired = 7,
	/**
	 * Please login before all other operations.
	 **/
	userNotLoggedIn = 8,
	/**
	 * {@link User}'s session was forcibly killed by another user, or by {@link SessionPolicy}'s rules.
	 **/
	sessionKilled = 9,
	/**
	 * The session has ended.
	 **/
	loggedOut = 10,
	/**
	 * Invalid credentials.
	 **/
	invalidCredentials = 11,
	/**
	 * The given client UserAgent is not allowed.
	 **/
	applicationNotAllowed = 12,
	/**
	 * IPAddress not allowed.
	 * IP restrictions are in place, and the client IP is not in the allowed list.
	 **/
	ipNotAllowed = 13,
	/**
	 * Session is active from another client, and the {@link SessionPolicy}'s rules are set to {@link MultiUserPolicy.deny}.
	 **/
	multiUserDenied = 14,
	/**
	 * Password doesn't comply with the password policy.
	 * See the {@link PasswordPolicy} for a reason as to why your password does not meet the criteria.
	 **/
	noncompliantPassword = 15,
	/**
	 * Your password has expired.  Please change your password.
	 * An expired password does not mean your session has expired.
	 * If you create a new session, it will ask you to update your password again.
	 **/
	passwordExpired = 16,
	/**
	 * When changing a password, it must not be the same as the previous password.
	 **/
	samePassword = 17,
	/**
	 * Session not found.
	 **/
	sessionNotFound = 19,
	/**
	 * {@link UserGroup} not found.
	 **/
	userGroupNotFound = 30,
	/**
	 * {@link User} not found.
	 **/
	userNotFound = 54,
	/**
	 * {@link User} not deleted.
	 **/
	userNotDeleted = 55,
	/**
	 * Cannot kill your own Session, or delete/disable your own {@link User}.
	 **/
	suicide = 57,
	/**
	 * One or more {@link UserGroup}s in the list not found.
	 **/
	userGroupsListNotFound = 60,
	/**
	 * {@link UserGroup} currently in use by one or more {@link User}s.
	 * In order to delete a {@link UserGroup}, all {@link User}s must first be removed as members.
	 **/
	userGroupInUse = 65,
	/**
	 * {@link UserGroup} not deleted.
	 **/
	userGroupNotDeleted = 66,
	/**
	 * Unable to perform operation because resulting {@link UserPermission}s would be greater than your own.
	 **/
	permissionEscalation = 71,
	/**
	 * A {@link User} with this login already exists.
	 **/
	userAlreadyExists = 72,
	/**
	 * Session or connection not allowed due to flooding.
	 **/
	sessionThrottled = 73,
	/**
	 * One or more {@link User}s in the list not found.
	 **/
	usersListNotFound = 74,
	/**
	 * {@link User} has been disabled.
	 **/
	userDisabled = 85,
	/**
	 * {@link Machine} not found.
	 **/
	machineNotFound = 127,
	/**
	 * {@link Machine} not deleted.
	 **/
	machineNotDeleted = 128,
	/**
	 * The {@link Machine} cannot access the requested API.
	 **/
	machineNotAllowed = 129,
	/**
	 * A client using a {@link Machine} is trying to access the system from an unknown URL.
	 **/
	referrerNotAllowed = 131,
	//#endregion Accounts

	//#region API Errors
	/**
	 * An unknown error, or some kind or error by the client.
	 **/
	unknown = 1,
	/**
	 * Service error not because of client input.
	 **/
	service = 2,
	/**
	 * Invalid data.
	 * Client input could not be properly parsed.
	 **/
	invalidData = 3,
	/**
	 * Permission denied.
	 * The operation not successful because access is restricted.
	 **/
	permissionDenied = 5,
	/**
	 * Version keys sent with request do not match service version.
	 * In these cases, treat the service version as most recent.
	 **/
	wrongVersionKey = 6,
	/**
	 * Unknown command.
	 **/
	unknownCommand = 61,
	/**
	 * {@link Timezone} not found.
	 **/
	timezoneNotFound = 62,
	/**
	 * Command not processed due to flooding.
	 **/
	commandThrottled = 105,
	/**
	 * The long-running operation is queued, and will run when resources are ready.
	 **/
	operationPending = 108,
	/**
	 * The long-running operation is currently executing.
	 **/
	operationRunning = 109,
	/**
	 * The long-running operation has failed; see `message</c> and <c>errorDetails` for more information.
	 **/
	operationFailed = 110,
	/**
	 * The object or operation has not changed since the last request.
	 **/
	unchanged = 125,
	/**
	 * The collection has no content or the operation produced no results.
	 **/
	nothing = 126,
	/**
	 * Invalid operation.
	 * Due to either the request or the objects' state, the operation cannot be performed.
	 **/
	invalidOperation = 130,
	//#endregion API Errors

	//#region Assets
	/**
	 * {@link Asset} not found.
	 **/
	assetNotFound = 20,
	/**
	 * {@link Asset} not deleted.
	 **/
	assetNotDeleted = 21,
	/**
	 * One or more {@link Asset}s in the list not found.
	 **/
	assetsListNotFound = 22,
	/**
	 * {@link Message} not found.
	 **/
	assetMessageNotFound = 63,
	/**
	 * {@link Asset} suspended.
	 **/
	assetSuspended = 96,
	/**
	 * {@link Asset} not suspended.
	 **/
	assetNotSuspended = 97,
	/**
	 * {@link Message} not deleted.
	 **/
	assetMessageNotDeleted = 101,
	//#endregion Assets

	//#region Behaviours
	/**
	 * {@link BehaviourScript} not found.
	 **/
	behaviourScriptNotFound = 23,
	/**
	 * {@link BehaviourScript} not deleted.
	 **/
	behaviourScriptNotDeleted = 24,
	/**
	 * {@link BehaviourScript} currently implemented by one or more {@link Behaviour}s.
	 * In order to delete a {@link BehaviourScript}, all {@link Behaviour}s implementing the script must be deleted first.
	 **/
	behaviourScriptInUse = 25,
	/**
	 * {@link Behaviour} not found.
	 **/
	behaviourNotFound = 26,
	/**
	 * {@link Behaviour} not deleted.
	 **/
	behaviourNotDeleted = 27,
	//#endregion Behaviours

	//#region Billing
	/**
	 * {@link BillingProfile} not found.
	 **/
	billingProfileNotFound = 111,
	/**
	 * {@link BillingProfile} not deleted.
	 **/
	billingProfileNotDeleted = 112,
	/**
	 * {@link BillableHostingRule} not found.
	 **/
	hostingRuleNotFound = 113,
	/**
	 * {@link BillableHostingRule} not deleted.
	 **/
	hostingRuleNotDeleted = 114,
	/**
	 * {@link BillableHostingLicense} not found.
	 **/
	hostingLicenseNotFound = 117,
	/**
	 * {@link BillableHostingLicense} not deleted.
	 **/
	hostingLicenseNotDeleted = 118,
	/**
	 * {@link BillingReport} not found.
	 **/
	billingReportNotFound = 119,
	/**
	 * {@link BillingReport} not deleted.
	 **/
	billingReportNotDeleted = 120,
	//#endregion Billing

	//#region Companies and Contacts
	/**
	 * {@link Company} not found.
	 **/
	companyNotFound = 28,
	/**
	 * {@link Company} not deleted.
	 **/
	companyNotDeleted = 29,

	/**
	 * {@link CompanyReseller} not found.
	 **/
	resellerNotFound = 106,
	/**
	 * {@link CompanyReseller} not deleted.
	 **/
	resellerNotDeleted = 107,

	/**
	 * {@link Contact} not found.
	 **/
	contactNotFound = 31,
	/**
	 * {@link Contact} not deleted.
	 **/
	contactNotDeleted = 32,
	/**
	 * {@link Contact} currently in use by one or more {@link User}s and/or {@link Asset}s.
	 * In order to delete a {@link Contact}, all {@link User}s/{@link Asset}s must first be altered or deleted.
	 **/
	contactInUse = 121,
	//#endregion Companies and Contacts

	//#region Dispatch
	/**
	 * One or more {@link DispatchJob}s in the list not found.
	 **/
	dispatchJobsListNotFound = 141,
	/**
	 * {@link DispatchTask} not found.
	 **/
	dispatchTaskNotFound = 64,
	/**
	 * There was an error retrieving the address' coordinates.
	 * Check the `errorDetails` for more information.
	 **/
	geocoderError = 80,
	/**
	 * No coordinates could be found for the given address.
	 * Ensure the address is correct, or try again without postal code.
	 **/
	geocoderNotFound = 81,
	/**
	 * There was an error calculating the directions or too many stops were given.
	 * Check the `errorDetails` for more information.
	 **/
	directionsError = 82,
	/**
	 * Directions could not be calculated between two or more stops.
	 * Ensure the each stop is correct, or try a shorter route.
	 **/
	directionsNotFound = 83,
	/**
	 * {@link DispatchTask} not deleted.
	 **/
	dispatchTaskNotDeleted = 100,
	/**
	 * {@link DispatchTemplate} not found.
	 **/
	dispatchTemplateNotFound = 137,
	/**
	 * {@link DispatchTemplate} not deleted.
	 **/
	dispatchTemplateNotDeleted = 138,
	/**
	 * {@link DispatchJob} not found.
	 **/
	dispatchJobNotFound = 139,
	/**
	 * {@link DispatchJob} not deleted.
	 **/
	dispatchJobNotDeleted = 140,
	//#endregion Dispatch

	//#region File Hosting
	/**
	 * {@link Icon} not found.
	 **/
	iconNotFound = 33,
	/**
	 * {@link Icon} not deleted.
	 **/
	iconNotDeleted = 34,
	/**
	 * {@link Picture} not found.
	 **/
	pictureNotFound = 68,
	/**
	 * One or more {@link Picture}s in the list not found.
	 **/
	picturesListNotFound = 69,
	/**
	 * {@link Picture} not deleted.
	 **/
	pictureNotDeleted = 70,
	/**
	 * Unsupported MIME type.
	 **/
	invalidMime = 90,
	/**
	 * File is too large.
	 **/
	filesizeExceeded = 91,
	/**
	 * {@link Document} not found.
	 **/
	documentNotFound = 122,
	/**
	 * {@link Document} not deleted.
	 **/
	documentNotDeleted = 123,
	/**
	 * One or more {@link Document}s in the list not found.
	 **/
	documentsListNotFound = 124,
	/**
	 * {@link FormTemplate} not found.
	 **/
	formTemplateNotFound = 132,
	/**
	 * {@link FormTemplate} not deleted.
	 **/
	formTemplateNotDeleted = 133,
	/**
	 * {@link FormResult} not found.
	 **/
	formResultNotFound = 134,
	/**
	 * {@link FormResult} not deleted.
	 **/
	formResultNotDeleted = 135,
	/**
	 * One or more {@link FormResult}s in the list not found.
	 **/
	formResultsListNotFound = 136,
	/**
	 * {@link FormTemplate} currently in use by one or more {@link FormResult}s.
	 * In order to delete a {@link FormTemplate}, all {@link FormResult}s must first be expired or deleted.
	 **/
	formTemplateInUse = 142,
	//#endregion File Hosting

	//#region Maintenance
	/**
	 * {@link MaintenanceJob} not found.
	 **/
	maintenanceJobNotFound = 35,
	/**
	 * {@link MaintenanceJob} not deleted.
	 **/
	maintenanceJobNotDeleted = 36,
	/**
	 * {@link MaintenanceSchedule} not found.
	 **/
	maintenanceScheduleNotFound = 37,
	/**
	 * {@link MaintenanceSchedule} not deleted.
	 **/
	maintenanceScheduleNotDeleted = 38,
	//#endregion Maintenance

	//#region Places
	/**
	 * {@link Place} not found.
	 **/
	placeNotFound = 40,
	/**
	 * {@link Place} not deleted.
	 **/
	placeNotDeleted = 41,
	/**
	 * One or more {@link Place}s in the list not found.
	 **/
	placesListNotFound = 42,
	//#endregion Places

	//#region Providers and Configurations
	/**
	 * {@link Provider} not found.
	 **/
	providerNotFound = 43,
	/**
	 * {@link Provider} not deleted.
	 **/
	providerNotDeleted = 44,
	/**
	 * One or more {@link Provider}s in the list not found.
	 **/
	providersListNotFound = 45,
	/**
	 * {@link ProviderConfigurationType} not found.
	 **/
	providerConfigurationTypeNotFound = 47,
	/**
	 * {@link ProviderConfig} or {@link ProviderConfiguration} not found.
	 **/
	providerConfigurationNotFound = 48,
	/**
	 * {@link ProviderConfig} or {@link ProviderConfiguration} not deleted.
	 **/
	providerConfigurationNotDeleted = 49,
	/**
	 * {@link ProviderConfig} or {@link ProviderConfiguration} currently in use by one or more {@link Provider}s.
	 * In order to delete a {@link ProviderConfig}/{@link ProviderConfiguration}, all {@link Provider}s using the configuration must be deleted first, or have their configuration changed.
	 **/
	providerConfigurationInUse = 50,
	/**
	 * Invalid {@link ProviderConfiguration} options.
	 **/
	invalidConfigurationOptions = 51,
	/**
	 * Trying to remove an expired or completed {@link ProviderRegistration}.
	 **/
	invalidRegistration = 86,
	/**
	 * {@link ProviderRegistration} timeout has elapsed.
	 * @ignore
	 **/
	verifyTimeout = 89,
	/**
	 * {@link Provider} suspended.
	 **/
	providerSuspended = 98,
	/**
	 * {@link Provider} not suspended.
	 **/
	providerNotSuspended = 99,
	/**
	 * {@link ProviderScript} not found.
	 **/
	providerScriptNotFound = 102,
	/**
	 * {@link ProviderScript} not deleted.
	 **/
	providerScriptNotDeleted = 103,
	/**
	 * {@link ProviderScript} currently in use by one or more {@link ProviderConfig}s.
	 * In order to delete a {@link ProviderScript}, all {@link ProviderConfig}s must first be deleted.
	 **/
	providerScriptInUse = 104,
	//#endregion Providers and Configurations

	//#region Reports
	/**
	 * {@link ReportTemplate} not found.
	 **/
	reportTemplateNotFound = 52,
	/**
	 * {@link ReportTemplate} not deleted.
	 **/
	reportTemplateNotDeleted = 53,
	/**
	 * {@link ReportResult} not found.
	 **/
	reportResultNotFound = 67,
	/**
	 * {@link ReportResult} not deleted.
	 **/
	reportResultNotDeleted = 75,
	/**
	 * {@link ReportSchedule} not found.
	 **/
	reportScheduleNotFound = 93,
	/**
	 * {@link ReportSchedule} not deleted.
	 **/
	reportScheduleNotDeleted = 94,

	/**
	 * {@link ReportResult} not ready to serve {@link ReportDataSummaryInstance} or {@link ReportDataBreakdownInstance} data.
	 **/
	reportResultNotReady = 95,
	//#endregion Reports
}