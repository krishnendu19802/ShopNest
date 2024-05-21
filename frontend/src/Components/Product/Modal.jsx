import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Modal = ({ modalStatus, updateModal, product }) => {
    const [isModalOpen, setIsModalOpen] = useState(modalStatus);
    const [quantity, setQuantity] = useState(1)
    const [status,setStatus]=useState([false,''])
    const {isAuthenticated}=useContext(AuthContext)
    const updatequantity = (e) => {
        setQuantity(e.target.value)
    }
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        updateModal()
        setIsModalOpen(false);
    };

    const handleBuy=(e)=>{
        e.preventDefault()
        if(quantity<1){
            setQuantity(1)
            setStatus([false,'Quantity should be more than 0'])
            return
        }
        axios.post('http://localhost:8000/buy',{
            id:isAuthenticated[1].id,
            productId:product.productId,
            title:product.title,
            quantity
        }).then((result)=>{
            setStatus([true,result.data])
            setTimeout(() => {
                setStatus([false,''])
                closeModal()

            }, 3000);
        }).catch((error)=>{
            setStatus([false,error.response.data])
        })
    }

    return (
        modalStatus && (
            <div className="fixed z-50 inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                <div className="mt-16 md:mt-0 bg-white p-8 rounded-lg shadow-lg w-3/4 md:w-1/2">
                    <h1 className="text-2xl mb-4 text-blue-500 text-center font-bold ">Confirm Order</h1>
                    <h3 className="mb-4 sm:flex items-center ">Name:
                        <p className="shadow-inner bg-gray-100 rounded sm:mx-2 p-2">{product.title}</p>
                    </h3>

                    <div className="quantity_and_price">
                        <p className="mb-4 flex items-center">Quantity:
                            <input type="number" min={'1'} value={quantity} onChange={updatequantity} className='shadow-inner bg-gray-100 rounded mx-2 p-2 w-1/2' />
                        </p>

                        <p className="mb-4 flex items-center">Price:
                            <p className="shadow-inner bg-gray-100 rounded mx-2 p-2">{Math.floor(quantity * product.price)}</p>
                        </p>

                    </div>
                    <div className={`p-2 text-center font-bold text-${!status[0]?'red-400':'green-400'}`}>
                        {status[1]}
                    </div>
                    <hr />

                    <div className="sm:flex justify-between mt-8">
                        <button
                            onClick={closeModal}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg my-2 md:my-0"
                        >
                            Back
                        </button>
                        <button
                            onClick={handleBuy}
                            className="px-4 py-2 bg-green-500 text-white rounded-lg"
                        >
                            Confirm Order
                        </button>
                    </div>

                </div>
            </div>
        )

    );
};

export default Modal;
