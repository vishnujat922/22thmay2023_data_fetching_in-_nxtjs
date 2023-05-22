import React from 'react'


async function getStudentData() {
  const res = await fetch('https://gorest.co.in/public/v2/users')

  return res.json();

}

async function Page() {
  const data = await getStudentData()
  console.log(data);
  return (
    <section className='col-6'>
      <>
        <h2>Student Information</h2>
        <ul>
          {
            data.map((cv, idx, arr) => {
              return <li key={idx}>{cv.id}{cv.name}{cv.email}{cv.gender}{cv.status}</li>
            })
          }
        </ul>
      </>
    </section>
  )
}

export default Page