import {React, useState} from 'react'
import Header from '../component/Header'
import Title from '../component/createProduct/Title'
import Form from '../component/createProduct/Form'
import Table from '../component/createProduct/Table'

const CreateProduct = () => {

  return (
    <>
      <Header />
      <div className='pt-32'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12'>
            <div className='col-start-2 col-end-6 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-10'>
              <Title />
              <Form />
            </div>
          </div>
          <Table />
        </div>
      </div>
    </>
  )
}

export default CreateProduct