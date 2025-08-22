"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

interface PersonalMetricsProps {
  userStats: {
    animalsRescued: number
    totalDonations: number
    volunteerHours: number
    successStories: number
  }
}

export function PersonalMetrics({ userStats }: PersonalMetricsProps) {
  const donationData = [
    { month: "Jan", amount: 2500 },
    { month: "Feb", amount: 1800 },
    { month: "Mar", amount: 3200 },
    { month: "Apr", amount: 2100 },
    { month: "May", amount: 2800 },
    { month: "Jun", amount: 3300 },
  ]

  const activityData = [
    { name: "Rescue Reports", value: 45, color: "#10b981" },
    { name: "Donations", value: 30, color: "#3b82f6" },
    { name: "Volunteer Work", value: 25, color: "#8b5cf6" },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">📊 Donation History</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={donationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${value}`, "Amount"]} />
              <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total donated: <span className="font-semibold">₹{userStats.totalDonations.toLocaleString()}</span>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">🎯 Activity Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={activityData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {activityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, "Contribution"]} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {activityData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="text-sm font-medium">{item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
