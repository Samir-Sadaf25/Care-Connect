import React from 'react';

const Blogs = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center text-5xl font-bold mt-5 mb-2'>Blogs</h1>
            <p className='text-center text-gray-500'>Let's explore some basic concept that will make you good developer</p>
            <div className='grid grid-rows-1 gap-3.5 mt-10 mb-10'>
                <div className=" bg-white border rounded-lg shadow-lg p-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                        What is useState and how does it work in React?
                    </h2>
                    <div className="mt-3">
                        <p className="text-blue-600 font-medium">Answer:</p>
                        <p className="mt-1 text-gray-600">
                            useState is a React hook that allows you to add state management to functional components. In simple terms, it lets you create and manage variables that React will keep track of and update whenever they change.
                        </p>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                        Added on: 24-4-2025
                    </div>
                </div>
                <div className=" bg-white border rounded-lg shadow-lg p-6">

                    <h2 className="text-lg font-semibold text-gray-800">
                        What is the purpose of useEffect in React?
                    </h2>
                    <div className="mt-3">
                        <p className="text-blue-600 font-medium">Answer:</p>
                        <p className="mt-1 text-gray-600">
                            The purpose of useEffect hook is :
                            <ul>
                                <li>useEffect runs a block of code after the component has rendered.</li>
                                <li>It helps manage things outside the React ecosystem, like APIs, browser APIs, or local storage.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                        Added on: 24-4-2025
                    </div>




                </div>
                <div className=" bg-white border rounded-lg shadow-lg p-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                        What is a custom hook in React and when should you use one?
                    </h2>
                    <div className="mt-3">
                        <p className="text-blue-600 font-medium">Answer:</p>
                        <p className="mt-1 text-gray-600">
                            A custom hook in React is essentially a JavaScript function that allows you to extract and reuse logic from components
                        </p>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                        Added on: 24-4-2025
                    </div>
                </div>
                <div className=" bg-white border rounded-lg shadow-lg p-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Difference between controlled and uncontrolled components. Which one is better?
                    </h2>
                    <div className="mt-3">
                        <p className="text-blue-600 font-medium">Answer:</p>
                        <p className="mt-1 text-gray-600">
                            A controlled component is one where the form data is controlled by the React state. And a controlled component is one where the form data is controlled by the React state.
                        </p>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                        Added on: 24-4-2025
                    </div>
                </div>
                <div className=" bg-white border rounded-lg shadow-lg p-6">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Tell us something about useFormStatus() in React.
                    </h2>
                    <div className="mt-3">
                        <p className="text-blue-600 font-medium">Answer:</p>
                        <p className="mt-1 text-gray-600">
                            The useFormStatus() hook is designed to manage and display the status of a form during submission
                        </p>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                        Added on: 24-4-2025
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blogs;