
import React from 'react'
import CreateForm from './_components/CreateForm'
import FormList from './_components/FormList'

function Dashboard() {
    return (
        <div className='p-10' style={{ minHeight: `calc(100vh - 110.414px)` }}
        //min-h-screen' // Property is not taking into account the Header height
        >
            <h2 className='font-bold text-3xl flex items-center justify-between'>Dashboard
                <CreateForm />
            </h2>
            <FormList />
        </div>
    )
}

export default Dashboard