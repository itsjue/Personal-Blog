function NotificationCard() {
  return (
    <>
      <div className="flex">
        <div className="flex gap-3 mx-[60px] pb-10 mb-10 border-b border-[#DAD6D1]">
          <img
            src="/assets/mockup_profile_pic.jpeg"
            alt="profile_pic"
            className="size-12 object-cover rounded-full"
          />
          <div className="max-w-[901px]">
          <p className="font-medium text-[#75716B]">
            <span className="font-medium text-[#43403B]">Jue Parinthon</span> Commented on your article: The
            Fascinating World of Cats: Why We Love Our Furry Friends
            <span className="font-medium text-[#43403B]">
              "I love this article! It really explains why my cat is so
              independent yet loving. The purring section was super
              interesting."
            </span>
          </p>
          <p className="font-medium text-sm text-[#F2B68C] mt-1.5">4 hours ago</p>
          </div>
          <button className="flex font-medium text-[#26231E] underline cursor-pointer">View</button>
        </div>
      </div>
    </>
  );
}

export default NotificationCard;
