let today = new Date()
today.setHours(0, 0, 0, 0)

export const eventInitialValues = {
    name: '',
    description: '',
    location: '',
    campus: 'MTY',
    categoryId: '1',
    cost: '0',
    majors: [],
    languages: [],
    prefix: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    rangeDatetime: {
        startDatetime: today,
        endDatetime: today
    },
    publicEvent: 'off',
    facebookUrl: '',
    twitterUrl: '',
    petFriendly: 'off',
    registrationUrl: '',
    registrationMessage: '',
    registrationDeadline: today,
    hasRegistration: '',
    hasDeadline: '',
    requirementsToRegister: '',
    tagNames: [],
    photo: '',
    schedule: ''
}

export const getEventInitialValues = (event) => {
    let formattedEvent = {}
    for (var key in event) {
        formattedEvent[key] = event[key] || eventInitialValues[key]
    }
    let formattedCost = formattedEvent.cost.replace(/\.0+$/, '')
    formattedEvent.cost = formattedCost
    return formattedEvent
}