import React from 'react'
import Link from 'next/link'

const LeftAside = () => {
    return (
        <aside className='col-3'>
            <h3 className='mt-2'>This Is App Route</h3>
            <ul class="nav flex-column">
                <li class="nav-item bg-info mt-3 mb-2">
                    <Link class="nav-link text-white active text-center" href="/studentsinformation">Students Information</Link>
                </li>
                <li class=" bg-info mb-2">
                <Link class="nav-link text-white text-center" href="/teachersinformation">Teachers Information</Link>
                </li>
                <li class=" bg-info mb-2">
                <Link class="nav-link text-white text-center" href="/librarianinformation">Librarian Information</Link>
                </li>
            </ul>
        </aside>
    )
}

export default LeftAside