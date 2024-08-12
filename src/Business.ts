export interface Business {
    userId: string;
    entityId: string;
    adjustedNet?: number;
    annualRevenue?: number;
    area?: string;
    askingPrice?: number;
    askingPurchasePriceRange?: string;
    brokerCooperation?: boolean;
    businessAddress?: string;
    businessCategory?: string;
    businessType?: string;
    city?: string;
    contactName?: string;
    counties?: string[];
    createdAt: string;
    description?: string;
    down?: number;
    email?: string;
    firstName?: string;
    investmentSoughtRange?: string;
    isLegacy?: boolean;
    isPublished?: boolean;
    keywords?: string;
    pageViews?: number;
    phoneNumber?: string;
    postID: string;
    postImages?: string[];
    postingType?: string;
    refreshedAt?: string;
    revenue?: number;
    shortProfile?: string;
    states?: string;
    status?: string;
    supportAndTraining?: string;
    title?: string;
    urlPath?: string;
    zip?: string;
}
