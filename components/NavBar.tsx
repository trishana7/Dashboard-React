import Image from "next/image";
import Link from "next/link"; // Import the Link component

export default function Profile() {
  return (
    <>
      <aside className="h-screen bg-white fixed lg:sticky top-0 border-r-2 p-6 pt-10 whitespace-nowrap z-10 closed shadow-xl">
        <div className="mb-10 flex items-center gap-4">
          <div className="p-2 bg-green-500 rounded font-bold text-3xl">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="invert"
              width={20}
              height={24}
            />
          </div>
          <p className="font-bold text-3xl">Vercel</p>
        </div>

        <ul className="text-gray-500 font-semibold flex flex-col gap-2">
          <li>
            <Link href="/dashboard">
              <div className="flex items-center rounded px-3 py-2 hover:text-gray-900 hover:bg-gray-50 transition-all">
                <Image
                  src="/dashboard.svg"
                  alt="Dashboard Icon"
                  className="invert"
                  width={20}
                  height={20}
                  priority
                />
                <span className="flex-grow pl-3">Dashboard</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/notifications">
              <div className="flex rounded px-3 py-2 hover:text-gray-900 hover:bg-gray-50 transition-all">
                <span className="flex items-center gap-3">
                  <Image
                    src="/notification.svg"
                    alt="Notification Icon"
                    className="invert"
                    width={20}
                    height={20}
                    priority
                  />
                  Notifications
                  <span className="bg-red-500 text-white leading-none px-2 py-1 rounded-full text-xs">
                    2
                  </span>
                </span>
              </div>
            </Link>
          </li>
          <li className="border my-2"></li>
          <li>
            <Link href="/sales">
              <div className="flex rounded px-3 py-2 hover:text-gray-900 hover:bg-gray-50 transition-all">
                <span className="flex items-center gap-3">
                  <Image
                    src="/marketing.svg"
                    alt="Sales Icon"
                    className="invert"
                    width={20}
                    height={20}
                    priority
                  />
                  <span className="flex-grow">Sales</span>
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}
