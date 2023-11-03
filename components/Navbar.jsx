export default function Navbar() {

    const navbar = [
        { 'name':'Medication','link':'/medication' },
        { 'name':"Fitness",'link':'/fitness' },
        { 'name':"Reports",'link':"/reports" },
        { 'name':"Communication",'link':"/communication" }
    ]

    return (
        <>
            {
                
                <nav className="bg-white z-10 drop-shadow-2xl p-4 px-12 max-[640px]:px-2 max-[640px]:m-2 text-lg m-5 rounded-lg max-[640px]:w-screen text-black">
                    <div className='flex max-[640px]:flex-col'>
                        <a href="/" className='font-helvetica text-2xl text-black font-bold'>VitalEase</a>
                        {
                            
                            navbar.map((item,key) => {
                                return <a href={item.link}
                                    className={key===0 ? 
                                        'text-zinc-700 text-md ml-auto max-[640px]:ml-0 mr-7': 
                                        'text-zinc-700 text-md pr-7'} 
                                    key={key}> {item.name}</a>
                            })
                            
                        }
                        <button className="border border-black px-10 rounded-l-full hover:text-white hover:bg-black">Login</button>
                        <button className="border bg-black border-black px-10 mx-2 text-white rounded-r-full hover:text-black hover:bg-white">Sign Up</button>
                    </div>
                </nav>

            }

        </>
    )
}