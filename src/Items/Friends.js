import profileImg from '../Media/bacon.webp';


function Friends(){
    return(
        <main className='mt-2'>
            <div>
                <span className="pl-1">Friends</span>
                <button className="absolute right-2 border-2 p-1 rounded-xl text-sm">See All</button>
            </div>
            <section className='w-full h-28 mt-4 flex text-center overflow-x-auto overflow-y-hidden'>
                <div className='ml-5 w-16 h-[90px]'>
                    <div className="w-[70px] h-[70px] bg-cover bg-no-repeat bg-[#3d4043] border-[1px] border-white rounded-3xl"
                     style={{backgroundImage: `url(${profileImg})`}}></div>
                    <span>Bacon</span>
                </div>
                <div className='ml-5 w-16 h-[90px]'>
                    <div className="w-[70px] h-[70px] bg-cover bg-no-repeat bg-[#3d4043] border-[1px] border-white rounded-3xl"
                     style={{backgroundImage: `url(${profileImg})`}}></div>
                    <span>Bacon</span>
                </div>
                <div className='ml-5 w-16 h-[90px]'>
                    <div className="w-[70px] h-[70px] bg-cover bg-no-repeat bg-[#3d4043] border-[1px] border-white rounded-3xl"
                     style={{backgroundImage: `url(${profileImg})`}}></div>
                    <span>Bacon</span>
                </div>
                <div className='ml-5 w-16 h-[90px]'>
                    <div className="w-[70px] h-[70px] bg-cover bg-no-repeat bg-[#3d4043] border-[1px] border-white rounded-3xl"
                     style={{backgroundImage: `url(${profileImg})`}}></div>
                    <span>Bacon</span>
                </div>
                <div className='ml-5 w-16 h-[90px]'>
                    <div className="w-[70px] h-[70px] bg-cover bg-no-repeat bg-[#3d4043] border-[1px] border-white rounded-3xl"
                     style={{backgroundImage: `url(${profileImg})`}}></div>
                    <span>Bacon</span>
                </div>
                <div className='ml-5 w-16 h-[90px]'>
                    <div className="w-[70px] h-[70px] bg-cover bg-no-repeat bg-[#3d4043] border-[1px] border-white rounded-3xl"
                     style={{backgroundImage: `url(${profileImg})`}}></div>
                    <span>Bacon</span>
                </div>
                <div className='ml-5 w-16 h-[90px]'>
                    <div className="w-[70px] h-[70px] bg-cover bg-no-repeat bg-[#3d4043] border-[1px] border-white rounded-3xl"
                     style={{backgroundImage: `url(${profileImg})`}}></div>
                    <span>Bacon</span>
                </div>
                <div className='ml-5 w-16 h-[90px]'>
                    <div className="w-[70px] h-[70px] bg-cover bg-no-repeat bg-[#3d4043] border-[1px] border-white rounded-3xl"
                     style={{backgroundImage: `url(${profileImg})`}}></div>
                    <span>Bacon</span>
                </div>
                <div className='ml-5 w-16 h-[90px]'>
                    <div className="w-[70px] h-[70px] bg-cover bg-no-repeat bg-[#3d4043] border-[1px] border-white rounded-3xl"
                     style={{backgroundImage: `url(${profileImg})`}}></div>
                    <span>Bacon</span>
                </div>
                <div className='ml-5 w-16 h-[90px]'>
                    <div className="w-[70px] h-[70px] bg-cover bg-no-repeat bg-[#3d4043] border-[1px] border-white rounded-3xl"
                     style={{backgroundImage: `url(${profileImg})`}}></div>
                    <span>Bacon</span>
                </div>

            </section>
        </main>
    )
}

export default Friends;