export const Format = {
    cost: (cost) => {
        return ((!cost || cost == 0) ? '0' : cost)
    },
    toggle: (publicEvent) => {
        return (publicEvent ? 'on' : 'off')
    },
    array: (arr) => {
        let outStr = '';
        if (arr.length === 1) {
            outStr = arr[0]
        } else if (arr.length === 2) {
            let joiner = arr[1][0].toLowerCase() == 'i' ?
                ' e ' : ' y '
            outStr = arr.join(joiner)
        } else if (arr.length > 2) {
            let firstWords = arr.splice(0, arr.length - 1)
            let lastWord = arr[0][0].toLowerCase() == 'i' ?
                `e ${arr[0]}` : `y ${arr[0]}`
            outStr = `${firstWords.join(', ')} ${lastWord}`
        }
        return outStr;
    },
    toRange: (startDatetime, endDatetime) => {
        let dateRange = {
            "startDatetime": startDatetime,
            "endDatetime": endDatetime
        }
        return dateRange;
    }
}