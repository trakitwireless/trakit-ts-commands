
/**
 * The types of subscriptions available using @link {subscribe}/@link {unsubscribe}.
 * Each type has a different synchronization messages and objects.
 **/
	public enum SubscriptionType {
	/**
	 * Assets' @link {AssetGeneral|general properties} such as name, icon, and labels.
	 * @see {@link AssetGeneral}
	 * @see {@link PersonGeneral}
	 * @see {@link VehicleGeneral}
	 * @see {@link TrailerGeneral}
	 **/
		assetGeneral,
	/**
	 * Assets' @link {AssetAdvanced|advanced properties} such as position, attributes, and status tags.
	 * @see {@link AssetAdvanced}
	 * @see {@link VehicleAdvanced}
	 **/
		assetAdvanced,
	/**
	 * @link {AssetMessage}s between @link {Asset}s and @link {User}s.
	 * @see {@link AssetMessage}
	 **/
		assetMessage,
	/**
	 * Assets' @link {AssetDispatch|current dispatch} such as  @link {DispatchJob}s and route progress.
	 * @see {@link AssetDispatch}
	 **/
		assetDispatch,

	/**
	 * Assets' @link {DispatchTask} information.
	 * @see {@link DispatchTask}
	 **/
		dispatchTask,
	/**
	 * Some work that needs to be done by performing one or more @link {DispatchStep}s.
	 * @see {@link DispatchJob}
	 **/
		dispatchJob,

	/**
	 * Customized @link {FormTemplate|forms} to be filled.
	 * @see {@link FormTemplate}
	 **/
		formTemplate,
	/**
	 * @link {FormResult|Forms} that are completed and fully filled out.
	 * @see {@link FormResult}
	 **/
		formResult,

	/**
	 * @link {Place} information.
	 * @see {@link PlaceGeneral}
	 **/
		placeGeneral,

	/**
	 * Providers' (device) @link {ProviderGeneral|general properties} such as name, notes, and selected @link {Asset}.
	 * @see {@link ProviderGeneral}
	 **/
		providerGeneral,
	/**
	 * Raw provider (device) @link {ProviderAdvanced|data} like GPS coordinates and parsed ODB-II values.
	 * @see {@link ProviderAdvanced}
	 **/
		providerAdvanced,
	/**
	 * Provider (device) configurations.
	 * @see {@link ProviderConfiguration}
	 **/
		[Obsolete("Use providerConfig instead")]
		providerConfiguration,
	/**
	 * Provider (device) script logic.
	 * @see {@link ProviderScript}
	 **/
		providerScript,
	/**
	 * Provider (device) configurations.
	 * @see {@link ProviderConfig}
	 **/
		providerConfig,
	/**
	 * Provider (device) comamnds.
	 * @see {@link ProviderControl}
	 **/
		providerControl,
	/**
	 * Pending Providers (devices) that have not yet been configured or provisioned.
	 * @see {@link ProviderRegistration}
	 **/
		providerRegistration,

	/**
	 * Recurring maintenance work for @link {Vehicle}s and @link {Trailer}s.
	 * @see {@link MaintenanceSchedule}
	 **/
		maintenanceSchedule,
	/**
	 * Historical @link {Vehicle} and @link {Trailer} maintenance work.
	 * @see {@link MaintenanceJob}
	 **/
		maintenanceJob,

	/**
	 * Behaviour script logic.
	 * @see {@link BehaviourScript}
	 **/
		behaviourScript,
	/**
	 * Configured behaviours.
	 * @see {@link Behaviour}
	 **/
		behaviour,
	/**
	 * Behaviour log messages to help developers debug their @link {BehaviourScript}.
	 * @see {@link BehaviourLog}
	 **/
		behaviourLog,

	/**
	 * Renaming and changing the nodes of a company.
	 * @see {@link CompanyGeneral}
	 **/
		companyGeneral,
	/**
	 * Company's label and tag styles.
	 * @see {@link CompanyStyles}
	 **/
		companyLabels,
	/**
	 * Company's @link {SessionPolicy} and @link {PasswordPolicy}.
	 * @see {@link CompanyPolicies}
	 **/
		companyPolicies,
		///// <summary>
		///// Company's list of @link {Contact}s broken down by role.
		//
		///// @see {@link CompanyDirectory}
		//companyDirectory,
	/**
	 * A @link {Company}'s white-labelling details.
	 * @see {@link CompanyReseller}
	 **/
		companyReseller,

	/**
	 * Profiles used to generate @link {BillingReport} for a customer.
	 * @see {@link BillingProfile}
	 **/
		billingProfile,
	/**
	 * Billing rules for @link {Asset}s.
	 * @see {@link BillableHostingRule}
	 **/
		billingHosting,
	/**
	 * Discount rules for @link {Asset}s.
	 * @see {@link BillableHostingDiscount}
	 **/
		billingDiscount,
	/**
	 * Hardware licenses for @link {Provider}s.
	 * @see {@link BillableHostingLicense}
	 **/
		billingLicense,
	/**
	 * Reports generated for a billee @link {Company}.
	 * @see {@link BillingReport}
	 **/
		billingReport,

	/**
	 * Contact information used by @link {Asset}s and @link {User}s.
	 * @see {@link Contact}
	 **/
		contact,

	/**
	 * Synchronizes icon information.
	 * @see {@link Icon}
	 **/
		icon,
	/**
	 * Synchronizes picture information.
	 * @see {@link Picture}
	 **/
		picture,
	/**
	 * Hosted document information.
	 * @see {@link Document}
	 **/
		document,

	/**
	 * Report configurations.
	 * @see {@link ReportTemplate}
	 **/
		reportTemplate,
	/**
	 * Schedules for reports that run automatically.
	 * @see {@link ReportSchedule}
	 **/
		reportSchedule,
	/**
	 * Historical asset details like breadcrumb trails.
	 * @see {@link ReportResult}
	 **/
		reportResult,

	/**
	 * General user information such as name, contact information, and preferences.
	 * @see {@link UserGeneral}
	 **/
		userGeneral,
	/**
	 * User information such as permissions and group membership.
	 * @see {@link UserAdvanced}
	 **/
		userAdvanced,
	/**
	 * Group information for easy access control.
	 * @see {@link UserGroup}
	 **/
		userGroup,
	/**
	 * API Credentials information and permissions.
	 * @see {@link Machine}
	 **/
		machine,}