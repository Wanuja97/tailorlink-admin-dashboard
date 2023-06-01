import React from 'react'

function Header() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() ;
    let year = date.getFullYear();

    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return (
        <div>
            <div aria-label="Page Header" className="bg-gray-200">
                <div className="w-screen px-4 py-8 sm:px-6 lg:px-8">
                    <div className="mt-8">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Welcome Back, Wanuja! 👋
                        </h1>
                        {/* <p>
                            {day}<sup>th</sup> of {month} {year}
                        </p> */}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header