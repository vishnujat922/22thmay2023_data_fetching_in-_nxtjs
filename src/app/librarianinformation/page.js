import React from 'react'

async function getLibrarianData(){
  const res = await fetch('https://gorest.co.in/public/v2/users')
  
  return res.json();
}

async function Page () {
  const data =await getLibrarianData()
  console.log(data)
  return (
    <section className='col-6'>
      <h2>Librarian Information</h2>
      <ul>
          {
            data.map((cv,idx,arr)=>{
              return <li key={idx}>{cv.id}{cv.name}{cv.email}{cv.gender}{cv.status}</li>
            })
          }
          {
          data.map((cv,idx,arr)=>{
            return <li key={idx}>{cv.id}{cv.name}{cv.email}{cv.gender}{cv.status}</li>
          })
        }
      </ul>
    </section>
  )
}

export default Page