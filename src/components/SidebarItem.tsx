import { NavigationItem } from "../types";

const SidebarItem = ({ name, icon: Icon, onClick }: NavigationItem) => {
  return (
    <button
      className="flex items-center gap-x-6 hover:opacity-70 transition-opacity"
      onClick={onClick}
    >
      <Icon className="size-6 text-white" aria-hidden="true" />
      <span className="text-lg font-medium leading-[23px] text-white">
        {name}
      </span>
    </button>
  );
};

export default SidebarItem;
