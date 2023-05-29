import React from 'react'

function Header() {
    return (
        <div>
            <div aria-label="Page Header" className="bg-gray-100">
                <div className="w-screen px-4 py-8 sm:px-6 lg:px-8">
                    <div className="mt-8">
                        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                            Welcome Back, Barry! 👋
                        </h1>

                        <p className="mt-1.5 text-sm text-gray-500">
                            Your website has seen a 52% increase in traffic in the last month. Keep
                            it up! 🚀
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header