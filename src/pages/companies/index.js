import React from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { removeOffice } from '../../actions'
import './index.css'

const Page = (props) => {

    console.log(props)

    const history = useHistory()
    const params = useParams()

    const onRemoveOffice = (name, id) => {
        if (window.confirm(`Are you sure want to remove ${name}?`)) {
            props.dispatch(removeOffice(id))
        }
    }

    const moveToOverview = () => {
        history.push('/')
    }

    console.log(params)

    const company = props.companies.filter((company) => company.companyId == params.id)[0]

    const offices = props.offices.map((value, index) => {
        if (value.officeCompanyId == params.id) {
            return <div className='card company-card' key={index}>
                <div className='company-card-title'>
                    <div>{value.officeName}</div>
                    <div className="close-icon" onClick={(e) => onRemoveOffice(value.officeName, value.officeId)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className='company-card-content'>
                    <div className="label">
                        Location:
                    </div>
                    <div className='description'>
                        Lat: {value.officeLocationLatitude}
                    </div>
                    <div className='description'>
                        Long: {value.officeLocationLongitude}
                    </div>
                    <div className="label">
                        Office Start Date:
                    </div>
                    <div className='description'>
                        {value.officeStartDate}
                    </div>
                </div>
            </div>
        }
    })

    return <div className='wrapper card'>
        <h2 className='top-title'>{company.companyName}</h2>
        <div className='heading-label'>
            <h3 className='label'>
                Address:
            </h3>
            <div>
                {company.companyAddress}
            </div>
        </div>
        <div className='heading-label'>
            <h3 className='label'>
                Revenue:
            </h3>
            <div>
                {company.companyRevenue}
            </div>
        </div>
        <div className='h-flex last-heading-label'>
            <div className='heading-label'>
                <h3 className='label'>
                    Phone No:
                </h3>
                <div>
                    ({company.companyPhoneCode}) {company.companyPhoneNumber}
                </div>
            </div>
            <div>
                <button onClick={() => moveToOverview()}>Back to Overview</button>
            </div>
        </div>

        <div className='section-companies'>
            <h2>Offices</h2>
            <div className='companies'>
                {
                    offices.length == 0 ? <div>There is no offices created yet</div> : offices
                }
            </div>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    companies: state.companies,
    offices: state.offices,
})

export default connect(mapStateToProps, undefined)(Page)
