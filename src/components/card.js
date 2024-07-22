function Card({firstName,lastName,jobTitle,email, image}) {
    return (
            
            <div className="h-[40vh] w-40 ml-5 transform scale-100 hover:scale-110 transition-transform relative">
                <div className="flex">
                    <img src={image} alt="profile" className="w-full h-full rounded-t-md"/>
                </div>
                <div className="text-white flex flex-col overflow-hidden p-2 bg-gray-500 rounded-b-md">
                    <span>{firstName}{lastName}</span>
                    <span className="italic">{jobTitle}</span>
                    <span>{email}</span>
                </div>
            </div>
            
        
    )
}
export default Card;