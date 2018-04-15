export const parseCategories = (props) => {
    if (Entity.isEmpty(props.category.all)) {
        return []
    }
    return props.category.all
}