import { Labels } from 'Helpers/index'
export const getEventsType = (query) => {
    let params = new URLSearchParams(query)
    switch (params.get('tipo')) {
        case Labels.past:
            return 'past'
        case Labels.upcoming:
            return 'upcoming'
        default:
            return 'upcoming'
    }
}