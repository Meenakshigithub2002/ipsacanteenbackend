import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import axios from "axios"
import { toast } from 'react-toastify'
const AddFoodData = () => {
    const [name, setName] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [prizeOptions, setPrizeOptions] = useState()
    const [url, setUrl] = useState("")
    let prizeOptions2
    if (prizeOptions) {
        prizeOptions2 = prizeOptions.split(",")
    }
    const foodData = { name: name, img: imgUrl, options: prizeOptions2, url }
    const onSubMit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/api/auth/fooddataadd", foodData)
            console.log(response)

            toast.success(response.data)
            e.target.reset()
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="container">
                <div className='row'>
                    <div className='card mt-5'>
                        <div className='card-header w-100 text-center'>
                            <h3> Add Food data</h3>
                        </div>
                        <Form onSubmit={onSubMit}>
                            {/* name, img, options, url */}
                            <div className="m-3">
                                <label htmlFor="name" className="form-label text-dark">
                                    Product Name

                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    // value={credentials.name}
                                    onChange={(e) => setName(e.target.value)}
                                    aria-describedby="emailHelp"
                                    required />
                            </div>
                            <div className="m-3">
                                <label htmlFor="name" className="form-label text-dark">
                                    Image Url

                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    // value={credentials.name}
                                    onChange={(e) => {
                                        setImgUrl(e.target.value)
                                        setUrl(e.target.value)
                                    }}
                                    aria-describedby="emailHelp"
                                    required />
                            </div>
                            <div className="m-3">
                                <label htmlFor="name" className="form-label text-dark">
                                    Prize Options

                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    // value={credentials.name}
                                    onChange={(e) => setPrizeOptions(e.target.value)}
                                    aria-describedby="emailHelp"
                                    required />
                            </div>

                            <div className='container'>
                                <button className='btn btn-primary float-end  mb-3'>Add Product</button>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AddFoodData