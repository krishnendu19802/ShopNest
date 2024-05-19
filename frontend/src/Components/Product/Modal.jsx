import React, { useState } from 'react';

const Modal = ({ modalStatus, updateModal, product }) => {
    const [isModalOpen, setIsModalOpen] = useState(modalStatus);
    const [quantity, setQuantity] = useState(1)

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
                            <input type="number" value={quantity} onChange={updatequantity} className='shadow-inner bg-gray-100 rounded mx-2 p-2 w-1/2' />
                        </p>

                        <p className="mb-4 flex items-center">Price:
                            <p className="shadow-inner bg-gray-100 rounded mx-2 p-2">{Math.floor(quantity * product.price)}</p>
                        </p>

                    </div>
                    <hr />
                    <div className="sm:flex justify-between mt-8">
                        <button
                            onClick={closeModal}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg my-2 md:my-0"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={closeModal}
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
