export default function Page() {
    return (
        <>
            <div className="m-10 mx-24 text-black flex gap-x-10">
                <div className="w-2/4">
                    <h1 className="font-bold text-2xl">What to Eat?</h1>
                    <div className="flex my-5 mx-10">
                        <div className="flex justify-evenly gap-x-10">
                            <div className="bg-white rounded-lg drop-shadow-lg h-48 w-48">
                                <img className="mx-8 my-8" width={128} height={128} src="/apple.png" alt="Apple" />
                            </div>
                            <div className="bg-white w-48 h-48 rounded-lg drop-shadow-lg">
                                <img className="mx-8 my-8" width={128} height={128} src="/vegetable.png" alt="Vegetable" />
                            </div>
                            <div className="bg-white w-48 h-48 rounded-lg drop-shadow-lg">
                                <img className="mx-8 my-8" width={128} height={128} src="/spinach.png" alt="Spinach" />
                            </div>
                        </div>
                    </div>
                    <div className="flex my-5 mx-10">
                        <div className="flex justify-evenly gap-x-10">
                            <div className="bg-white rounded-lg drop-shadow-lg h-48 w-48">
                                <img className="mx-8 my-8" width={128} height={128} src="/milk.png" alt="Apple" />
                            </div>
                            <div className="bg-white w-48 h-48 rounded-lg drop-shadow-lg">
                                <img className="mx-8 my-8" width={128} height={128} src="/bread.png" alt="Vegetable" />
                            </div>
                            <div className="bg-white w-48 h-48 rounded-lg drop-shadow-lg">
                                <img className="mx-8 my-8" width={128} height={128} src="/rice.png" alt="Spinach" />
                            </div>
                        </div>
                    </div>

                    <div className="flex my-5 mx-10">
                        <div className="flex justify-evenly gap-x-10">
                            <div className="bg-white rounded-lg drop-shadow-lg h-48 w-48">
                                <img className="mx-8 my-8" width={128} height={128} src="/meat.png" alt="Apple" />
                            </div>
                            <div className="bg-white w-48 h-48 rounded-lg drop-shadow-lg">
                                <img className="mx-8 my-8" width={128} height={128} src="/fish.png" alt="Vegetable" />
                            </div>
                            <div className="bg-white w-48 h-48 rounded-lg drop-shadow-lg">
                                <img className="mx-8 my-8" width={128} height={128} src="/egg.png" alt="Spinach" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/4">
                    <h1 className="font-bold text-2xl">What to do</h1>
                </div>
            </div>
        
        </>
    )
}