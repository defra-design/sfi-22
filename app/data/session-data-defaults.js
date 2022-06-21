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
    updated: "21-Jun-22",
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
            url: "https://defra.sharepoint.com/:f:/r/teams/Team1974/SFI/SFI22%20User%20Research?csf=1&web=1&e=uitlO2",
            title: "SFI22 User Research folder - FFC Teams"
        }
    ],
    prototypes: [
        {
            id: 0,
            url: "/0",
            status: "built",
            desc: "Prototype version of the live as-is private beta.",
            updated: "21-Jun-22",
            start: "22-Jun-22",
            end: "07-Jul-22",
            participants: "7 - Mixture of participants who have made an application already, those who have not but are likely to, and those who have not/have no detailed prior knowledge of SFI.  ",
            home: "gov-uk",
            standards: [
                {
                    name: "Arable and Horticultural soils"
                },
                {
                    name: "Improved Grassland soils"
                },
                {
                    name: "Moorland"
                }

            ],
            application: [
                {
                    id: 0,
                    completed: 0,
                    sections: [
                        {
                            number: "1",
                            title: "Your land",
                            status: "Not started",
                            subtasks: [
                                {
                                    title: "Check and confirm your land details",
                                    url: "apply-your-land",
                                    show: true,
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
                                    show: true,
                                    status: "Cannot start yet"
                                }
                              ]
                        },
                        {
                            number: "3",
                            title: "Choose the level of actions you agree to",
                            status: "Not started",
                            subtasks: [
                                {
                                    title: "Choose which actions to do",
                                    url: "#",
                                    show: true,
                                    status: "Cannot start yet",
                                },
                                {
                                    title: "Actions on arable and horticultural soils",
                                    url: "apply-arable-levels",
                                    show: false,
                                    status: "Cannot start yet",
                                    action1: "Action 1: Will you complete a soil assessment and produce a written soil management plan covering the land entered into the standard in the first year of your SFI standards agreement?",
                                    action2: "Action 2: Will you make sure all the land parcels entered into the standard have been tested for soil organic matter within the last five years?",
                                    action3: "Action 3: Will you add organic matter to the soil all the land parcels entered into the standard at least once during your 3-year SFI standards agreement?",
                                    action4: "Action 4: Will you make sure that at least 70% of total area of land entered into this level of the standard as well establish green cover over the winter months (December until end of February)?",
                                    action5: "Action 4:  Will you make sure there is a well-established screen cover on at least 50% and multi species cover crops on at least an additional 20% of the land entered into this level of the standard, over the winter months (December until end of February)?"
                                },
                                {
                                    title: "Actions on improved grassland soils",
                                    url: "apply-grassland-levels",
                                    show: false,
                                    status: "Cannot start yet",
                                    action1: "Action 1: Will you complete a soil assessment and produce a written soil management plan covering the land entered into the standard in the first year of your SFI standards agreement?",
                                    action2: "Action 2: Will you make sure all the land parcels entered into the standard have been tested for soil organic matter within the last five years?",
                                    action3: "Action 3: Will you minimise bare ground by having no more than 5% of the total area of land entered into the standard left bare over winter (December until end of February)?"
                                },
                                {
                                    title: "Actions on moorland",
                                    url: "apply-moorland-levels",
                                    show: false,
                                    status: "Cannot start yet",
                                    action1: "Action 1: Will you  identify and record the soil and vegetation types and condition, and presence of historic and archaeological features?",
                                    action2: "Action 2: Will you assess the public goods the moorland is already providing?",
                                    action3: "Action 3: Will you identify opportunities to maintain or enhance the public goods provided by the moorland?"
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
                                    url: "apply-check-your-answers",
                                    show: true,
                                    status: "Cannot start yet"
                                },
                                {
                                    title: "Submit your application",
                                    url: "apply-submit-your-application",
                                    show: true,
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
                    content: "Levels",
                    url: "apply-arable-levels",
                    pageid: 34,
                    back: "apply-for-sfi",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "You are not eligible for the Arable and Horticultural soils standard",
                    template: "Application",
                    content: "Levels",
                    url: "apply-levels-not-eligible",
                    pageid: 35,
                    back: "apply-arable-levels",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "You are eligible for the introductory level",
                    template: "Application",
                    content: "Levels",
                    url: "apply-levels-eligible",
                    pageid: 36,
                    back: "apply-arable-levels",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Arable and Horticultural soils",
                    template: "Application",
                    content: "Levels",
                    url: "apply-arable-levels-intermediate",
                    pageid: 37,
                    back: "apply-arable-levels",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "You are eligible for the intermediate level",
                    template: "Application",
                    content: "Levels",
                    url: "apply-levels-eligible-intermediate",
                    pageid: 38,
                    back: "apply-arable-levels",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Select available land parcels for this standard",
                    template: "Application",
                    content: "Levels",
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
                    back: "apply-select-land-parcels",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Check your answers before submitting your application",
                    template: "Application",
                    content: "Check your answers",
                    url: "apply-check-your-answers",
                    pageid: 41,
                    back: "apply-payment-standard",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "You are not eligible for the intermediate Arable and Horticultural soils standard",
                    template: "Application",
                    content: "Levels",
                    url: "apply-levels-intermediate-not-eligible",
                    pageid: 42,
                    back: "apply-arable-levels-intermediate",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Submit your SFI application",
                    template: "Application",
                    content: "Submission",
                    url: "apply-submit-your-application",
                    pageid: 43,
                    back: "apply-check-your-answers",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Application submitted",
                    template: "Application",
                    content: "Submission",
                    url: "apply-submit-your-application",
                    pageid: 44,
                    back: "account-business-overview",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Search",
                    template: "Search",
                    content: "Search",
                    url: "search-results",
                    pageid: 45,
                    back: "gov-uk",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Make or update a rural payments claim",
                    template: "Sign in",
                    content: "Sign in",
                    url: "claim-rural-payments",
                    pageid: 46,
                    back: "gov-uk",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Browse: Business and self-employed",
                    template: "Navigation",
                    content: "Navigation",
                    url: "businss",
                    pageid: 47,
                    back: "gov-uk",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Browse: Farming business",
                    template: "Navigation",
                    content: "Navigation",
                    url: "business-farming",
                    pageid: 48,
                    back: "gov-uk",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Rural grants and payments: detailed information",
                    template: "Guidance",
                    content: "payments",
                    url: "rural-grants-payments",
                    pageid: 49,
                    back: "gov-uk",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Land management: detailed information",
                    template: "Guidance",
                    content: "land",
                    url: "land-management",
                    pageid: 50,
                    back: "gov-uk",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Environmental management : detailed information",
                    template: "Guidance",
                    content: "land",
                    url: "environmental-management",
                    pageid: 51,
                    back: "gov-uk",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Rural payments and grants",
                    template: "Guidance",
                    content: "payments",
                    url: "rural-payments-and-grants",
                    pageid: 52,
                    back: "gov-uk",
                    next: "crn-check-email",
                    complete: "no"
                },
                {
                    title: "Application summary",
                    template: "Application",
                    content: "Application",
                    url: "application-summary",
                    pageid: 53,
                    back: "sfi-applications-agreements",
                    next: "crn-check-email",
                    complete: "no"
                }

            ]
}
],
    fullname: "Joe Bloggs",
    businessname: "Imaginary Farm Ltd",
    email: "email@address.co.uk",
    landline: "01234567890",
    mobile: "07123456789",
    SBI: "110988078",
    appvalue: "£251.51",
    totalarea: 40.00,
    totalparcels: 4,
    totalsfiavailableparcels: 3,
    landsfitotalavailable: 30.00,
    landarableintroselected: 0.00,
    landarableinterselected: 0.00,
    parcel1: 5.00,
    parcel2: 15.00,
    parcel3: 10.00
}
