export const getIndex = (objects, match) => (
    objects.findIndex(obj => obj.id == match.params.id)
)
