let today = new Date()
today.setHours(0, 0, 0, 0)

export const eventInitialValues = {
    name: '',
    description: '',
    location: '',
    campus: 'MTY',
    categoryId: 1,
    cost: '0',
    majors: [],
    languages: [],
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    rangeDatetime: {
        startDatetime: today,
        endDatetime: today
    },
    publicEvent: false,
    facebookUrl: '',
    twitterUrl: '',
    petFriendly: false,
    registrationUrl: '',
    registrationMessage: '',
    registrationDeadline: today,
    hasRegistration: false,
    hasDeadline: false,
    requirementsToRegister: '',
    tagNames: [],
    photo: '',
    schedule: '',
    hasCapacity: false,
    maxCapacity: '0'
}

export const getEventInitialValues = (event) => {
    let formattedEvent = {}
    for (var key in event) {
        formattedEvent[key] = event[key] || eventInitialValues[key]
    }
    let formattedCost = formattedEvent.cost.replace(/\.0+$/, '')
    formattedEvent.cost = formattedCost
    formattedEvent.rangeDatetime = {
        startDatetime: event.startDatetime || eventInitialValues.rangeDatetime.startDatetime,
        endDatetime: event.endDatetime || eventInitialValues.rangeDatetime.endDatetime
    }
    formattedEvent.category = event.category || ''
    formattedEvent.hasCapacity = (formattedEvent.maxCapacity > 0)
    return formattedEvent
}