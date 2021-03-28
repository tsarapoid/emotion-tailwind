/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import tw from "twin.macro";

const Component = (props) => (
  <nav data-todo-x-data="{ open: false }" css={tw`bg-gray-800`}>
    <div css={tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
      <div css={tw`flex justify-between h-16`}>
        <div css={tw`flex`}>
          {/* Logo */}
          <div css={tw`flex-shrink-0 flex items-center`}>
            <img
              css={tw`block lg:hidden h-8 w-auto`}
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
              alt="Workflow"
            />
            <img
              css={tw`hidden lg:block h-8 w-auto`}
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>

          {/* Normal menu */}
          <div css={tw`hidden md:flex md:ml-6 md:items-center md:space-x-4`}>
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
              href="/"
              css={tw`bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium`}
            >
              Dashboard
            </a>
            <a
              href="/"
              css={tw`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
            >
              Team
            </a>
            <a
              href="/"
              css={tw`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
            >
              Projects
            </a>
            <a
              href="/"
              css={tw`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
            >
              Calendar
            </a>
          </div>
        </div>
        <div css={tw`flex items-center`}>
          <div css={tw`flex-shrink-0`}>
            <button
              type="button"
              css={tw`relative inline-flex items-center px-4 py-2 border border-transparent
                shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500
                hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500`}
            >
              <svg
                css={tw`-ml-1 mr-2 h-5 w-5`}
                data-todo-x-description="Heroicon name: solid/plus"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>New Job</span>
            </button>
          </div>

          <div
            css={tw`hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center`}
          >
            <button
              type="button"
              css={tw`bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
            >
              <span css={tw`sr-only`}>View notifications</span>
              <svg
                css={tw`h-6 w-6`}
                data-todo-x-description="Heroicon name: outline/bell"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>

            {/* Profile dropdown */}
            <div
              data-todo-x-data="{ open: false }"
              data-todo-at-keydown-escape-stop="open = false"
              data-todo-at-click-away="open = false"
              css={tw`ml-3 relative`}
            >
              <div>
                <button
                  type="button"
                  css={tw`bg-gray-800 p-1 flex text-sm rounded-full
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white`}
                  id="user-menu"
                  aria-expanded="false"
                  data-todo-at-click="open = !open"
                  aria-haspopup="true"
                  data-todo-x-bind-aria-expanded="open"
                >
                  <span css={tw`sr-only`}>Open user menu</span>
                  <img
                    css={tw`h-7 w-7 rounded-full`}
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <div
                data-todo-x-description="Dropdown menu, show/hide based on menu state."
                data-todo-x-show="open"
                data-todo-x-transition-enter={tw`transition ease-out duration-200`}
                data-todo-x-transition-enter-start={tw`transform opacity-0 scale-95`}
                data-todo-x-transition-enter-end={tw`transform opacity-100 scale-100`}
                data-todo-x-transition-leave={tw`transition ease-in duration-75`}
                data-todo-x-transition-leave-start={tw`transform opacity-100 scale-100`}
                data-todo-x-transition-leave-end={tw`transform opacity-0 scale-95`}
                css={tw`origin-top-right absolute ring-1 right-0 mt-2 w-48 rounded-md shadow-lg py-1
                  bg-white ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <a
                  href="/"
                  css={tw`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                  role="menuitem"
                >
                  Your Profile
                </a>
                <a
                  href="/"
                  css={tw`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                  role="menuitem"
                >
                  Settings
                </a>
                <a
                  href="/"
                  css={tw`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100`}
                  role="menuitem"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export { Component };
