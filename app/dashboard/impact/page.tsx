"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Calendar, TrendingUp, Award, Share2, Download } from "lucide-react"
import { PersonalMetrics } from "@/components/dashboard/impact/personal-metrics"
import { FundingProgress } from "@/components/dashboard/impact/funding-progress"
import { SuccessStories } from "@/components/dashboard/impact/success-stories"
import { ImpactTimeline } from "@/components/dashboard/impact/impact-timeline"
import { Achievements } from "@/components/dashboard/impact/achievements"
import { VolunteerStats } from "@/components/dashboard/impact/volunteer-stats"

export default function ImpactDashboard() {
  const [userStats, setUserStats] = useState({
    animalsRescued: 0,
    totalDonations: 0,
    volunteerHours: 0,
    successStories: 0,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch user impact data
    const fetchUserImpact = async () => {
      setLoading(true)
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setUserStats({
        animalsRescued: 23,
        totalDonations: 15750,
        volunteerHours: 48,
        successStories: 12,
      })
      setLoading(false)
    }

    fetchUserImpact()
  }, [])

  const handleShareImpact = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Animal Rescue Impact",
        text: `I've helped rescue ${userStats.animalsRescued} animals and donated ₹${userStats.totalDonations.toLocaleString()} through AnimalPeers!`,
        url: window.location.href,
      })
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(
        `I've helped rescue ${userStats.animalsRescued} animals through AnimalPeers! Join me in making a difference.`,
      )
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader className="pb-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Impact Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Track your contribution to animal welfare and see the difference you're making
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={handleShareImpact} variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share Impact
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-800 dark:text-green-200">Animals Rescued</CardTitle>
            <Heart className="h-4 w-4 text-green-600 dark:text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">{userStats.animalsRescued}</div>
            <p className="text-xs text-green-700 dark:text-green-300">+3 this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-800 dark:text-blue-200">Total Donations</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
              ₹{userStats.totalDonations.toLocaleString()}
            </div>
            <p className="text-xs text-blue-700 dark:text-blue-300">+₹2,500 this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-800 dark:text-purple-200">Volunteer Hours</CardTitle>
            <Calendar className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">{userStats.volunteerHours}h</div>
            <p className="text-xs text-purple-700 dark:text-purple-300">+8h this month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-800 dark:text-orange-200">Success Stories</CardTitle>
            <Award className="h-4 w-4 text-orange-600 dark:text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900 dark:text-orange-100">{userStats.successStories}</div>
            <p className="text-xs text-orange-700 dark:text-orange-300">+2 this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="funding">Funding</TabsTrigger>
          <TabsTrigger value="stories">Stories</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <PersonalMetrics userStats={userStats} />
            <VolunteerStats />
          </div>
        </TabsContent>

        <TabsContent value="funding" className="space-y-6">
          <FundingProgress />
        </TabsContent>

        <TabsContent value="stories" className="space-y-6">
          <SuccessStories />
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <ImpactTimeline />
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <Achievements userStats={userStats} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
