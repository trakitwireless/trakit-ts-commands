
/**
 * The possible errors returned by the system.
 **/
export enum ErrorCode {
	/**
	 * Success!
	 * Operation completed without error.
	 **/
	success = 0,
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
	 * Not a valid {@link PermissionType}.
	 * @deprecated
	 **/
	invalidPermission = 4,
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
	 * {@link User}'s session is expired or unknown.
	 * @summary Users and Groups
	 **/
	sessionExpired = 7,
	/**
	 * Please login before all other operations.
	 * @summary Users and Groups
	 **/
	userNotLoggedIn = 8,
	/**
	 * {@link User}'s session was forcibly killed by another user, or by {@link SessionPolicy}'s rules.
	 * @summary Users and Groups
	 **/
	sessionKilled = 9,
	/**
	 * The session has ended.
	 * @summary Users and Groups
	 **/
	loggedOut = 10,
	/**
	 * Invalid credentials.
	 * @summary Users and Groups
	 **/
	invalidCredentials = 11,
	/**
	 * The given client UserAgent is not allowed.
	 * @summary Users and Groups
	 **/
	applicationNotAllowed = 12,
	/**
	 * IPAddress not allowed.
	 * IP restrictions are in place, and the client IP is not in the allowed list.
	 * @summary Users and Groups
	 **/
	ipNotAllowed = 13,
	/**
	 * Session is active from another client, and the {@link SessionPolicy}'s rules are set to {@link MultiUserPolicy.deny}.
	 * @summary Users and Groups
	 **/
	multiUserDenied = 14,
	/**
	 * Password doesn't comply with the password policy.
	 * See the {@link PasswordPolicy} for a reason as to why your password does not meet the criteria.
	 * @summary Users and Groups
	 **/
	noncompliantPassword = 15,
	/**
	 * Your password has expired.  Please change your password.
	 * An expired password does not mean your session has expired.
	 * If you create a new session, it will ask you to update your password again.
	 * @summary Users and Groups
	 **/
	passwordExpired = 16,
	/**
	 * When changing a password, it must not be the same as the previous password.
	 * @summary Users and Groups
	 **/
	samePassword = 17,
	/**
	 * Unable to Kill the session.
	 * @deprecated
	 * @summary Users and Groups
	 **/
	killSessionFailed = 18,
	/**
	 * Session not found.
	 * @summary Users and Groups
	 **/
	sessionNotFound = 19,
	/**
	 * {@link Asset} not found.
	 * @summary Assets
	 **/
	assetNotFound = 20,
	/**
	 * {@link Asset} not deleted.
	 * @summary Assets
	 **/
	assetNotDeleted = 21,
	/**
	 * One or more {@link Asset}s in the list not found.
	 * @summary Assets
	 **/
	assetsListNotFound = 22,
	/**
	 * {@link BehaviourScript} not found.
	 * @summary Behaviours
	 **/
	behaviourScriptNotFound = 23,
	/**
	 * {@link BehaviourScript} not deleted.
	 * @summary Behaviours
	 **/
	behaviourScriptNotDeleted = 24,
	/**
	 * {@link BehaviourScript} currently implemented by one or more {@link Behaviour}s.
	 * In order to delete a {@link BehaviourScript}, all {@link Behaviour}s implementing the script must be deleted first.
	 * @summary Behaviours
	 **/
	behaviourScriptInUse = 25,
	/**
	 * {@link Behaviour} not found.
	 * @summary Behaviours
	 **/
	behaviourNotFound = 26,
	/**
	 * {@link Behaviour} not deleted.
	 * @summary Behaviours
	 **/
	behaviourNotDeleted = 27,
	/**
	 * {@link Company} not found.
	 * @summary Companies
	 **/
	companyNotFound = 28,
	/**
	 * {@link Company} not deleted.
	 * @summary Companies
	 **/
	companyNotDeleted = 29,
	/**
	 * {@link UserGroup} not found.
	 * @summary Users and Groups
	 **/
	userGroupNotFound = 30,
	/**
	 * {@link Contact} not found.
	 * @summary Contacts
	 **/
	contactNotFound = 31,
	/**
	 * {@link Contact} not deleted.
	 * @summary Contacts
	 **/
	contactNotDeleted = 32,
	/**
	 * {@link Icon} not found.
	 * @summary File Hosting
	 **/
	iconNotFound = 33,
	/**
	 * {@link Icon} not deleted.
	 * @summary File Hosting
	 **/
	iconNotDeleted = 34,
	/**
	 * {@link MaintenanceJob} not found.
	 * @summary Maintenance
	 **/
	maintenanceJobNotFound = 35,
	/**
	 * {@link MaintenanceJob} not deleted.
	 * @summary Maintenance
	 **/
	maintenanceJobNotDeleted = 36,
	/**
	 * {@link MaintenanceSchedule} not found.
	 * @summary Maintenance
	 **/
	maintenanceScheduleNotFound = 37,
	/**
	 * {@link MaintenanceSchedule} not deleted.
	 * @summary Maintenance
	 **/
	maintenanceScheduleNotDeleted = 38,
	/**
	 * {@link MaintenanceSchedule} currently in use by one or more {@link MaintenanceJob}s.
	 * In order to delete a {@link MaintenanceSchedule}, all {@link MaintenanceJob}s referencing this schedule must be deleted first.
	 * @deprecated
	 * @summary Maintenance
	 **/
	maintenanceScheduleInUse = 39,
	/**
	 * {@link Place} not found.
	 * @summary Places
	 **/
	placeNotFound = 40,
	/**
	 * {@link Place} not deleted.
	 * @summary Places
	 **/
	placeNotDeleted = 41,
	/**
	 * One or more {@link Place}s in the list not found.
	 * @summary Places
	 **/
	placesListNotFound = 42,
	/**
	 * {@link Provider} not found.
	 * @summary Providers and Configurations
	 **/
	providerNotFound = 43,
	/**
	 * {@link Provider} not deleted.
	 * @summary Providers and Configurations
	 **/
	providerNotDeleted = 44,
	/**
	 * One or more {@link Provider}s in the list not found.
	 * @summary Providers and Configurations
	 **/
	providersListNotFound = 45,
	/**
	 * Cannot access deleted {@link Provider}.
	 * @deprecated Throws providerNotFound instead
	 * @summary Providers and Configurations
	 **/
	deletedProvider = 46,
	/**
	 * {@link ProviderConfigurationType} not found.
	 * @summary Providers and Configurations
	 **/
	providerConfigurationTypeNotFound = 47,
	/**
	 * {@link ProviderConfig} or {@link ProviderConfiguration} not found.
	 * @summary Providers and Configurations
	 **/
	providerConfigurationNotFound = 48,
	/**
	 * {@link ProviderConfig} or {@link ProviderConfiguration} not deleted.
	 * @summary Providers and Configurations
	 **/
	providerConfigurationNotDeleted = 49,
	/**
	 * {@link ProviderConfig} or {@link ProviderConfiguration} currently in use by one or more {@link Provider}s.
	 * In order to delete a {@link ProviderConfig}/{@link ProviderConfiguration}, all {@link Provider}s using the configuration must be deleted first, or have their configuration changed.
	 * @summary Providers and Configurations
	 **/
	providerConfigurationInUse = 50,
	/**
	 * Invalid {@link ProviderConfiguration} options.
	 * @summary Providers and Configurations
	 **/
	invalidConfigurationOptions = 51,
	/**
	 * {@link ReportTemplate} not found.
	 * @summary Reports
	 **/
	reportTemplateNotFound = 52,
	/**
	 * {@link ReportTemplate} not deleted.
	 * @summary Reports
	 **/
	reportTemplateNotDeleted = 53,
	/**
	 * {@link User} not found.
	 * @summary Users and Groups
	 **/
	userNotFound = 54,
	/**
	 * {@link User} not deleted.
	 * @summary Users and Groups
	 **/
	userNotDeleted = 55,
	/**
	 * Cannot access deleted {@link User}.
	 * @deprecated Throws userNotFound instead
	 * @summary Users and Groups
	 **/
	deletedUser = 56,
	/**
	 * @summary Users and Groups
	 * Cannot kill your own Session, or delete/disable your own {@link User}.
	 **/
	suicide = 57,
	/**
	 * {@link CompanyLabels.labels} codes must be unique.
	 * @deprecated
	 * @summary Companies
	 **/
	labelsListNotUnique = 58,
	/**
	 * {@link CompanyLabels.tags} codes must be unique.
	 * @deprecated
	 * @summary Companies
	 **/
	tagsListNotUnique = 59,
	/**
	 * One or more {@link UserGroup}s in the list not found.
	 * @summary Users and Groups
	 **/
	userGroupsListNotFound = 60,
	/**
	 * Unknown command.
	 **/
	unknownCommand = 61,
	/**
	 * {@link Timezone} not found.
	 **/
	timezoneNotFound = 62,
	/**
	 * {@link Message} not found.
	 * @summary Assets
	 **/
	assetMessageNotFound = 63,
	/**
	 * {@link DispatchTask} not found.
	 * @summary Dispatch
	 **/
	dispatchTaskNotFound = 64,
	/**
	 * {@link UserGroup} currently in use by one or more {@link User}s.
	 * In order to delete a {@link UserGroup}, all {@link User}s must first be removed as members.
	 * @summary Users and Groups
	 **/
	userGroupInUse = 65,
	/**
	 * {@link UserGroup} not deleted.
	 * @summary Users and Groups
	 **/
	userGroupNotDeleted = 66,
	/**
	 * {@link ReportResult} not found.
	 * @summary Reports
	 **/
	reportResultNotFound = 67,
	/**
	 * {@link Picture} not found.
	 * @summary File Hosting
	 **/
	pictureNotFound = 68,
	/**
	 * One or more {@link Picture}s in the list not found.
	 * @summary File Hosting
	 **/
	picturesListNotFound = 69,
	/**
	 * {@link Picture} not deleted.
	 * @summary File Hosting
	 **/
	pictureNotDeleted = 70,
	/**
	 * Unable to perform operation because resulting {@link UserPermission}s would be greater than your own.
	 * @summary Users and Groups
	 **/
	permissionEscalation = 71,
	/**
	 * A {@link User} with this login already exists.
	 * @summary Users and Groups
	 **/
	userAlreadyExists = 72,
	/**
	 * Session or connection not allowed due to flooding.
	 * @summary Users and Groups
	 **/
	sessionThrottled = 73,
	/**
	 * One or more {@link User}s in the list not found.
	 * @summary Users and Groups
	 **/
	usersListNotFound = 74,
	/**
	 * {@link ReportResult} not deleted.
	 * @summary Reports
	 **/
	reportResultNotDeleted = 75,
	/**
	 * There was an error retrieving the address' coordinates.
	 * Check the `errorDetails` for more information.
	 * @summary Dispatch
	 **/
	geocoderError = 80,
	/**
	 * No coordinates could be found for the given address.
	 * Ensure the address is correct, or try again without postal code.
	 * @summary Dispatch
	 **/
	geocoderNotFound = 81,
	/**
	 * There was an error calculating the directions or too many stops were given.
	 * Check the `errorDetails` for more information.
	 * @summary Dispatch
	 **/
	directionsError = 82,
	/**
	 * Directions could not be calculated between two or more stops.
	 * Ensure the each stop is correct, or try a shorter route.
	 * @summary Dispatch
	 **/
	directionsNotFound = 83,

	/**
	 * {@link User} has been disabled.
	 * @summary Users and Groups
	 **/
	userDisabled = 85,

	/**
	 * Trying to remove an expired or completed {@link ProviderRegistration}.
	 * @summary Providers and Configurations
	 **/
	invalidRegistration = 86,
	/**
	 * {@link ProviderRegistration} timeout has elapsed.
	 * @ignore
	 * @summary Providers and Configurations
	 **/
	verifyTimeout = 89,

	/**
	 * Unsupported MIME type.
	 * @summary File Hosting
	 **/
	invalidMime = 90,
	/**
	 * File is too large.
	 * @summary File Hosting
	 **/
	filesizeExceeded = 91,

	/**
	 * Unknown or invalid {@link ProviderType}.
	 * @deprecated Use invalidData instead
	 * @summary Providers and Configurations
	 **/
	invalidProviderType = 92,

	/**
	 * {@link ReportSchedule} not found.
	 * @summary Reports
	 **/
	reportScheduleNotFound = 93,
	/**
	 * {@link ReportSchedule} not deleted.
	 * @summary Reports
	 **/
	reportScheduleNotDeleted = 94,

	/**
	 * {@link ReportResult} not ready to serve {@link ReportDataSummaryInstance} or {@link ReportDataBreakdownInstance} data.
	 * @summary Reports
	 **/
	reportResultNotReady = 95,

	/**
	 * {@link Asset} suspended.
	 * @summary Assets
	 **/
	assetSuspended = 96,
	/**
	 * {@link Asset} not suspended.
	 * @summary Assets
	 **/
	assetNotSuspended = 97,

	/**
	 * {@link Provider} suspended.
	 * @summary Providers and Configurations
	 **/
	providerSuspended = 98,
	/**
	 * {@link Provider} not suspended.
	 * @summary Providers and Configurations
	 **/
	providerNotSuspended = 99,

	/**
	 * {@link DispatchTask} not deleted.
	 * @summary Dispatch
	 **/
	dispatchTaskNotDeleted = 100,
	/**
	 * {@link Message} not deleted.
	 * @summary Assets
	 **/
	assetMessageNotDeleted = 101,

	/**
	 * {@link ProviderScript} not found.
	 * @summary Providers and Configurations
	 **/
	providerScriptNotFound = 102,
	/**
	 * {@link ProviderScript} not deleted.
	 * @summary Providers and Configurations
	 **/
	providerScriptNotDeleted = 103,
	/**
	 * {@link ProviderScript} currently in use by one or more {@link ProviderConfig}s.
	 * In order to delete a {@link ProviderScript}, all {@link ProviderConfig}s must first be deleted.
	 * @summary Providers and Configurations
	 **/
	providerScriptInUse = 104,

	/**
	 * Command not processed due to flooding.
	 **/
	commandThrottled = 105,

	/**
	 * {@link CompanyReseller} not found.
	 * @summary White-labelling
	 **/
	resellerNotFound = 106,
	/**
	 * {@link CompanyReseller} not deleted.
	 * @summary White-labelling
	 **/
	resellerNotDeleted = 107,

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
	 * {@link BillingProfile} not found.
	 * @summary Billing
	 **/
	billingProfileNotFound = 111,
	/**
	 * {@link BillingProfile} not deleted.
	 * @summary Billing
	 **/
	billingProfileNotDeleted = 112,
	/**
	 * {@link BillableHostingRule} not found.
	 * @summary Billing
	 **/
	hostingRuleNotFound = 113,
	/**
	 * {@link BillableHostingRule} not deleted.
	 * @summary Billing
	 **/
	hostingRuleNotDeleted = 114,
	/**
	 * {@link BillableHostingLicense} not found.
	 * @summary Billing
	 **/
	hostingLicenseNotFound = 117,
	/**
	 * {@link BillableHostingLicense} not deleted.
	 * @summary Billing
	 **/
	hostingLicenseNotDeleted = 118,
	/**
	 * {@link BillingReport} not found.
	 * @summary Billing
	 **/
	billingReportNotFound = 119,
	/**
	 * {@link BillingReport} not deleted.
	 * @summary Billing
	 **/
	billingReportNotDeleted = 120,

	/**
	 * {@link Contact} currently in use by one or more {@link User}s and/or {@link Asset}s.
	 * In order to delete a {@link Contact}, all {@link User}s/{@link Asset}s must first be altered or deleted.
	 * @summary Contacts
	 **/
	contactInUse = 121,

	/**
	 * {@link Document} not found.
	 * @summary File Hosting
	 **/
	documentNotFound = 122,
	/**
	 * {@link Document} not deleted.
	 * @summary File Hosting
	 **/
	documentNotDeleted = 123,
	/**
	 * One or more {@link Document}s in the list not found.
	 * @summary File Hosting
	 **/
	documentsListNotFound = 124,

	/**
	 * The object or operation has not changed since the last request.
	 **/
	unchanged = 125,
	/**
	 * The collection has no content or the operation produced no results.
	 **/
	nothing = 126,

	/**
	 * {@link Machine} not found.
	 * @summary Users and Groups
	 **/
	machineNotFound = 127,
	/**
	 * {@link Machine} not deleted.
	 * @summary Users and Groups
	 **/
	machineNotDeleted = 128,
	/**
	 * The {@link Machine} cannot access the requested API.
	 * @summary Users and Groups
	 **/
	machineNotAllowed = 129,

	/**
	 * Invalid operation.
	 * Due to either the request or the objects' state, the operation cannot be performed.
	 **/
	invalidOperation = 130,

	/**
	 * A client using a {@link Machine} is trying to access the system from an unknown URL.
	 * @summary Users and Groups
	 **/
	referrerNotAllowed = 131,

	/**
	 * {@link FormTemplate} not found.
	 * @summary File Hosting
	 **/
	formTemplateNotFound = 132,
	/**
	 * {@link FormTemplate} not deleted.
	 * @summary File Hosting
	 **/
	formTemplateNotDeleted = 133,
	/**
	 * {@link FormResult} not found.
	 * @summary File Hosting
	 **/
	formResultNotFound = 134,
	/**
	 * {@link FormResult} not deleted.
	 * @summary File Hosting
	 **/
	formResultNotDeleted = 135,
	/**
	 * One or more {@link FormResult}s in the list not found.
	 * @summary File Hosting
	 **/
	formResultsListNotFound = 136,

	/**
	 * {@link DispatchTemplate} not found.
	 * @summary Dispatch
	 **/
	dispatchTemplateNotFound = 137,
	/**
	 * {@link DispatchTemplate} not deleted.
	 * @summary Dispatch
	 **/
	dispatchTemplateNotDeleted = 138,
	/**
	 * {@link DispatchJob} not found.
	 * @summary Dispatch
	 **/
	dispatchJobNotFound = 139,
	/**
	 * {@link DispatchJob} not deleted.
	 * @summary Dispatch
	 **/
	dispatchJobNotDeleted = 140,
	/**
	 * One or more {@link DispatchJob}s in the list not found.
	 * @summary File Hosting
	 **/
	dispatchJobsListNotFound = 141,

	/**
	 * {@link FormTemplate} currently in use by one or more {@link FormResult}s.
	 * In order to delete a {@link FormTemplate}, all {@link FormResult}s must first be expired or deleted.
	 * @summary File Hosting
	 **/
	formTemplateInUse = 142,
}