"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, Heart, Target, Users, Calendar } from "lucide-react"

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  earned: boolean
  earnedDate?: string
  progress?: number
  maxProgress?: number
  category: "rescue" | "donation" | "volunteer" | "milestone"
}

interface AchievementsProps {
  userStats: {
    animalsRescued: number
    totalDonations: number
    volunteerHours: number
    successStories: number
  }
}

export function Achievements({ userStats }: AchievementsProps) {
  const achievements: Achievement[] = [
    {
      id: "1",
      title: "First Rescue",
      description: "Report your first animal rescue case",
      icon: <Heart className="h-6 w-6 text-red-500" />,
      earned: true,
      earnedDate: "2024-05-01",
      category: "rescue",
    },
    {
      id: "2",
      title: "Animal Guardian",
      description: "Help rescue 20 animals",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      earned: userStats.animalsRescued >= 20,
      earnedDate: userStats.animalsRescued >= 20 ? "2024-06-10" : undefined,
      progress: userStats.animalsRescued,
      maxProgress: 20,
      category: "rescue",
    },
    {
      id: "3",
      title: "Generous Heart",
      description: "Donate ₹10,000 or more",
      icon: <Star className="h-6 w-6 text-green-500" />,
      earned: userStats.totalDonations >= 10000,
      earnedDate: userStats.totalDonations >= 10000 ? "2024-05-15" : undefined,
      progress: userStats.totalDonations,
      maxProgress: 10000,
      category: "donation",
    },
    {
      id: "4",
      title: "Volunteer Champion",
      description: "Complete 50 volunteer hours",
      icon: <Users className="h-6 w-6 text-blue-500" />,
      earned: userStats.volunteerHours >= 50,
      progress: userStats.volunteerHours,
      maxProgress: 50,
      category: "volunteer",
    },
    {
      id: "5",
      title: "Life Saver",
      description: "Help rescue 50 animals",
      icon: <Target className="h-6 w-6 text-purple-500" />,
      earned: userStats.animalsRescued >= 50,
      progress: userStats.animalsRescued,
      maxProgress: 50,
      category: "rescue",
    },
    {
      id: "6",
      title: "Monthly Supporter",
      description: "Make donations for 6 consecutive months",
      icon: <Calendar className="h-6 w-6 text-orange-500" />,
      earned: false,
      progress: 4,
      maxProgress: 6,
      category: "donation",
    },
  ]

  const earnedAchievements = achievements.filter((a) => a.earned)
  const inProgressAchievements = achievements.filter((a) => !a.earned)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "rescue":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
      case "donation":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
      case "volunteer":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
      case "milestone":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      {/* Achievement Summary */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">🏆 Achievement Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{earnedAchievements.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{inProgressAchievements.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{userStats.animalsRescued}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Animals Helped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {Math.round((earnedAchievements.length / achievements.length) * 100)}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Completion</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Earned Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">✨ Earned Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {earnedAchievements.map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center gap-4 p-4 rounded-lg border bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-800"
              >
                <div className="flex-shrink-0">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                  {achievement.earnedDate && (
                    <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                      Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <Badge className={getCategoryColor(achievement.category)}>{achievement.category}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* In Progress Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">🎯 In Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inProgressAchievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center gap-4 p-4 rounded-lg border">
                <div className="flex-shrink-0 opacity-60">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{achievement.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{achievement.description}</p>
                  {achievement.progress !== undefined && achievement.maxProgress && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>
                          {achievement.progress} / {achievement.maxProgress}
                        </span>
                        <span>{Math.round((achievement.progress / achievement.maxProgress) * 100)}%</span>
                      </div>
                      <Progress value={(achievement.progress / achievement.maxProgress) * 100} className="h-2" />
                    </div>
                  )}
                </div>
                <Badge variant="outline" className={getCategoryColor(achievement.category)}>
                  {achievement.category}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
