import React from 'react'

const AddTests = () => {
  return (
    <div>
        <form >
            <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                    <label for="testlabel" class="form-label inline-block mb-2 text-gray-700"
                    >Enter Google Form URL</label
                    >
                    <input
                    type="text"
                    class="
                        form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="testurl"
                    placeholder="Example label"
                    />
                </div>
            </div>
            <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                    <label for="batchlabel" class="form-label inline-block mb-2 text-gray-700"
                    >Enter Batch Year</label
                    >
                    <input
                    type="number"
                    class="
                        form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="Year"
                    placeholder="Example label"
                    />
                </div>
            </div>
            <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                    <label for="batchlabel" class="form-label inline-block mb-2 text-gray-700"
                    >Enter Batch Year</label
                    >
                    <input
                    type="number"
                    class="
                        form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                    "
                    id="Year"
                    placeholder="Example label"
                    />
                </div>
            </div>




        </form>
    </div>
  )
}

export default AddTests