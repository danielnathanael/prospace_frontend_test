import React, { useState } from 'react'
import { connect } from 'react-redux'
import './index.css'
import { addCompany, removeCompany, addOffice, removeOffice } from '../../actions'
import { Redirect, useHistory } from 'react-router'

const Page = (props) => {

    const history = useHistory()

    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [companyName, setCompanyName] = useState('')
    const [companyAddress, setCompanyAddress] = useState('')
    const [companyRevenue, setCompanyRevenue] = useState('')
    const [companyPhoneCode, setCompanyPhoneCode] = useState('')
    const [companyPhoneNumber, setCompanyPhoneNumber] = useState('')
    const [officeName, setOfficeName] = useState('')
    const [officeLocationLatitude, setOfficeLocationLatitude] = useState('')
    const [officeLocationLongitude, setOfficeLocationLongitude] = useState('')
    const [officeStartDate, setOfficeStartDate] = useState('')
    const [officeCompanyId, setOfficeCompanyId] = useState('')

    const onCreateCompany = () => {
        if (companyName.trim() === '') {
            return setErrorMessage('Company Name must be filled')
        } else if (companyAddress.trim() === '') {
            return setErrorMessage('Company Address must be filled')
        } else if (isNaN(parseInt(companyRevenue)) || parseInt(companyRevenue) < 0) {
            return setErrorMessage('Company Revenue must be positive floor number')
        } else if (isNaN(parseInt(companyPhoneCode)) || parseInt(companyPhoneCode) < 0) {
            return setErrorMessage('Company Phone Code must be positive floor number')
        } else if (isNaN(parseInt(companyPhoneNumber)) || parseInt(companyPhoneNumber) < 0) {
            return setErrorMessage('Company Phone Number must be positive floor number')
        } else {
            setErrorMessage(null)
            setCompanyName('')
            setCompanyAddress('')
            setCompanyRevenue('')
            setCompanyPhoneCode('')
            setCompanyPhoneNumber('')
            setSuccessMessage('Successfully added new company')
            setTimeout(() => {
                setSuccessMessage(null)
            }, 5000)

            props.dispatch(addCompany(
                companyName,
                companyAddress,
                companyRevenue,
                companyPhoneCode,
                companyPhoneNumber,
            ))
        }
    }

    const onRemoveCompany = (name, id) => {
        if (window.confirm(`Are you sure want to remove ${name}?`)) {
            props.dispatch(removeCompany(id))
        }
    }

    const moveToOffices = (companyId) => {
        history.push(`/companies/${companyId}`)
    }

    const createOffice = () => {
        if (officeName.trim() === '') {
            return setErrorMessage('Office Name must be filled')
        } else if (isNaN(parseFloat(officeLocationLatitude)) || parseFloat(officeLocationLatitude) < 0) {
            return setErrorMessage('Office Latitude must be positive float number')
        } else if (isNaN(parseFloat(officeLocationLongitude)) || parseFloat(officeLocationLongitude) < 0) {
            return setErrorMessage('Office Latitude must be positive float number')
        } else if (officeStartDate.trim() === '') {
            return setErrorMessage('Office Start Date must be filled')
        } else if (officeCompanyId.trim() === '') {
            return setErrorMessage('Office Company must be filled')
        } else {
            setErrorMessage(null)
            setOfficeName('')
            setOfficeLocationLatitude('')
            setOfficeLocationLongitude('')
            setOfficeStartDate('')
            setOfficeCompanyId('')
            setSuccessMessage('Successfully added new office')
            setTimeout(() => {
                setSuccessMessage(null)
            }, 5000)

            props.dispatch(addOffice(
                officeName,
                officeLocationLatitude,
                officeLocationLongitude,
                officeStartDate,
                officeCompanyId,
            ))
        }
    }

    const companies = props.companies.map((value, index) => {
        return <div className='card company-card' key={index} onClick={() => moveToOffices(value.companyId)}>
            <div className='company-card-title'>
                <div>{value.companyName}</div>
                <div className="close-icon" onClick={(e) => onRemoveCompany(value.companyName, value.companyId)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className='company-card-content'>
                <div className="label">
                    Address:
                </div>
                <div className='description'>
                    {value.companyAddress}
                </div>
                <div className="label">
                    Revenue:
                </div>
                <div className='description'>
                    {value.companyRevenue}
                </div>
                <div className="label">
                    Phone No:
                </div>
                <div className='description'>
                    ({value.companyPhoneCode}) {value.companyPhoneNumber}
                </div>
            </div>
        </div>
    })

    const dropdownCompanies = props.companies.map((value) => {
        return <option value={value.companyId}>{value.companyName}</option>
    })

    return <div>
        {
            errorMessage != null ? <div className='error-message'>{errorMessage}</div> : null
        }
        {
            successMessage != null ? <div className='success-message'>{successMessage}</div> : null
        }
        <div className='wrapper card'>
            <div className='h-flex'>
                <div className='section-company'>
                    <h2>Create Company</h2>
                    <div>
                        <div className='input-label'>
                            Name:
                        </div>
                        <div>
                            <input className='input-field w-100' type='text' placeholder='name' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div className='input-label'>
                            Address:
                        </div>
                        <div>
                            <input className='input-field w-100' type='text' placeholder='address' value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div className='input-label'>
                            Revenue:
                        </div>
                        <div>
                            <input className='input-field w-100' type='number' placeholder='revenue' value={companyRevenue} onChange={(e) => setCompanyRevenue(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div className='input-label'>
                            Phone No:
                        </div>
                        <div className='h-flex'>
                            <input className='input-field w-25' type='text' placeholder='code' value={companyPhoneCode} onChange={(e) => setCompanyPhoneCode(e.target.value)} />
                            <input className='input-field w-100' type='text' placeholder='number' value={companyPhoneNumber} onChange={(e) => setCompanyPhoneNumber(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <button class='input-submit w-100' onClick={(e) => onCreateCompany()}>Create</button>
                    </div>
                </div>
                <div className='section-office'>
                    <h2>Create Office</h2>
                    <div>
                        <div className='input-label'>
                            Name:
                        </div>
                        <div>
                            <input className='input-field w-100' type='text' placeholder='name' value={officeName} onChange={(e) => setOfficeName(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div className='input-label'>
                            Location:
                        </div>
                        <div className='h-flex'>
                            <input className='input-field w-50' type='number' placeholder='latitude' value={officeLocationLatitude} onChange={(e) => setOfficeLocationLatitude(e.target.value)} />
                            <input className='input-field w-50' type='number' placeholder='longitude' value={officeLocationLongitude} onChange={(e) => setOfficeLocationLongitude(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div className='input-label'>
                            Office Start Date:
                        </div>
                        <div>
                            <input className='input-field w-100' type='date' placeholder='date' value={officeStartDate} onChange={(e) => setOfficeStartDate(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <div className='input-label'>
                            Company:
                        </div>
                        <div>
                            <select className='input-field w-100' placeholder='select company' value={officeCompanyId} onChange={(e) => setOfficeCompanyId(e.target.value)}>
                                <option value="" disabled hidden selected>Select company</option>
                                {dropdownCompanies}
                            </select>
                        </div>
                    </div>
                    <div>
                        <button class='input-submit w-100' onClick={(e) => createOffice()}>Create</button>
                    </div>
                </div>
            </div>
            <div className='section-companies'>
                <h2>Companies</h2>
                <div className='companies'>
                    {
                        companies.length == 0 ? <div>There is no companies created yet</div> : companies
                    }
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    companies: state.companies,
    offices: state.offices,
})

export default connect(mapStateToProps, undefined)(Page)