import Thumbnail from '../Media/banner.jpg';

function RecommendedForYou() {
    function generateRandomProfilePicture() {
        const baseURL = "https://tr.rbxcdn.com/";
        const randomID = Math.random().toString(36).substr(2, 32).toUpperCase(); // Random 32-character string
        const fullURL = `${baseURL}${randomID}-Png/150/150/AvatarHeadshot/Webp/noFilter`;
        return fullURL;
    }
    
    // Example usage
    console.log(generateRandomProfilePicture());
    return (
        <>
            <h1 className="text-xl font-bold m-2">Recommended For You</h1>
            <main className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
                    <div 
                        className="w-full h-40 bg-cover rounded-lg" 
                        style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8)), url(${Thumbnail})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
            </main>
        </>
    );
}

export default RecommendedForYou;
