import Panel from "../components/Panel.jsx";

export default function Settings() {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold tracking-wide">SETTINGS</h1>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Profile Settings">
          <div className="flex items-center gap-4">
            <img
              src="https://avatars.githubusercontent.com/u/9919?v=4"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="grid gap-2 text-sm">
              <label className="grid gap-1">
                <span className="text-neutral-300">Name</span>
                <input className="rounded-md bg-neutral-800 px-3 py-2 outline-none ring-1 ring-neutral-700" defaultValue="King Buwa" />
              </label>
              <label className="grid gap-1">
                <span className="text-neutral-300">Email</span>
                <input className="rounded-md bg-neutral-800 px-3 py-2 outline-none ring-1 ring-neutral-700" defaultValue="buwaking@gmail.com" />
              </label>
            </div>
          </div>
        </Panel>

        <Panel title="Preferences">
          <div className="grid grid-cols-2 gap-4">
            <Toggle label="Dark Mode" defaultChecked />
            <Toggle label="Notifications" />
          </div>
        </Panel>

        <Panel title="Security">
          <div className="flex items-center gap-3">
            <button className="rounded-md bg-neutral-200/10 px-3 py-2 ring-1 ring-neutral-600">Send Password Link</button>
            <Toggle label="Two-Factor Auth" defaultChecked />
          </div>
        </Panel>

        <Panel title="System Info">
          <div className="text-sm">
            <div>Dashboard Version: v1.0.0</div>
            <div>Last Updated: Sep 05, 2025</div>
            <button className="mt-2 rounded-md bg-neutral-200/10 px-3 py-2 ring-1 ring-neutral-600">Check for Updates</button>
          </div>
        </Panel>

        <Panel title="Subscription Details">
          <div className="grid gap-2 text-sm">
            <div><span className="text-neutral-300">Plan:</span> Pro</div>
            <div><span className="text-neutral-300">Status:</span> Active</div>
            <div><span className="text-neutral-300">Next Billing Date:</span> Oct 05, 2025</div>
            <div><span className="text-neutral-300">Amount:</span> $29/month</div>
            <div><span className="text-neutral-300">Payment Method:</span> ***** 4242 (Visa)</div>

            <div className="mt-3 flex gap-3">
              <button className="rounded-md bg-neutral-200/10 px-3 py-2 ring-1 ring-neutral-600">Upgrade to Premium</button>
              <button className="rounded-md bg-neutral-200/10 px-3 py-2 ring-1 ring-neutral-600">Cancel Subscription</button>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}

function Toggle({ label, defaultChecked = false }) {
  return (
    <label className="flex cursor-pointer items-center justify-between rounded-md bg-neutral-800/60 px-3 py-2 ring-1 ring-neutral-700">
      <span className="text-sm">{label}</span>
      <input type="checkbox" defaultChecked={defaultChecked} className="h-4 w-4 accent-white" />
    </label>
  );
}

