const prepareDate = value =>{
    const months = {
        'Jan' : 1,
        'Feb':2,
        'Mar':3,
        'Apr':4,
        'May':5,
        'Jun':6,
        'Jul':7,
        'Aug':8,
        'Sep':9,
        'Oct':10,
        'Nov':11,
        'Dec':12
    }

    return {
        day: parseInt(value),
        month: months[value.split(' ').splice(1,1)]
    }
}

export default prepareDate