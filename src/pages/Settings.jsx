import { useState } from "react";
import Panel from "../components/Panel.jsx";

export default function Settings() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);

  const handleLogout = () => {
    alert("You have been logged out.");
    // TODO: Add your real logout logic here (e.g., clear tokens + redirect)
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-wide mb-4">SETTINGS</h1>

      {/* ===== PROFILE SETTINGS ===== */}
      <Panel title="Profile Settings">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left - Profile Info */}
          <div className="flex items-center space-x-4">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="Profile Avatar"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <label className="block text-sm text-neutral-400 mb-1">Name</label>
              <input
                type="text"
                value="King Buwa"
                readOnly
                className="bg-neutral-800 text-white px-3 py-2 rounded-md w-64"
              />

              <label className="block text-sm text-neutral-400 mt-4 mb-1">
                Email
              </label>
              <input
                type="email"
                value="buwaking@gmail.com"
                readOnly
                className="bg-neutral-800 text-white px-3 py-2 rounded-md w-64"
              />
            </div>
          </div>

          {/* Right - Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-6 md:mt-0 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md transition-all"
          >
            Logout
          </button>
        </div>
      </Panel>

      {/* ===== SECURITY SETTINGS ===== */}
      <Panel title="Security">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
          {/* Password Reset */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium">
            Send Password Link
          </button>

          {/* Two-Factor Authentication */}
          <div className="flex items-center space-x-4">
            <label htmlFor="twoFactor" className="text-sm text-neutral-300">
              Two-Factor Authentication
            </label>
            <input
              id="twoFactor"
              type="checkbox"
              checked={twoFactorEnabled}
              onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className="w-5 h-5 accent-blue-600 cursor-pointer"
            />
          </div>
        </div>
      </Panel>

      {/* ===== SUBSCRIPTION INFO ===== */}
      <Panel title="Subscription Details">
        <p className="text-sm text-neutral-300 mb-2">Plan: Pro</p>
        <p className="text-sm text-neutral-300 mb-2">Status: Active</p>
        <p className="text-sm text-neutral-300 mb-2">
          Next Billing Date: Oct 05, 2025
        </p>
        <p className="text-sm text-neutral-300 mb-2">Amount: $29/month</p>
        <p className="text-sm text-neutral-300 mb-4">
          Payment Method: ***** 4242 (Visa)
        </p>

        <div className="flex space-x-4">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md font-medium">
            Upgrade to Premium
          </button>
          <button className="bg-neutral-700 hover:bg-neutral-800 text-white px-5 py-2 rounded-md font-medium">
            Cancel Subscription
          </button>
        </div>
      </Panel>

      {/* ===== PREFERENCES & SYSTEM INFO ===== */}
      <div className="grid md:grid-cols-2 gap-6">
        <Panel title="Preferences">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="darkMode" className="text-sm text-neutral-300">
                Dark Mode
              </label>
              <input type="checkbox" id="darkMode" className="w-5 h-5 accent-blue-600" />
            </div>

            <div className="flex items-center space-x-4">
              <label htmlFor="notifications" className="text-sm text-neutral-300">
                Notifications
              </label>
              <input type="checkbox" id="notifications" className="w-5 h-5 accent-blue-600" />
            </div>
          </div>
        </Panel>

        <Panel title="System Info">
          <p className="text-sm text-neutral-300 mb-2">Dashboard Version: v1.0.0</p>
          <p className="text-sm text-neutral-300 mb-4">Last Updated: Sep 05, 2025</p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium">
            Check for Updates
          </button>
        </Panel>
      </div>
    </div>
  );
}

