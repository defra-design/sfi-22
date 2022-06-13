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
    updated: "09-Jun-22",
    maintitle: "Sustainable Farming Incentive",
    team: [
        {
            role: "Research",
            name: "Rachel Abbott",
            email: "rachel@hippodigital.co.uk"
                },
        {
            role: "Research",
            name: "Vika Nightingale",
            email: "vika.nightingale@kainos.com"
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
            role: "Service Design",
            name: "Marcela Salcedo",
            email: "marcela.salcedo@kainos.com"
           },
        {
            role: "Content",
            name: "Nick Johnstone-Waddell",
            email: "nick.johnstone-waddell@hippodigital.co.uk"
           }
           ],
    links: [
        {
            url: "#",
            title: "Links to key docs etc will go here"
        }
    ],
    prototypes: [
        {
            id: 0,
            url: "/0",
            status: "building",
            desc: "Control. Prototype version of the live as-is private beta.",
            updated: "09-Jun-22",
            start: "TBC",
            end: "TBC",
            participants: "TBC",
            home: "gov-uk",
            application: [
                {
                    id: 0,
                    sections: [
                        {
                            number: "1",
                            title: "Your land",
                            status: "Not started",
                            subtasks: [
                                {
                                    title: "Check and confirm your land details",
                                    url: "apply-your-land",
                                    status: "Not started"
                        }
                            ]
                        },
                        {
                            number: "2",
                            title: "Select your standards",
                            status: "Not started",
                            subtasks: [
                                {
                                    title: "Select your standards",
                                    url: "apply-standards",
                                    status: "Cannot start yet"
                                }
                              ]
                                },
                        {
                            number: "3",
                            title: "Choose the level of actions you aggree to",
                            status: "Not started",
                            subtasks: [
                                {
                                    title: "Choose which actions to do",
                                    url: "apply-arable-levels",
                                    status: "Cannot start yet",
                                    action1: "Action 1: Will you complete a soil assessment and produce a written soil management plan covering the land entered into the standard in the first year of your SFI standards agreement?",
                                    action2: "Action 2: Will you make sure all the land parcels entered into the standard have been tested for soil organic matter within the last five years?",
                                    action3: "Action 3: Will you add organic matter to the soil all the land parcels entered into the standard at least once during your 3-year SFI standards agreement?",
                                    action4: "Action 4: Will you make sure that at least 70% of total area of land entered into this level of the standard as well establish green cover over the winter months (December until end of February)?",
                                    action5: "Action 5:  Will you make sure there is a well-established screen cover on at least 50% and multi species cover crops on at least an additional 20% of the land entered into this level of the standard, over the winter months (December until end of February)?"
                                }
                              ]
                                },
                        {
                            number: "4",
                            title: "Review and submit your application",
                            status: "Not started",
                            subtasks: [
                                {
                                    title: "Check your answers",
                                    url: "#",
                                    status: "Cannot start yet"
                                },
                                {
                                    title: "Submit your application",
                                    url: "#",
                                    status: "Cannot start yet"
                                }
                              ]
                                }
                            ],
                    status: "Not started"
            }
             ],
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
                    complete: "yes"
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
                },
                {
                    title: "SFI applications and agreements",
                    template: "Account",
                    content: "Manage your account",
                    url: "sfi-applications-agreements",
                    pageid: 27,
                    back: "account-business-overview",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Apply for SFI",
                    template: "Application",
                    content: "Application",
                    url: "apply-for-sfi",
                    pageid: 28,
                    back: "account-business-overview",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Your land details",
                    template: "Application",
                    content: "Land",
                    url: "apply-your-land",
                    pageid: 29,
                    back: "apply-for-sfi",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Update your land details",
                    template: "Application",
                    content: "Land",
                    url: "apply-update-land-details",
                    pageid: 30,
                    back: "apply-your-land",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Will you have management control of the land in your SFI application?",
                    template: "Application",
                    content: "Land",
                    url: "apply-management-control",
                    pageid: 31,
                    back: "apply-your-land",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Your land is not eligible for SFI",
                    template: "Application",
                    content: "Land",
                    url: "apply-land-not-eligible",
                    pageid: 32,
                    back: "apply-management-control",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Which standards do you want to apply for?",
                    template: "Application",
                    content: "Standards",
                    url: "apply-standards",
                    pageid: 33,
                    back: "apply-management-control",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Arable and Horticultural soils",
                    template: "Application",
                    content: "Standards",
                    url: "apply-arable-levels",
                    pageid: 34,
                    back: "apply-management-control",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Your are not eligible for the Arable and Horticultural soils standard",
                    template: "Application",
                    content: "Standards",
                    url: "apply-levels-not-eligible",
                    pageid: 35,
                    back: "apply-arable-levels",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Your are eligible for the introductory level",
                    template: "Application",
                    content: "Standards",
                    url: "apply-levels-eligible",
                    pageid: 36,
                    back: "apply-arable-levels",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Arable and Horticultural soils",
                    template: "Application",
                    content: "Standards",
                    url: "apply-arable-levels-intermediate",
                    pageid: 37,
                    back: "apply-arable-levels",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Your are eligible for the intermediate level",
                    template: "Application",
                    content: "Standards",
                    url: "apply-levels-eligible-intermediate",
                    pageid: 38,
                    back: "apply-arable-levels",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Select available land parcels for this standard",
                    template: "Application",
                    content: "Standards",
                    url: "apply-select-land-parcels",
                    pageid: 39,
                    back: "apply-arable-levels",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Your SFI payment value summary for this standard",
                    template: "Application",
                    content: "Payment",
                    url: "apply-payment-standard",
                    pageid: 40,
                    back: "apply-arable-levels",
                    next: "crn-check-email",
                    complete: "no"
                }

            ]
}
],
    fullname: "Joe Bloggs",
    businessname: "Imaginary Farm Ltd",
}
