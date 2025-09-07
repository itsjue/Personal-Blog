function AuthorCard(props) {
    const { name, bio, avatar } = props;

    return (
        <div className="flex flex-col py-7 px-5 w-[305px] h-[400px] bg-[#EFEEEB] rounded-2xl">
            <div className="flex border-b-1 border-[#DAD6D1] pb-4">
                <img src={avatar} alt={name} className="w-[44px] h-[44px] rounded-full object-cover" />
                <div className="flex flex-col px-3">
                    <h4 className="text-[12px] text-[#75716B]">Author</h4>
                    <h2 className="text-[20px] font-semibold">{name}</h2>
                </div>
            </div>
            <p className="mt-4 text-[#75716B]">{bio}</p>
        </div>
    )
}

export default AuthorCard;