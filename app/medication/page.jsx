export default function Page() {
    return (
        <>
            <div className="flex text-black justify-center gap-x-10 my-14">
                <div className="w-1/3 px-10 py-10 h-[720px] rounded-xl drop-shadow-2xl bg-white">
                    <div className="flex gap-x-10 text-slate-400">
                        <h1 className="text-xl">Time</h1>
                        <h1 className="text-xl px-8">Medication</h1>
                    </div>
                    <div className="flex gap-x-10 text-slate-400">
                        <div className="px-2">
                            <h1 className="text-black my-4 font-bold">08:00</h1>
                            <p>AM</p>
                        </div>
                        <div className="ml-[0px] border-l-4 rounded-t border-black">
                            <div className="h-18 my-4 ml-2 rounded-md drop-shadow-md w-96 p-2 bg-teal-100">
                                <h1 className="font-semibold text-black">Albuterol 35mg</h1>
                                <p>1 capsule</p>
                            </div>
                            <div className="h-18 my-4 ml-2 rounded-md drop-shadow-md w-96 p-2 bg-green-200">
                                <h1 className="font-semibold text-black">Levothyroxine 50mg</h1>
                                <p>2 capsule</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-10 text-slate-400">
                        <div className="px-2">
                            <h1 className="text-black my-4 font-bold">12:00</h1>
                            <p>AM</p>
                        </div>
                        <div className="ml-[0px] border-l-2">
                            <div className="h-18 my-4 ml-2 rounded-md drop-shadow-md w-96 p-2 bg-orange-300">
                                <h1 className="font-semibold text-black">Cough Syrup</h1>
                                <p>10 ml</p>
                            </div>
                            <div className="h-18 my-4 ml-2 rounded-md drop-shadow-md w-96 p-2 bg-teal-200">
                                <h1 className="font-semibold text-black">Omeprazole 50mg</h1>
                                <p>2 tablets</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-x-10 text-slate-400">
                        <div className="px-2">
                            <h1 className="text-black my-4 font-bold">06:00</h1>
                            <p>PM</p>
                        </div>
                        <div className="ml-[0px] border-l-2">
                            <div className="h-18 my-4 ml-2 rounded-md drop-shadow-md w-96 p-2 bg-green-300">
                                <h1 className="font-semibold text-black">Cough Syrup</h1>
                                <p>10 ml</p>
                            </div>
                            <div className="h-18 my-4 ml-2 rounded-md drop-shadow-md w-96 p-2 bg-yellow-200">
                                <h1 className="font-semibold text-black">Amoxicillin</h1>
                                <p>5 ml</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-[720px] rounded-xl drop-shadow-2xl bg-white">
                    <div className="my-[40%] mx-[40%]">
                        <div className="w-32 h-32 bg-cyan-300/[.4] drop-shadow-lg rounded-2xl p-6">
                            <div className="w-20 h-20 bg-cyan-300 rounded-2xl">
                                <p className="text-white text-[72px] mx-4 -translate-y-3">+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}