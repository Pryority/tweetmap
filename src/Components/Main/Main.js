import Search from '../Search/Search'

const Main = () => {
    return (
        <div class="container flex flex-col mx-auto items-center h-screen justify-center">
            {/* <Search /> */}
            
            <div class="flex justify-center">
                <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                    
                    <div class="p-8">
                    
                    <div class="flex justify-center p-2">
                    <div class="mb-3 xl:w-96">
                        {/* <label for="exampleText0" class="form-label inline-block mb-5 text-gray-700"                        >
                            Choose a location                        
                        </label> */}
                        <div class='flex-col mb-5'>
                            <div class='flex justify-center items-center'>
                                <h2 class="text-gray-900 text-xl font-medium mb-2">Trail Finder</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 ml-2" fill="none" viewBox="0 0 32 32" stroke="currentColor" stroke-width="1.62">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>  
                            <p class="text-gray-700 text-base mb-4">
                                Enter a postal code or an address to find trails in that area.
                            </p>
                        </div>
                        <input
                        type="text"
                        class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="exampleText0"
                        placeholder="Enter a Zip/Postal Code"
                        />
                        <label for="exampleText0" class="form-label inline-block my-3 text-gray-700"                        >
                            or                        
                        </label>
                        <input
                        type="text"
                        class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        id="exampleText0"
                        placeholder="Enter an Address"
                        />
                    </div>
                    </div>
                    <button type="button" class="inline-block px-6 py-2.5 mt-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Find Trails</button>
                    </div>
                </div>    
            </div>
        </div>
    );
};

export default Main;