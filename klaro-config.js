var klaroConfig = {
    elementID: 'klaro',
    groupByPurpose: true,
    storageMethod: 'cookie',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 365,
    privacyPolicy: '/p/privacy',
    default: true,
    mustConsent: false,
    acceptAll: false,
    hideDeclineAll: true,
    hideLearnMore: false,
    apps: [
        {
            name: 'Necessary cookies',
            default: true,
            title: 'Necessary cookies',
            purposes: ['functional'],
            required: true
        },
        {
            name: 'Analytical',
            title: 'Analytical',
            purposes: ['analytical'],
            default: true,
            required: false
        },
        {
            name: 'Marketing',
            title: 'Marketing',
            purposes: ['marketing'],
            default: true,
            required: false
        },
    ],
};
