import { useState } from "react";
import { CgDarkMode } from "react-icons/cg";
import { GiWorld } from "react-icons/gi";
import {
  RiMessage2Fill,
  RiLockPasswordLine,
  RiLogoutBoxLine,
  RiUserLine,
  RiShoppingCartLine,
  RiBillLine,
  RiHistoryLine,
} from "react-icons/ri";
import { IoNotificationsCircle } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

function Navbar({ sidebarHandler, isOpen }) {
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const profileOpen = Boolean(profileAnchorEl);
  const notificationOpen = Boolean(notificationAnchorEl);

  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };

  const handleNotificationClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleMenuItemClick = (action) => {
    handleProfileClose();
    // Add your action handlers here
    switch (action) {
      case "account":
        console.log("My Account clicked");
        break;
      case "password":
        console.log("Reset Password clicked");
        break;
      case "logout":
        console.log("Logout clicked");
        break;
      default:
        break;
    }
  };

  const handleNotificationItemClick = (action) => {
    handleNotificationClose();
    // Add your notification action handlers here
    switch (action) {
      case "checkout":
        console.log("Checkout clicked");
        break;
      case "orders":
        console.log("Orders clicked");
        break;
      case "history":
        console.log("History clicked");
        break;
      default:
        break;
    }
  };

  return (
    <nav
      className={`fixed top-0 right-0 h-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] backdrop-blur-sm z-50 transition-all duration-300 ${
        isOpen ? "w-[calc(100%-16rem)]" : "w-full"
      }`}
    >
      <div className="h-full px-4 md:px-6 flex items-center justify-between">
        {/* Left Section - Logo and Hamburger */}
        <div className="flex items-center space-x-2">
          <button
            onClick={sidebarHandler}
            className="text-white p-2 hover:bg-white/20 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="text-white font-bold text-xl hidden sm:block bg-gradient-to-r from-purple-500/30 to-pink-500/30 px-4 py-1 rounded-lg backdrop-blur-sm border border-white/10 shadow-lg">
            Logo
          </div>
        </div>

        {/* Center Section - Search and Icons */}
        <div className="flex-1 flex items-center justify-center max-w-2xl mx-4 md:mx-8">
          <div className="flex items-center space-x-2 md:space-x-4 w-full">
            {/* Search Bar - Hidden on mobile unless toggled */}
            <div
              className={`flex-1 ${showSearch ? "block" : "hidden md:block"}`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 rounded-lg bg-white/15 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500/50 backdrop-blur-sm transition-all duration-200 hover:bg-white/20 border border-white/10 shadow-lg"
              />
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-1 md:space-x-3">
              {/* Search Toggle for Mobile */}
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="md:hidden text-white hover:text-white/80 transition-all duration-200 hover:bg-white/20 p-2 rounded-full hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              <button className="text-white hover:text-white/80 transition-all duration-200 hover:bg-white/20 p-2 rounded-full hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-purple-500/20">
                <GiWorld className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-white/80 transition-all duration-200 hover:bg-white/20 p-2 rounded-full hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-purple-500/20">
                <RiMessage2Fill className="w-5 h-5" />
              </button>
              <button
                onClick={handleNotificationClick}
                className="text-white hover:text-white/80 transition-all duration-200 hover:bg-white/20 p-2 rounded-full hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-purple-500/20 relative"
              >
                <IoNotificationsCircle className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-xs text-white flex items-center justify-center animate-pulse shadow-lg shadow-red-500/30">
                  3
                </span>
              </button>
              <Menu
                anchorEl={notificationAnchorEl}
                id="notification-menu"
                open={notificationOpen}
                onClose={handleNotificationClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900">
                    Notifications
                  </h3>
                </div>
                <MenuItem
                  onClick={() => handleNotificationItemClick("checkout")}
                >
                  <ListItemIcon>
                    <RiShoppingCartLine className="w-5 h-5" />
                  </ListItemIcon>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">New Order</span>
                    <span className="text-xs text-gray-500">
                      Order #12345 has been placed
                    </span>
                  </div>
                </MenuItem>
                <MenuItem onClick={() => handleNotificationItemClick("orders")}>
                  <ListItemIcon>
                    <RiBillLine className="w-5 h-5" />
                  </ListItemIcon>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">
                      Payment Received
                    </span>
                    <span className="text-xs text-gray-500">
                      Payment for order #12345 received
                    </span>
                  </div>
                </MenuItem>
                <MenuItem
                  onClick={() => handleNotificationItemClick("history")}
                >
                  <ListItemIcon>
                    <RiHistoryLine className="w-5 h-5" />
                  </ListItemIcon>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Order Shipped</span>
                    <span className="text-xs text-gray-500">
                      Order #12345 has been shipped
                    </span>
                  </div>
                </MenuItem>
                <Divider />
                <MenuItem className="text-center text-sm text-purple-600 hover:bg-purple-50">
                  View All Notifications
                </MenuItem>
              </Menu>
              <button className="text-white hover:text-white/80 transition-all duration-200 hover:bg-white/20 p-2 rounded-full hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-purple-500/20">
                <CgDarkMode className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - User Profile */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="relative group">
            <button
              onClick={handleProfileClick}
              className="flex items-center space-x-2 text-white hover:bg-white/20 p-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 flex items-center justify-center backdrop-blur-sm ring-2 ring-white/30 shadow-lg">
                <span className="text-sm font-medium">JD</span>
              </div>
              <span className="text-sm hidden md:block">John Doe</span>
            </button>
            <Menu
              anchorEl={profileAnchorEl}
              id="account-menu"
              open={profileOpen}
              onClose={handleProfileClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={() => handleMenuItemClick("account")}>
                <ListItemIcon>
                  <RiUserLine className="w-5 h-5" />
                </ListItemIcon>
                My Account
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("password")}>
                <ListItemIcon>
                  <RiLockPasswordLine className="w-5 h-5" />
                </ListItemIcon>
                Reset Password
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => handleMenuItemClick("logout")}>
                <ListItemIcon>
                  <RiLogoutBoxLine className="w-5 h-5" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
