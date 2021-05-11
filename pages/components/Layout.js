import Login from "../login";
import { useUser } from "@auth0/nextjs-auth0";
import Menu from "./Menu";

function Layout(props) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Laden...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        <div className="flex items-center mr-5 p-5 border-b-2 border-gray-200">
          <div className="flex-1"></div>
          <h1 className=" flex-1 text-center">NOG 9 MINUTEN</h1>
          <div className="flex-1">
            <div class=" bg-white float-right flex flex-col justify-center">
              <div class="flex items-center justify-center">
                <div class=" relative inline-block text-left dropdown">
                  <span class="rounded-md shadow-sm">
                    <button
                      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="true"
                      aria-controls="headlessui-menu-items-117"
                    >
                      <span>{user.name}</span>
                      <svg
                        class="w-5 h-5 ml-2 -mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </span>
                  <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div
                      class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                      aria-labelledby="headlessui-menu-button-1"
                      id="headlessui-menu-items-117"
                      role="menu"
                    >
                      <div class="px-4 py-3">
                        <p class="text-sm leading-5">Aangemeld als</p>
                        <p class="text-sm font-medium leading-5 text-gray-900 truncate">
                          {user.email}
                        </p>
                      </div>

                      <div class="py-1">
                        <a
                          href="/api/auth/logout"
                          tabindex="3"
                          class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                          role="menuitem"
                        >
                          Afmelden
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 max-w-full md:mx-auto  md:max-w-2xl">
          {props.children}
        </div>
        <Menu />
      </div>
    );
  }
  return <Login />;
}

export function UserName() {
  const { user, error, isLoading } = useUser();
  return <b>{user.given_name}</b>;
}

export default Layout;
