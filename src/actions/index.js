export const addCompany = (name, address, revenue, phoneCode, phoneNumber) => ({
    type: 'ADD_COMPANY',
    companyName: name,
    companyAddress: address,
    companyRevenue: revenue,
    companyPhoneCode: phoneCode,
    companyPhoneNumber: phoneNumber,
})

export const removeCompany = (id) => ({
    type: 'REMOVE_COMPANY',
    companyId: id,
})

export const addOffice = (name, latitude, longitude, startDate, companyId) => ({
    type: 'ADD_OFFICE',
    officeName: name,
    officeLocationLatitude: latitude,
    officeLocationLongitude: longitude,
    officeStartDate: startDate,
    officeCompanyId: companyId,
})

export const removeOffice = (id) => ({
    type: 'REMOVE_OFFICE',
    officeId: id,
})