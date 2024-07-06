const Notifications = () => {
  return (
    <div className="border-b-[3px] border-[#292929] sm:px-12 px-8 md:px-16 pt-16 pb-[74px] w-full">
      <div className="flex flex-col gap-9">
        <h5 className="text-white text-2xl leading-7">To your attention</h5>
        <span className="text-white/50 leading-[18px]">
          There are no messages for your attention
        </span>
      </div>
    </div>
  );
};

export default Notifications;
