"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"
import { TrendingUp, Users, Target, DollarSign } from "lucide-react"

export function FundingProgress() {
  const [fundingData, setFundingData] = useState([
    { month: "Jan", total: 125000, donors: 450 },
    { month: "Feb", total: 180000, donors: 620 },
    { month: "Mar", total: 245000, donors: 780 },
    { month: "Apr", total: 320000, donors: 950 },
    { month: "May", total: 410000, donors: 1200 },
    { month: "Jun", total: 525000, donors: 1450 },
  ])

  const [currentTotal, setCurrentTotal] = useState(525000)
  const [monthlyTarget] = useState(600000)

  // Simulate real-time funding updates
  useEffect(() => {
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 1000) + 100
      setCurrentTotal((prev) => prev + increment)

      // Update the latest month's data
      setFundingData((prev) => {
        const updated = [...prev]
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          total: updated[updated.length - 1].total + increment,
          donors: updated[updated.length - 1].donors + Math.floor(Math.random() * 3),
        }
        return updated
      })
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const progressPercentage = (currentTotal / monthlyTarget) * 100

  const impactData = [
    { category: "Emergency Rescues", funded: 45, total: 60 },
    { category: "Medical Treatment", funded: 120, total: 150 },
    { category: "Shelter Support", funded: 30, total: 40 },
    { category: "Rehabilitation", funded: 25, total: 35 },
  ]

  return (
    <div className="space-y-6">
      {/* Real-time Funding Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-sm text-green-700 dark:text-green-300">Total Raised</p>
                <p className="text-xl font-bold text-green-900 dark:text-green-100">₹{currentTotal.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-sm text-blue-700 dark:text-blue-300">Active Donors</p>
                <p className="text-xl font-bold text-blue-900 dark:text-blue-100">1,450+</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-sm text-purple-700 dark:text-purple-300">Monthly Goal</p>
                <p className="text-xl font-bold text-purple-900 dark:text-purple-100">
                  {progressPercentage.toFixed(1)}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              <div>
                <p className="text-sm text-orange-700 dark:text-orange-300">Growth Rate</p>
                <p className="text-xl font-bold text-orange-900 dark:text-orange-100">+28%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Funding Progress Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📈 Cumulative Funding Progress
            <span className="text-sm font-normal text-gray-500">(Updates every 30 seconds)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={fundingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`} />
              <Tooltip
                formatter={(value, name) => [
                  name === "total" ? `₹${value.toLocaleString()}` : value,
                  name === "total" ? "Total Raised" : "Donors",
                ]}
              />
              <Area type="monotone" dataKey="total" stroke="#10b981" fill="url(#colorTotal)" strokeWidth={2} />
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Monthly Target Progress */}
      <Card>
        <CardHeader>
          <CardTitle>🎯 Monthly Target Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Current Progress</span>
              <span className="text-sm text-gray-600">
                ₹{currentTotal.toLocaleString()} / ₹{monthlyTarget.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
              <div
                className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${Math.min(progressPercentage, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              {progressPercentage >= 100
                ? "🎉 Target achieved!"
                : `₹${(monthlyTarget - currentTotal).toLocaleString()} remaining to reach monthly goal`}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Impact Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>🐾 Funding Impact Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {impactData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.category}</span>
                  <span className="text-sm text-gray-600">
                    {item.funded}/{item.total} cases
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${(item.funded / item.total) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
