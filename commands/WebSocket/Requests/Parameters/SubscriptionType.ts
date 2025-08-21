
/**
 * The types of subscriptions available using <see cref="subscribe"/>/<see cref="unsubscribe"/>.
 * Each type has a different synchronization messages and objects.
 **/
	public enum SubscriptionType {
	/**
	 * Assets' <see cref="AssetGeneral">general properties</see> such as name, icon, and labels.
	 * <seealso cref="AssetGeneral"/>
	 * <seealso cref="PersonGeneral"/>
	 * <seealso cref="VehicleGeneral"/>
	 * <seealso cref="TrailerGeneral"/>
	 **/
		assetGeneral,
	/**
	 * Assets' <see cref="AssetAdvanced">advanced properties</see> such as position, attributes, and status tags.
	 * <seealso cref="AssetAdvanced"/>
	 * <seealso cref="VehicleAdvanced"/>
	 **/
		assetAdvanced,
	/**
	 * <see cref="AssetMessage"/>s between <see cref="Asset"/>s and <see cref="User"/>s.
	 * <seealso cref="AssetMessage"/>
	 **/
		assetMessage,
	/**
	 * Assets' <see cref="AssetDispatch">current dispatch</see> such as  <see cref="DispatchJob"/>s and route progress.
	 * <seealso cref="AssetDispatch"/>
	 **/
		assetDispatch,

	/**
	 * Assets' <see cref="DispatchTask"/> information.
	 * <seealso cref="DispatchTask"/>
	 **/
		dispatchTask,
	/**
	 * Some work that needs to be done by performing one or more <see cref="DispatchStep"/>s.
	 * <seealso cref="DispatchJob"/>
	 **/
		dispatchJob,

	/**
	 * Customized <see cref="FormTemplate">forms</see> to be filled.
	 * <seealso cref="FormTemplate"/>
	 **/
		formTemplate,
	/**
	 * <see cref="FormResult">Forms</see> that are completed and fully filled out.
	 * <seealso cref="FormResult"/>
	 **/
		formResult,

	/**
	 * <see cref="Place"/> information.
	 * <seealso cref="PlaceGeneral"/>
	 **/
		placeGeneral,

	/**
	 * Providers' (device) <see cref="ProviderGeneral">general properties</see> such as name, notes, and selected <see cref="Asset"/>.
	 * <seealso cref="ProviderGeneral"/>
	 **/
		providerGeneral,
	/**
	 * Raw provider (device) <see cref="ProviderAdvanced">data</see> like GPS coordinates and parsed ODB-II values.
	 * <seealso cref="ProviderAdvanced"/>
	 **/
		providerAdvanced,
	/**
	 * Provider (device) configurations.
	 * <seealso cref="ProviderConfiguration"/>
	 **/
		[Obsolete("Use providerConfig instead")]
		providerConfiguration,
	/**
	 * Provider (device) script logic.
	 * <seealso cref="ProviderScript"/>
	 **/
		providerScript,
	/**
	 * Provider (device) configurations.
	 * <seealso cref="ProviderConfig"/>
	 **/
		providerConfig,
	/**
	 * Provider (device) comamnds.
	 * <seealso cref="ProviderControl"/>
	 **/
		providerControl,
	/**
	 * Pending Providers (devices) that have not yet been configured or provisioned.
	 * <seealso cref="ProviderRegistration"/>
	 **/
		providerRegistration,

	/**
	 * Recurring maintenance work for <see cref="Vehicle"/>s and <see cref="Trailer"/>s.
	 * <seealso cref="MaintenanceSchedule"/>
	 **/
		maintenanceSchedule,
	/**
	 * Historical <see cref="Vehicle"/> and <see cref="Trailer"/> maintenance work.
	 * <seealso cref="MaintenanceJob"/>
	 **/
		maintenanceJob,

	/**
	 * Behaviour script logic.
	 * <seealso cref="BehaviourScript"/>
	 **/
		behaviourScript,
	/**
	 * Configured behaviours.
	 * <seealso cref="Behaviour"/>
	 **/
		behaviour,
	/**
	 * Behaviour log messages to help developers debug their <see cref="BehaviourScript"/>.
	 * <seealso cref="BehaviourLog"/>
	 **/
		behaviourLog,

	/**
	 * Renaming and changing the nodes of a company.
	 * <seealso cref="CompanyGeneral"/>
	 **/
		companyGeneral,
	/**
	 * Company's label and tag styles.
	 * <seealso cref="CompanyStyles"/>
	 **/
		companyLabels,
	/**
	 * Company's <see cref="SessionPolicy"/> and <see cref="PasswordPolicy"/>.
	 * <seealso cref="CompanyPolicies"/>
	 **/
		companyPolicies,
		///// <summary>
		///// Company's list of <see cref="Contact"/>s broken down by role.
		//
		///// <seealso cref="CompanyDirectory"/>
		//companyDirectory,
	/**
	 * A <see cref="Company"/>'s white-labelling details.
	 * <seealso cref="CompanyReseller"/>
	 **/
		companyReseller,

	/**
	 * Profiles used to generate <see cref="BillingReport"/> for a customer.
	 * <seealso cref="BillingProfile"/>
	 **/
		billingProfile,
	/**
	 * Billing rules for <see cref="Asset"/>s.
	 * <seealso cref="BillableHostingRule"/>
	 **/
		billingHosting,
	/**
	 * Discount rules for <see cref="Asset"/>s.
	 * <seealso cref="BillableHostingDiscount"/>
	 **/
		billingDiscount,
	/**
	 * Hardware licenses for <see cref="Provider"/>s.
	 * <seealso cref="BillableHostingLicense"/>
	 **/
		billingLicense,
	/**
	 * Reports generated for a billee <see cref="Company"/>.
	 * <seealso cref="BillingReport"/>
	 **/
		billingReport,

	/**
	 * Contact information used by <see cref="Asset"/>s and <see cref="User"/>s.
	 * <seealso cref="Contact"/>
	 **/
		contact,

	/**
	 * Synchronizes icon information.
	 * <seealso cref="Icon"/>
	 **/
		icon,
	/**
	 * Synchronizes picture information.
	 * <seealso cref="Picture"/>
	 **/
		picture,
	/**
	 * Hosted document information.
	 * <seealso cref="Document"/>
	 **/
		document,

	/**
	 * Report configurations.
	 * <seealso cref="ReportTemplate"/>
	 **/
		reportTemplate,
	/**
	 * Schedules for reports that run automatically.
	 * <seealso cref="ReportSchedule"/>
	 **/
		reportSchedule,
	/**
	 * Historical asset details like breadcrumb trails.
	 * <seealso cref="ReportResult"/>
	 **/
		reportResult,

	/**
	 * General user information such as name, contact information, and preferences.
	 * <seealso cref="UserGeneral"/>
	 **/
		userGeneral,
	/**
	 * User information such as permissions and group membership.
	 * <seealso cref="UserAdvanced"/>
	 **/
		userAdvanced,
	/**
	 * Group information for easy access control.
	 * <seealso cref="UserGroup"/>
	 **/
		userGroup,
	/**
	 * API Credentials information and permissions.
	 * <seealso cref="Machine"/>
	 **/
		machine,}