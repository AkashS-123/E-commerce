import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProfileAvatar from "./ProfileAvatar";

const navItems = [
  { label: "Account info", to: "/profile/account-info" },
  { label: "My order", to: "/profile/orders" },
  { label: "My address", to: "/profile/address" },
  { label: "Change password", to: "/profile/password" },
];

interface ProfileSidebarProps {
  name: string;
  email: string;
}

export default function ProfileSidebar({ name, email }: ProfileSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-72">
      <div className="overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800/60">
        <ProfileAvatar className="h-44 w-full" />
        <div className="p-5">
          <p className="text-lg font-extrabold text-gray-900 dark:text-white">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
        </div>
      </div>

      <nav className="mt-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              "flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition " +
              (isActive
                ? "bg-brand-500 text-white"
                : "bg-gray-50 text-gray-800 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-100 dark:hover:bg-gray-800")
            }
          >
            {item.label}
            <ArrowRight size={16} />
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
