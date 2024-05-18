import React from 'react'

export default function LongPage() {
    return (
        <div className="container mx-auto p-8 mt-24" >
            {/* Segment 1 */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-16">
                {/* Image */}
                <div className="w-full md:w-1/3  flex justify-center md:justify-end">
                    <img
                        src="src/assets/choice.jpg"
                        alt="Segment 1"
                        className="mb-4 md:mr-4 md:mb-0 rounded-lg shadow-md h-96 w-96 bg-transparent"
                    />
                </div>

                {/* Text */}
                <div className="text-center  w-2/3">
                    <h1 className="text-2xl font-semibold mb-2 font-extrabold ">Make the right choice</h1>
                    <p className="text-lg">Offers Like never before</p>
                </div>
            </div>

            {/* Segment 2 */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-16">


                {/* Text */}
                <div className="text-center  text-white w-2/3 mb-8 md:mb-0">

                    <h1 className="text-2xl font-semibold mb-2 font-extrabold ">Different Categories</h1>
                    <p className="text-lg">Many Categories to choose from </p>
                </div>
                {/* Image */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-end">

                    <img
                        src="src/assets/categories.jpg"
                        alt="Segment 1"
                        className="mb-4 md:mr-4 md:mb-0 rounded-lg shadow-md h-96 w-96 bg-transparent"
                    />
                </div>
            </div>

            {/* Segment 3 */}
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-8">
                {/* Image */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                    <img
                        src="https://img.freepik.com/free-vector/decision-making-abstract-concept_335657-3039.jpg?t=st=1716058448~exp=1716062048~hmac=720f98ae7bfe4ccaa37896f3aacad94c26c2fce8850496d51d1ec4ba586b04be&w=740"
                        alt="Segment 1"
                        className="mb-4 md:mr-4 md:mb-0 rounded-lg shadow-md h-96 w-96 bg-transparent"
                    />
                </div>

                {/* Text */}
                <div className="text-center text-white  w-2/3">
                    <h1 className="text-2xl font-semibold mb-2 font-extrabold ">Many options</h1>
                    <p className="text-lg">Mutliple Products to choose From </p>
                </div>

            </div>
        </div>
    )
}
