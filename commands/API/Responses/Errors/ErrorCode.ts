
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
	unknown,
	/**
	 * Service error not because of client input.
	 **/
	service,
	/**
	 * Invalid data.
	 * Client input could not be properly parsed.
	 **/
	invalidData,
	/**
	 * Not a valid {@link PermissionType}.
	 * @deprecated
	 **/
	invalidPermission,
	/**
	 * Permission denied.
	 * The operation not successful because access is restricted.
	 **/
	permissionDenied,
	/**
	 * Version keys sent with request do not match service version.
	 * In these cases, treat the service version as most recent.
	 **/
	wrongVersionKey,
	/**
	 * {@link User}'s session is expired or unknown.
	 * @summary Users and Groups
	 **/
	sessionExpired,
	/**
	 * Please login before all other operations.
	 * @summary Users and Groups
	 **/
	userNotLoggedIn,
	/**
	 * {@link User}'s session was forcibly killed by another user, or by {@link SessionPolicy}'s rules.
	 * @summary Users and Groups
	 **/
	sessionKilled,
	/**
	 * The session has ended.
	 * @summary Users and Groups
	 **/
	loggedOut,
	/**
	 * Invalid credentials.
	 * @summary Users and Groups
	 **/
	invalidCredentials,
	/**
	 * The given client UserAgent is not allowed.
	 * @summary Users and Groups
	 **/
	applicationNotAllowed,
	/**
	 * IPAddress not allowed.
	 * IP restrictions are in place, and the client IP is not in the allowed list.
	 * @summary Users and Groups
	 **/
	ipNotAllowed,
	/**
	 * Session is active from another client, and the {@link SessionPolicy}'s rules are set to {@link MultiUserPolicy.deny}.
	 * @summary Users and Groups
	 **/
	multiUserDenied,
	/**
	 * Password doesn't comply with the password policy.
	 * See the {@link PasswordPolicy} for a reason as to why your password does not meet the criteria.
	 * @summary Users and Groups
	 **/
	noncompliantPassword,
	/**
	 * Your password has expired.  Please change your password.
	 * An expired password does not mean your session has expired.
	 * If you create a new session, it will ask you to update your password again.
	 * @summary Users and Groups
	 **/
	passwordExpired,
	/**
	 * When changing a password, it must not be the same as the previous password.
	 * @summary Users and Groups
	 **/
	samePassword,
	/**
	 * Unable to Kill the session.
	 * @deprecated
	 * @summary Users and Groups
	 **/
	killSessionFailed,
	/**
	 * Session not found.
	 * @summary Users and Groups
	 **/
	sessionNotFound,
	/**
	 * {@link Asset} not found.
	 * @summary Assets
	 **/
	assetNotFound,
	/**
	 * {@link Asset} not deleted.
	 * @summary Assets
	 **/
	assetNotDeleted,
	/**
	 * One or more {@link Asset}s in the list not found.
	 * @summary Assets
	 **/
	assetsListNotFound,
	/**
	 * {@link BehaviourScript} not found.
	 * @summary Behaviours
	 **/
	behaviourScriptNotFound,
	/**
	 * {@link BehaviourScript} not deleted.
	 * @summary Behaviours
	 **/
	behaviourScriptNotDeleted,
	/**
	 * {@link BehaviourScript} currently implemented by one or more {@link Behaviour}s.
	 * In order to delete a {@link BehaviourScript}, all {@link Behaviour}s implementing the script must be deleted first.
	 * @summary Behaviours
	 **/
	behaviourScriptInUse,
	/**
	 * {@link Behaviour} not found.
	 * @summary Behaviours
	 **/
	behaviourNotFound,
	/**
	 * {@link Behaviour} not deleted.
	 * @summary Behaviours
	 **/
	behaviourNotDeleted,
	/**
	 * {@link Company} not found.
	 * @summary Companies
	 **/
	companyNotFound,
	/**
	 * {@link Company} not deleted.
	 * @summary Companies
	 **/
	companyNotDeleted,
	/**
	 * {@link UserGroup} not found.
	 * @summary Users and Groups
	 **/
	userGroupNotFound,
	/**
	 * {@link Contact} not found.
	 * @summary Contacts
	 **/
	contactNotFound,
	/**
	 * {@link Contact} not deleted.
	 * @summary Contacts
	 **/
	contactNotDeleted,
	/**
	 * {@link Icon} not found.
	 * @summary File Hosting
	 **/
	iconNotFound,
	/**
	 * {@link Icon} not deleted.
	 * @summary File Hosting
	 **/
	iconNotDeleted,
	/**
	 * {@link MaintenanceJob} not found.
	 * @summary Maintenance
	 **/
	maintenanceJobNotFound,
	/**
	 * {@link MaintenanceJob} not deleted.
	 * @summary Maintenance
	 **/
	maintenanceJobNotDeleted,
	/**
	 * {@link MaintenanceSchedule} not found.
	 * @summary Maintenance
	 **/
	maintenanceScheduleNotFound,
	/**
	 * {@link MaintenanceSchedule} not deleted.
	 * @summary Maintenance
	 **/
	maintenanceScheduleNotDeleted,
	/**
	 * {@link MaintenanceSchedule} currently in use by one or more {@link MaintenanceJob}s.
	 * In order to delete a {@link MaintenanceSchedule}, all {@link MaintenanceJob}s referencing this schedule must be deleted first.
	 * @deprecated
	 * @summary Maintenance
	 **/
	maintenanceScheduleInUse,
	/**
	 * {@link Place} not found.
	 * @summary Places
	 **/
	placeNotFound,
	/**
	 * {@link Place} not deleted.
	 * @summary Places
	 **/
	placeNotDeleted,
	/**
	 * One or more {@link Place}s in the list not found.
	 * @summary Places
	 **/
	placesListNotFound,
	/**
	 * {@link Provider} not found.
	 * @summary Providers and Configurations
	 **/
	providerNotFound,
	/**
	 * {@link Provider} not deleted.
	 * @summary Providers and Configurations
	 **/
	providerNotDeleted,
	/**
	 * One or more {@link Provider}s in the list not found.
	 * @summary Providers and Configurations
	 **/
	providersListNotFound,
	/**
	 * Cannot access deleted {@link Provider}.
	 * @deprecated Throws providerNotFound instead
	 * @summary Providers and Configurations
	 **/
	deletedProvider,
	/**
	 * {@link ProviderConfigurationType} not found.
	 * @summary Providers and Configurations
	 **/
	providerConfigurationTypeNotFound,
	/**
	 * {@link ProviderConfig} or {@link ProviderConfiguration} not found.
	 * @summary Providers and Configurations
	 **/
	providerConfigurationNotFound,
	/**
	 * {@link ProviderConfig} or {@link ProviderConfiguration} not deleted.
	 * @summary Providers and Configurations
	 **/
	providerConfigurationNotDeleted,
	/**
	 * {@link ProviderConfig} or {@link ProviderConfiguration} currently in use by one or more {@link Provider}s.
	 * In order to delete a {@link ProviderConfig}/{@link ProviderConfiguration}, all {@link Provider}s using the configuration must be deleted first, or have their configuration changed.
	 * @summary Providers and Configurations
	 **/
	providerConfigurationInUse,
	/**
	 * Invalid {@link ProviderConfiguration} options.
	 * @summary Providers and Configurations
	 **/
	invalidConfigurationOptions,
	/**
	 * {@link ReportTemplate} not found.
	 * @summary Reports
	 **/
	reportTemplateNotFound,
	/**
	 * {@link ReportTemplate} not deleted.
	 * @summary Reports
	 **/
	reportTemplateNotDeleted,
	/**
	 * {@link User} not found.
	 * @summary Users and Groups
	 **/
	userNotFound,
	/**
	 * {@link User} not deleted.
	 * @summary Users and Groups
	 **/
	userNotDeleted,
	/**
	 * Cannot access deleted {@link User}.
	 * @deprecated Throws userNotFound instead
	 * @summary Users and Groups
	 **/
	deletedUser,
	/**
	 * @summary Users and Groups
	 * Cannot kill your own Session, or delete/disable your own {@link User}.
	 **/
	suicide,
	/**
	 * {@link CompanyLabels.labels} codes must be unique.
	 * @deprecated
	 * @summary Companies
	 **/
	labelsListNotUnique,
	/**
	 * {@link CompanyLabels.tags} codes must be unique.
	 * @deprecated
	 * @summary Companies
	 **/
	tagsListNotUnique,
	/**
	 * One or more {@link UserGroup}s in the list not found.
	 * @summary Users and Groups
	 **/
	userGroupsListNotFound,
	/**
	 * Unknown command.
	 **/
	unknownCommand,
	/**
	 * {@link Timezone} not found.
	 **/
	timezoneNotFound,
	/**
	 * {@link Message} not found.
	 * @summary Assets
	 **/
	assetMessageNotFound,
	/**
	 * {@link DispatchTask} not found.
	 * @summary Dispatch
	 **/
	dispatchTaskNotFound,
	/**
	 * {@link UserGroup} currently in use by one or more {@link User}s.
	 * In order to delete a {@link UserGroup}, all {@link User}s must first be removed as members.
	 * @summary Users and Groups
	 **/
	userGroupInUse,
	/**
	 * {@link UserGroup} not deleted.
	 * @summary Users and Groups
	 **/
	userGroupNotDeleted,
	/**
	 * {@link ReportResult} not found.
	 * @summary Reports
	 **/
	reportResultNotFound,
	/**
	 * {@link Picture} not found.
	 * @summary File Hosting
	 **/
	pictureNotFound,
	/**
	 * One or more {@link Picture}s in the list not found.
	 * @summary File Hosting
	 **/
	picturesListNotFound,
	/**
	 * {@link Picture} not deleted.
	 * @summary File Hosting
	 **/
	pictureNotDeleted,
	/**
	 * Unable to perform operation because resulting {@link UserPermission}s would be greater than your own.
	 * @summary Users and Groups
	 **/
	permissionEscalation,
	/**
	 * A {@link User} with this login already exists.
	 * @summary Users and Groups
	 **/
	userAlreadyExists,
	/**
	 * Session or connection not allowed due to flooding.
	 * @summary Users and Groups
	 **/
	sessionThrottled,
	/**
	 * One or more {@link User}s in the list not found.
	 * @summary Users and Groups
	 **/
	usersListNotFound,
	/**
	 * {@link ReportResult} not deleted.
	 * @summary Reports
	 **/
	reportResultNotDeleted,
	/**
	 * {@link HosCarrier} not found.
	 * @summary Hours of Service
	 **/
	carrierNotFound,
	/**
	 * {@link HosCarrier} not deleted.
	 * @summary Hours of Service
	 **/
	carrierNotDeleted,
	/**
	 * {@link HosInspection} not found.
	 * @summary Hours of Service
	 **/
	inspectionNotFound,
	/**
	 * {@link HosInspection} not deleted.
	 * @summary Hours of Service
	 **/
	inspectionNotDeleted,

	/**
	 * There was an error retrieving the address' coordinates.
	 * Check the `errorDetails` for more information.
	 * @summary Dispatch
	 **/
	geocoderError,
	/**
	 * No coordinates could be found for the given address.
	 * Ensure the address is correct, or try again without postal code.
	 * @summary Dispatch
	 **/
	geocoderNotFound,
	/**
	 * There was an error calculating the directions or too many stops were given.
	 * Check the `errorDetails` for more information.
	 * @summary Dispatch
	 **/
	directionsError,
	/**
	 * Directions could not be calculated between two or more stops.
	 * Ensure the each stop is correct, or try a shorter route.
	 * @summary Dispatch
	 **/
	directionsNotFound,

	/**
	 * {@link HosEvent} not found.
	 * @summary Hours of Service
	 **/
	elogNotFound,

	/**
	 * {@link User} has been disabled.
	 * @summary Users and Groups
	 **/
	userDisabled,

	/**
	 * Trying to remove an expired or completed {@link ProviderRegistration}.
	 * @summary Providers and Configurations
	 **/
	invalidRegistration,
	/**
	 * Verification hash does not match {@link Provider}'s.
	 * @ignore
	 * @summary Providers and Configurations
	 **/
	invalidHash,
	/**
	 * Unknown or invalid {@link ProviderRegistration.code}.
	 * @ignore
	 * @summary Providers and Configurations
	 **/
	invalidVerification,
	/**
	 * {@link ProviderRegistration} timeout has elapsed.
	 * @ignore
	 * @summary Providers and Configurations
	 **/
	verifyTimeout,

	/**
	 * Unsupported MIME type.
	 * @summary File Hosting
	 **/
	invalidMime,
	/**
	 * File is too large.
	 * @summary File Hosting
	 **/
	filesizeExceeded,

	/**
	 * Unknown or invalid {@link ProviderType}.
	 * @deprecated Use invalidData instead
	 * @summary Providers and Configurations
	 **/
	invalidProviderType,

	/**
	 * {@link ReportSchedule} not found.
	 * @summary Reports
	 **/
	reportScheduleNotFound,
	/**
	 * {@link ReportSchedule} not deleted.
	 * @summary Reports
	 **/
	reportScheduleNotDeleted,

	/**
	 * {@link ReportResult} not ready to serve {@link ReportDataSummaryInstance} or {@link ReportDataBreakdownInstance} data.
	 * @summary Reports
	 **/
	reportResultNotReady,

	/**
	 * {@link Asset} suspended.
	 * @summary Assets
	 **/
	assetSuspended,
	/**
	 * {@link Asset} not suspended.
	 * @summary Assets
	 **/
	assetNotSuspended,

	/**
	 * {@link Provider} suspended.
	 * @summary Providers and Configurations
	 **/
	providerSuspended,
	/**
	 * {@link Provider} not suspended.
	 * @summary Providers and Configurations
	 **/
	providerNotSuspended,

	/**
	 * {@link DispatchTask} not deleted.
	 * @summary Dispatch
	 **/
	dispatchTaskNotDeleted,
	/**
	 * {@link Message} not deleted.
	 * @summary Assets
	 **/
	assetMessageNotDeleted,

	/**
	 * {@link ProviderScript} not found.
	 * @summary Providers and Configurations
	 **/
	providerScriptNotFound,
	/**
	 * {@link ProviderScript} not deleted.
	 * @summary Providers and Configurations
	 **/
	providerScriptNotDeleted,
	/**
	 * {@link ProviderScript} currently in use by one or more {@link ProviderConfig}s.
	 * In order to delete a {@link ProviderScript}, all {@link ProviderConfig}s must first be deleted.
	 * @summary Providers and Configurations
	 **/
	providerScriptInUse,

	/**
	 * Command not processed due to flooding.
	 **/
	commandThrottled,

	/**
	 * {@link CompanyReseller} not found.
	 * @summary White-labelling
	 **/
	resellerNotFound,
	/**
	 * {@link CompanyReseller} not deleted.
	 * @summary White-labelling
	 **/
	resellerNotDeleted,

	/**
	 * The long-running operation is queued, and will run when resources are ready.
	 **/
	operationPending,
	/**
	 * The long-running operation is currently executing.
	 **/
	operationRunning,
	/**
	 * The long-running operation has failed; see `message</c> and <c>errorDetails` for more information.
	 **/
	operationFailed,

	/**
	 * {@link BillingProfile} not found.
	 * @summary Billing
	 **/
	billingProfileNotFound,
	/**
	 * {@link BillingProfile} not deleted.
	 * @summary Billing
	 **/
	billingProfileNotDeleted,
	/**
	 * {@link BillableHostingRule} not found.
	 * @summary Billing
	 **/
	hostingRuleNotFound,
	/**
	 * {@link BillableHostingRule} not deleted.
	 * @summary Billing
	 **/
	hostingRuleNotDeleted,
	/**
	 * {@link BillableHostingDiscount} not found.
	 * @ignore
	 * @deprecated Never implemented.
	 * @summary Billing
	 **/
	hostingDiscountNotFound,
	/**
	 * {@link BillableHostingDiscount} not deleted.
	 * @ignore
	 * @deprecated Never implemented.
	 * @summary Billing
	 **/
	hostingDiscountNotDeleted,
	/**
	 * {@link BillableHostingLicense} not found.
	 * @summary Billing
	 **/
	hostingLicenseNotFound,
	/**
	 * {@link BillableHostingLicense} not deleted.
	 * @summary Billing
	 **/
	hostingLicenseNotDeleted,
	/**
	 * {@link BillingReport} not found.
	 * @summary Billing
	 **/
	billingReportNotFound,
	/**
	 * {@link BillingReport} not deleted.
	 * @summary Billing
	 **/
	billingReportNotDeleted,

	/**
	 * {@link Contact} currently in use by one or more {@link User}s and/or {@link Asset}s.
	 * In order to delete a {@link Contact}, all {@link User}s/{@link Asset}s must first be altered or deleted.
	 * @summary Contacts
	 **/
	contactInUse,

	/**
	 * {@link Document} not found.
	 * @summary File Hosting
	 **/
	documentNotFound,
	/**
	 * {@link Document} not deleted.
	 * @summary File Hosting
	 **/
	documentNotDeleted,
	/**
	 * One or more {@link Document}s in the list not found.
	 * @summary File Hosting
	 **/
	documentsListNotFound,

	/**
	 * The object or operation has not changed since the last request.
	 **/
	unchanged,
	/**
	 * The collection has no content or the operation produced no results.
	 **/
	nothing,

	/**
	 * {@link Machine} not found.
	 * @summary Users and Groups
	 **/
	machineNotFound,
	/**
	 * {@link Machine} not deleted.
	 * @summary Users and Groups
	 **/
	machineNotDeleted,
	/**
	 * The {@link Machine} cannot access the requested API.
	 * @summary Users and Groups
	 **/
	machineNotAllowed,

	/**
	 * Invalid operation.
	 * Due to either the request or the objects' state, the operation cannot be performed.
	 **/
	invalidOperation,

	/**
	 * A client using a {@link Machine} is trying to access the system from an unknown URL.
	 * @summary Users and Groups
	 **/
	referrerNotAllowed,

	/**
	 * {@link FormTemplate} not found.
	 * @summary File Hosting
	 **/
	formTemplateNotFound,
	/**
	 * {@link FormTemplate} not deleted.
	 * @summary File Hosting
	 **/
	formTemplateNotDeleted,
	/**
	 * {@link FormResult} not found.
	 * @summary File Hosting
	 **/
	formResultNotFound,
	/**
	 * {@link FormResult} not deleted.
	 * @summary File Hosting
	 **/
	formResultNotDeleted,
	/**
	 * One or more {@link FormResult}s in the list not found.
	 * @summary File Hosting
	 **/
	formResultsListNotFound,

	/**
	 * {@link DispatchTemplate} not found.
	 * @summary Dispatch
	 **/
	dispatchTemplateNotFound,
	/**
	 * {@link DispatchTemplate} not deleted.
	 * @summary Dispatch
	 **/
	dispatchTemplateNotDeleted,
	/**
	 * {@link DispatchJob} not found.
	 * @summary Dispatch
	 **/
	dispatchJobNotFound,
	/**
	 * {@link DispatchJob} not deleted.
	 * @summary Dispatch
	 **/
	dispatchJobNotDeleted,
	/**
	 * One or more {@link DispatchJob}s in the list not found.
	 * @summary File Hosting
	 **/
	dispatchJobsListNotFound,

	/**
	 * {@link FormTemplate} currently in use by one or more {@link FormResult}s.
	 * In order to delete a {@link FormTemplate}, all {@link FormResult}s must first be expired or deleted.
 	 * @summary File Hosting
	 **/
	formTemplateInUse,
}