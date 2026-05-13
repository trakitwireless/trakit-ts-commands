import { ulong } from "@trakit/objects";
/**
 * Interface for response content that is associated with a {@link Company}.
 * @remarks I am almost sure that *all* content is associated with a company, but this makes it explicit.
 */
export interface IContentCompany {
    /**
     * Returns the {@link Company.id} associated with this content.
     */
    getCompanyId(): ulong;
}
//# sourceMappingURL=IContentCompany.d.ts.map