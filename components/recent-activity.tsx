import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample data for recent activity
const activities = [
  {
    id: "1",
    type: "view",
    user: {
      name: "John Smith",
      avatar: "",
      initials: "JS",
    },
    card: "Business Card",
    time: "2 hours ago",
  },
  {
    id: "2",
    type: "scan",
    user: {
      name: "Sarah Johnson",
      avatar: "",
      initials: "SJ",
    },
    card: "Business Card",
    time: "5 hours ago",
  },
  {
    id: "3",
    type: "contact",
    user: {
      name: "Michael Brown",
      avatar: "",
      initials: "MB",
    },
    card: "Personal Portfolio",
    time: "1 day ago",
  },
  {
    id: "4",
    type: "view",
    user: {
      name: "Emily Davis",
      avatar: "",
      initials: "ED",
    },
    card: "Conference Card",
    time: "2 days ago",
  },
  {
    id: "5",
    type: "scan",
    user: {
      name: "Robert Wilson",
      avatar: "",
      initials: "RW",
    },
    card: "Business Card",
    time: "3 days ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              <span className="font-semibold">{activity.user.name}</span> {activity.type === "view" && "viewed your"}
              {activity.type === "scan" && "scanned your"}
              {activity.type === "contact" && "requested contact from your"}{" "}
              <span className="font-medium">{activity.card}</span>
            </p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

