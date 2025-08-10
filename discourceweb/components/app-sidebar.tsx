import { CircleAlert, DoorOpen, DoorOpenIcon, HomeIcon, InboxIcon, NotebookPenIcon, SettingsIcon } from "lucide-react"

const MenuItems = [
  {
    title: "Dashboard",
    icon: HomeIcon,
    onClick: ()=>{console.log("Clicked: Dashboard")},
  },
    {
    title: "Inbox",
    icon: InboxIcon,
    onClick: ()=>{console.log("Clicked: Inbox")},
  },
    {
    title: "Assignments",
    icon: NotebookPenIcon,
    onClick: ()=>{console.log("Clicked: Assignment")},
  },
]

const SettingsItems = [
  {
    title: "Settings",
    icon: HomeIcon,
    onClick: ()=>{console.log("Clicked: Dashboard")},
  },
    {
    title: "Logout",
    icon: DoorOpenIcon,
    onClick: ()=>{console.log("Clicked: Assignment")},
  },
]

export function SideNav() {
  return (
    <div className="SideNav">
        <div className="Header">
          <CircleAlert/>
          <h1 className="text-2xl text-slate-500">Discourse</h1>
        </div>

        <div className="Header Overview">
          
          <div className="NavBarList">
            Overview
            {MenuItems.map((item) => (
              <button key={item.title}>
                <item.icon/>
                <span>{item.title}</span>
              </button>
            ))}
          </div>
          
          
          <div className="NavBarList Footer">
            Settings
            {SettingsItems.map((item) => (
              <button key={item.title}>
                <item.icon/>
                <span>{item.title}</span>
              </button>
            ))}
          </div>
        </div>
    </div>
  )
}