export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center my-12 text-black">
        <div>
          <h1 className="text-[40px] text-center font-medium">We Help You</h1> 
          <h1 className="text-[50px] text-center font-semibold">L<span className="border-b-8 border-teal-500 rounded">ive Your Bes</span>t</h1>
          <h1 className="text-[48px] text-center font-medium">Golder Years</h1>
        </div>
        <div className="text-center">
          <button className="my-8 px-10 py-4 font-bold text-white rounded-full bg-red-600 inline-block">SOS</button>
        </div>

        <div className="text-center flex gap-x-10 my-5 justify-center">
          <div className="w-1/4 h-48 px-4 rounded-xl bg-white drop-shadow-2xl">
            <div className="flex gap-x-10">
              <div className="border-r-2 rounded-full">
                <img className="py-12  " src="/medication.png"  width={240} height={"64px"} />
              </div>
              <div className="py-10 ">
                <h1 className="font-bold text-start text-xl">Medication</h1>
                <p className="text-start">Effortessly manage your medications. Set schedules, get reminders, and track your prescriptions.</p>
              </div>
            </div>
          </div>

          <div className="w-1/4 h-48 px-4 rounded-xl bg-white drop-shadow-2xl">
            <div className="flex gap-x-10">
              <div className="border-r-2 rounded-full pr-3">
                <img className="py-12  " src="/fitness.png"  width={280} height={"64px"} />
              </div>
              <div className="py-10 ">
                <h1 className="font-bold text-start text-xl">Fitness</h1>
                <p className="text-start">Stay active and healthy with our Fitness module. Access a range of tailored exercises and wellness tips suitable for seniors.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center flex gap-x-10 my-5 justify-center">
          <div className="w-1/4 h-48 px-4 rounded-xl bg-white drop-shadow-2xl">
            <div className="flex gap-x-10">
                <div className="border-r-2 rounded-full pr-3">
                  <img className="py-12  " src="/analysis.png"  width={280} height={"64px"} />
                </div>
                <div className="py-10 ">
                  <h1 className="font-bold text-start text-xl">Reports</h1>
                  <p className="text-start">Track your progress and health trends using our comprehensive. Reports section. Stay informed about your health at a glance.</p>
                </div>
            </div>
          </div>

          <div className="w-1/4 h-48 px-4 rounded-xl bg-white drop-shadow-2xl">
            <div className="flex gap-x-10">
                <div className="border-r-2 rounded-full pr-3">
                  <img className="py-12  " src="/communication.png"  width={280} height={"64px"} />
                </div>
                <div className="py-10 ">
                  <h1 className="font-bold text-start text-xl">Communication</h1>
                  <p className="text-start">Maintain seamless communication with your loved ones and caregivers. Share updates, seek assistance with those who cares about you.</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
