import { Outlet } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import ProfileSidebar from "../../components/ProfileSidebar";
import { currentUser } from "../../data/profile";

export default function ProfileLayout() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Pages" }, { label: "Profile" }]} />

      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-14">
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-gray-800 sm:p-10">
          <div className="flex flex-col gap-10 lg:flex-row">
            <ProfileSidebar
              name={`${currentUser.firstName} ${currentUser.lastName}`}
              email={currentUser.email}
            />
            <div className="flex-1">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
