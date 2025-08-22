"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Clock, Users, MapPin, Calendar } from "lucide-react"

export function VolunteerStats() {
  const volunteerData = [
    { activity: "Rescue Ops", hours: 12, count: 8 },
    { activity: "Awareness", hours: 15, count: 5 },
    { activity: "Fundraising", hours: 8, count: 3 },
    { activity: "Medical Aid", hours: 10, count: 6 },
    { activity: "Adoption", hours: 3, count: 2 },
  ]

  const upcomingEvents = [
    {
      id: "1",
      title: "Weekend Rescue Drive",
      date: "2024-07-15",
      location: "Mumbai Central",
      volunteers: 25,
      registered: true,
    },
    {
      id: "2",
      title: "Animal Awareness Campaign",
      date: "2024-07-20",
      location: "Delhi University",
      volunteers: 40,
      registered: false,
    },
    {
      id: "3",
      title: "Vaccination Drive",
      date: "2024-07-25",
      location: "Bangalore Park",
      volunteers: 15,
      registered: true,
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">⏰ Volunteer Activity Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={volunteerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="activity" />
              <YAxis />
              <Tooltip
                formatter={(value, name) => [
                  name === "hours" ? `${value} hours` : `${value} activities`,
                  name === "hours" ? "Time Spent" : "Activities",
                ]}
              />
              <Bar dataKey="hours" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">📅 Upcoming Volunteer Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className={`p-4 rounded-lg border ${
                  event.registered
                    ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                    : "bg-gray-50 border-gray-200 dark:bg-gray-900/20 dark:border-gray-800"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                  {event.registered && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full dark:bg-green-900/30 dark:text-green-300">
                      Registered
                    </span>
                  )}
                </div>

                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {event.volunteers} volunteers needed
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">📊 Your Volunteer Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg dark:bg-blue-900/20">
              <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">48h</div>
              <div className="text-sm text-blue-700 dark:text-blue-300">Total Hours</div>
            </div>

            <div className="text-center p-4 bg-green-50 rounded-lg dark:bg-green-900/20">
              <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-900 dark:text-green-100">24</div>
              <div className="text-sm text-green-700 dark:text-green-300">Activities</div>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-lg dark:bg-purple-900/20">
              <MapPin className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">8</div>
              <div className="text-sm text-purple-700 dark:text-purple-300">Locations</div>
            </div>

            <div className="text-center p-4 bg-orange-50 rounded-lg dark:bg-orange-900/20">
              <Calendar className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">6</div>
              <div className="text-sm text-orange-700 dark:text-orange-300">Months Active</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
