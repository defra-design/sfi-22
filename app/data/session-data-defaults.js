/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

    indexlink: "/index",
    updated: "06-Jun-22",
    maintitle: "Sustainable Farming Incentive",
    team: [
        {
            role: "Research",
            name: "Rachel Abbott",
            email: "rachel@hippodigital.co.uk"
                },
        {
            role: "Design",
            name: "Jon Maher",
            email: "jon@hippoddigital.co.uk"
           },
        {
            role: "Delivery",
            name: "Charles Newman",
            email: "charles.newman@kainos.com"
           },
        {
            role: "Content",
            name: "Nick Johnstone-Waddell",
            email: "nick.johnstone-waddell@hippodigital.co.uk"
           }
           ],
    links: [
        {
            url: "https://miro.com/app/board/uXjVOxw7sZE=/",
            title: "User journey map (Miro)"
},
        {
            url: "#",
            title: "Research plan"
},
        {
            url: "#",
            title: "Inception deck"
}

    ],
    prototypes: [
        {
            id: 0,
            url: "/0",
            status: "building",
            desc: "Control. Prototype version of the live as-is private beta.",
            updated: "06-Jun-22",
            start: "TBC",
            end: "TBC",
            participants: "TBC",
            home: "gov-uk",

            pages: [
                {
                    title: "GOV.UK homepage",
                    template: "homepage",
                    content: " ",
                    url: "gov-uk",
                    pageid: 0,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "Sustainable Farming Incentive: full guidance",
                    template: "guidance",
                    content: "summary",
                    url: "sustainable-farming-incentive-full-guidance",
                    pageid: 1,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "A Summary of the SFI in 2022",
                    template: "guidance",
                    content: "summary",
                    url: "a-summary-of-the-sfi-in-2022",
                    pageid: 2,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "What to do before you apply for an SFI standards agreement",
                    template: "guidance",
                    content: "Preparation",
                    url: "what-to-do-before-you-apply",
                    pageid: 3,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "Check your land details before you apply for an SFI standards agreement",
                    template: "guidance",
                    content: "Preparation",
                    url: "check-your-land-details",
                    pageid: 4,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "Check you and your land are eligible for an SFI standards agreement",
                    template: "guidance",
                    content: "Eligibility",
                    url: "check-you-and-your-land-are-eligible-for-an-sfi-standards-agreement",
                    pageid: 5,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "Eligibility of commons and shared grazing land for an SFI standards agreement",
                    template: "guidance",
                    content: "Eligibility",
                    url: "eligibility-of-commons-and-shared-grazing-land-for-an-sfi-standards-agreement",
                    pageid: 6,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "How an SFI standards agreement interacts with other funding schemes",
                    template: "guidance",
                    content: "Eligibility",
                    url: "how-an-sfi-standards-agreement-interacts-with-other-funding-schemes",
                    pageid: 7,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "Check regulatory issues and consents that could affect an SFI standards agreement",
                    template: "guidance",
                    content: "Eligibility",
                    url: "check-regulatory-issues-and-consents-that-could-affect-an-sfi-standards-agreement",
                    pageid: 8,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "How an SFI standards agreement works",
                    template: "guidance",
                    content: "agreements and payments",
                    url: "how-a-sfi-standards-agreement-works",
                    pageid: 9,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "Getting paid for an SFI standards agreement",
                    template: "guidance",
                    content: "agreements and payments",
                    url: "getting-paid-for-an-sfi-standards-agreement",
                    pageid: 10,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "Checking progress of your SFI standards agreement",
                    template: "guidance",
                    content: "agreements and payments",
                    url: "checking-progress-of-your-sfi-standards-agreement",
                    pageid: 11,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "How the SFI standards work and future standards",
                    template: "guidance",
                    content: "standards",
                    url: "how-the-sfi-standards-work",
                    pageid: 12,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "The SFI arable and horticultural soils standard",
                    template: "guidance",
                    content: "standards",
                    url: "the-sfi-arable-and-horticultural-soils-standard",
                    pageid: 13,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "The SFI improved grassland soils standard",
                    template: "guidance",
                    content: "standards",
                    url: "the-sfi-improved-grassland-soils-standard",
                    pageid: 14,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "The SFI moorland standard",
                    template: "guidance",
                    content: "standards",
                    url: "the-sfi-moorland-standard",
                    pageid: 15,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "SFI annual health and welfare review",
                    template: "guidance",
                    content: "Annual health and welfare review",
                    url: "sfi-annual-health-and-welfare-review",
                    pageid: 16,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "Contacting the RPA about SFI",
                    template: "guidance",
                    content: "Contact",
                    url: "contacting-the-rpa-about-sfi",
                    pageid: 17,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "How to do the actions in the arable and horticultural soils standard",
                    template: "guidance",
                    content: "standards",
                    url: "how-to-do-the-actions-in-the-arable-and-horticultural-soils-standard",
                    pageid: 18,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "How to do the actions in the improved grassland soils standard",
                    template: "guidance",
                    content: "standards",
                    url: "how-to-do-the-actions-in-the-improved-grassland-soils-standard",
                    pageid: 19,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "How to do the actions in the moorland standard",
                    template: "guidance",
                    content: "standards",
                    url: "how-to-do-the-actions-in-the-moorland-standard",
                    pageid: 20,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "Terms and conditions",
                    template: "guidance",
                    content: "terms and conditions",
                    url: "terms-and-conditions",
                    pageid: 21,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "Sustainable Farming Incentive guidance",
                    template: "guidance",
                    content: "summary",
                    url: "sustainable-farming-incentive-guidance",
                    pageid: 22,
                    back: 0,
                    complete: "yes"
                },
                {
                    title: "Sign in",
                    template: "Sign in",
                    content: "sign in",
                    url: "crn-sign-in",
                    pageid: 23,
                    back: "sustainable-farming-incentive-guidance",
                    next: "crn-check-email",
                    complete: "yes"
                },
                {
                    title: "Check your email",
                    template: "Sign in",
                    content: "Check your email",
                    url: "crn-check-email",
                    pageid: 24,
                    back: "crn-sign-in",
                    next: "account-business-messages",
                    complete: "yes"
                },
                {
                    title: "Your businesses and messages",
                    template: "Account",
                    content: "Manage your account",
                    url: "account-business-messages",
                    pageid: 25,
                    back: "crn-sign-in",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Business overview",
                    template: "Account",
                    content: "Manage your account",
                    url: "account-business-overview",
                    pageid: 26,
                    back: "account-business-messages",
                    next: "crn-check-email",
                    complete: "no"
                }

            ]
        }
        ],
    fullname: "Joe Bloggs",
    businessname: "Imaginary Farm Ltd",
}
