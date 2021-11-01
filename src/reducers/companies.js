//Auto Increment ID
let companyId = 0

const defaultState = [
    {
        companyId: companyId++,
        companyName: 'Google',
        companyAddress: '1600 Amphitheatre Parkway Mountain View, CA 94043 United States',
        companyRevenue: 999999,
        companyPhoneCode: 190,
        companyPhoneNumber: "123456789",
    },
    {
        companyId: companyId++,
        companyName: 'Amazon',
        companyAddress: '410 Terry Ave N. Seattle, WA 98109.',
        companyRevenue: 999999,
        companyPhoneCode: 206,
        companyPhoneNumber: "266-1000",
    },
    {
        companyId: companyId++,
        companyName: 'Alibaba',
        companyAddress: '969 West Wen Yi Road Yu Hang District Hangzhou 311121',
        companyRevenue: 999999,
        companyPhoneCode: 86,
        companyPhoneNumber: "571-8502-2088",
    }
]


const companies = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_COMPANY':
            return [
                ...state,
                {
                    companyId: companyId++,
                    companyName: action.companyName,
                    companyAddress: action.companyAddress,
                    companyRevenue: action.companyRevenue,
                    companyPhoneCode: action.companyPhoneCode,
                    companyPhoneNumber: action.companyPhoneNumber,
                }
            ]
        case 'REMOVE_COMPANY':
            return state.filter(company => company.companyId != action.companyId)
        default:
            return state
    }
}

export default companies