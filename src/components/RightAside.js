import React from 'react'
import Link from 'next/link'

const RightAside = () => {
    return (
        <aside className='col-3'>
            <h2 className='mt-2'>This Is Page Route</h2>
            <ul class="nav flex-column">
                <li class="nav-item bg-info mt-3 mb-2">
                    <Link class="nav-link text-white active text-center" href="/customerinformation">Customers Information</Link>
                </li>
                <li class=" bg-info mb-2">
                    <Link class="nav-link text-white text-center" href="/LabourInformation">Labour Information</Link>
                </li>
                <li class=" bg-info mb-2">
                    <Link class="nav-link text-white text-center" href="/accountantinformation">Accountant Information</Link>
                </li>
            </ul>
        </aside>
    )
}

export default RightAside