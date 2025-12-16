
/**
 * The types of subscriptions available using {@link subscribe}/{@link unsubscribe}.
 * Each type has a different synchronization messages and objects.
 */
export enum SubscriptionType {
	/**
	 * Assets' {@link AssetGeneral|general properties} such as name, icon, and labels.
	 * @see {@link AssetGeneral}
	 */
	assetGeneral = "assetGeneral",
	/**
	 * Assets' {@link AssetAdvanced|advanced properties} such as position, attributes, and status tags.
	 * @see {@link AssetAdvanced}
	 */
	assetAdvanced = "assetAdvanced",
	/**
	 * {@link AssetMessage}s between {@link Asset}s and {@link User}s.
	 * @see {@link AssetMessage}
	 */
	assetMessage = "assetMessage",
	/**
	 * Assets' {@link AssetDispatch|current dispatch} such as  {@link DispatchJob}s and route progress.
	 * @see {@link AssetDispatch}
	 */
	assetDispatch = "assetDispatch",

	/**
	 * Assets' {@link DispatchTask} information.
	 * @see {@link DispatchTask}
	 */
	dispatchTask = "dispatchTask",
	/**
	 * Some work that needs to be done by performing one or more {@link DispatchStep}s.
	 * @see {@link DispatchJob}
	 */
	dispatchJob = "dispatchJob",

	/**
	 * Customized {@link FormTemplate|forms} to be filled.
	 * @see {@link FormTemplate}
	 */
	formTemplate = "formTemplate",
	/**
	 * {@link FormResult|Forms} that are completed and fully filled out.
	 * @see {@link FormResult}
	 */
	formResult = "formResult",

	/**
	 * {@link Place} information.
	 * @see {@link PlaceGeneral}
	 */
	placeGeneral = "placeGeneral",

	/**
	 * Providers' (device) {@link ProviderGeneral|general properties} such as name, notes, and selected {@link Asset}.
	 * @see {@link ProviderGeneral}
	 */
	providerGeneral = "providerGeneral",
	/**
	 * Raw provider (device) {@link ProviderAdvanced|data} like GPS coordinates and parsed ODB-II values.
	 * @see {@link ProviderAdvanced}
	 */
	providerAdvanced = "providerAdvanced",
	/**
	 * Provider (device) configurations.
	 * @see {@link ProviderConfiguration}
	 * @deprecated Use {@link providerConfig} instead.
	 */
	providerConfiguration = "providerConfiguration",
	/**
	 * Provider (device) script logic.
	 * @see {@link ProviderScript}
	 */
	providerScript = "providerScript",
	/**
	 * Provider (device) configurations.
	 * @see {@link ProviderConfig}
	 */
	providerConfig = "providerConfig",
	/**
	 * Provider (device) comamnds.
	 * @see {@link ProviderControl}
	 */
	providerControl = "providerControl",
	/**
	 * Pending Providers (devices) that have not yet been configured or provisioned.
	 * @see {@link ProviderRegistration}
	 */
	providerRegistration = "providerRegistration",

	/**
	 * Recurring maintenance work for {@link Vehicle}s and {@link Trailer}s.
	 * @see {@link MaintenanceSchedule}
	 */
	maintenanceSchedule = "maintenanceSchedule",
	/**
	 * Historical {@link Vehicle} and {@link Trailer} maintenance work.
	 * @see {@link MaintenanceJob}
	 */
	maintenanceJob = "maintenanceJob",

	/**
	 * Behaviour script logic.
	 * @see {@link BehaviourScript}
	 */
	behaviourScript = "behaviourScript",
	/**
	 * Configured behaviours.
	 * @see {@link Behaviour}
	 */
	behaviour = "behaviour",
	/**
	 * Behaviour log messages to help developers debug their {@link BehaviourScript}.
	 * @see {@link BehaviourLog}
	 */
	behaviourLog = "behaviourLog",

	/**
	 * Renaming and changing the nodes of a company.
	 * @see {@link CompanyGeneral}
	 */
	companyGeneral = "companyGeneral",
	/**
	 * Company's label and tag styles.
	 * @see {@link CompanyStyles}
	 */
	companyLabels = "companyLabels",
	/**
	 * Company's {@link SessionPolicy} and {@link PasswordPolicy}.
	 * @see {@link CompanyPolicies}
	 */
	companyPolicies = "companyPolicies",
	///// <summary>
	///// Company's list of {@link Contact}s broken down by role.
	///// @see {@link CompanyDirectory}
	//companyDirectory = "companyDirectory",
	/**
	 * A {@link Company}'s white-labelling details.
	 * @see {@link CompanyReseller}
	 */
	companyReseller = "companyReseller",

	/**
	 * Profiles used to generate {@link BillingReport} for a customer.
	 * @see {@link BillingProfile}
	 */
	billingProfile = "billingProfile",
	/**
	 * Billing rules for {@link Asset}s.
	 * @see {@link BillableHostingRule}
	 */
	billingHosting = "billingHosting",
	/**
	 * Discount rules for {@link Asset}s.
	 * @see {@link BillableHostingDiscount}
	 */
	billingDiscount = "billingDiscount",
	/**
	 * Hardware licenses for {@link Provider}s.
	 * @see {@link BillableHostingLicense}
	 */
	billingLicense = "billingLicense",
	/**
	 * Reports generated for a billee {@link Company}.
	 * @see {@link BillingReport}
	 */
	billingReport = "billingReport",

	/**
	 * Contact information used by {@link Asset}s and {@link User}s.
	 * @see {@link Contact}
	 */
	contact = "contact",

	/**
	 * Synchronizes icon information.
	 * @see {@link Icon}
	 */
	icon = "icon",
	/**
	 * Synchronizes picture information.
	 * @see {@link Picture}
	 */
	picture = "picture",
	/**
	 * Hosted document information.
	 * @see {@link Document}
	 */
	document = "document",

	/**
	 * Report configurations.
	 * @see {@link ReportTemplate}
	 */
	reportTemplate = "reportTemplate",
	/**
	 * Schedules for reports that run automatically.
	 * @see {@link ReportSchedule}
	 */
	reportSchedule = "reportSchedule",
	/**
	 * Historical asset details like breadcrumb trails.
	 * @see {@link ReportResult}
	 */
	reportResult = "reportResult",

	/**
	 * General user information such as name, contact information, and preferences.
	 * @see {@link UserGeneral}
	 */
	userGeneral = "userGeneral",
	/**
	 * User information such as permissions and group membership.
	 * @see {@link UserAdvanced}
	 */
	userAdvanced = "userAdvanced",
	/**
	 * Group information for easy access control.
	 * @see {@link UserGroup}
	 */
	userGroup = "userGroup",
	/**
	 * API Credentials information and permissions.
	 * @see {@link Machine}
	 */
	machine = "machine",
}