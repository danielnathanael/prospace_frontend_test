//Auto Increment ID
let officeId = 0

const offices = (state = [], action) => {
    switch (action.type) {
        case 'ADD_OFFICE':
            console.log('---')
            console.log(state)
            return [
                ...state,
                {
                    officeId: officeId++,
                    officeName: action.officeName,
                    officeLocationLatitude: action.officeLocationLatitude,
                    officeLocationLongitude: action.officeLocationLongitude,
                    officeStartDate: action.officeStartDate,
                    officeCompanyId: action.officeCompanyId
                }
            ]
        case 'REMOVE_OFFICE':
            return state.filter(office => office.officeId != action.officeId)
        default:
            return state
    }
}

export default offices