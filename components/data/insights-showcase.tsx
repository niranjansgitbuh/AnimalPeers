"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, PieChart, LineChart, Database, FileText, Building, Lock } from "lucide-react"

export function DataInsightsShowcase() {
  const dataProducts = [
    {
      id: "data-1",
      title: "Animal Welfare Research Data",
      description: "Anonymized datasets for academic and research institutions",
      price: "Starting at ₹25,000",
      icon: Database,
      features: [
        "Anonymized animal rescue data",
        "Health condition statistics",
        "Geographical distribution",
        "Seasonal trends",
        "Custom data queries available",
      ],
      forType: "research",
    },
    {
      id: "data-2",
      title: "Government Policy Reports",
      description: "Comprehensive reports for government agencies and policymakers",
      price: "Starting at ₹50,000",
      icon: FileText,
      features: [
        "Stray animal population analysis",
        "Intervention effectiveness metrics",
        "Regional comparison reports",
        "Policy recommendation data",
        "Quarterly trend analysis",
      ],
      forType: "government",
    },
    {
      id: "data-3",
      title: "Industry Market Insights",
      description: "Valuable market data for pet care companies and service providers",
      price: "Starting at ₹75,000",
      icon: Building,
      features: [
        "Pet product needs analysis",
        "Service gap identification",
        "Consumer behavior insights",
        "Regional market opportunities",
        "Competitive landscape data",
      ],
      forType: "industry",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Data Insights & Analytics</h2>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          Leveraging our extensive animal welfare data to provide valuable insights while supporting our mission
        </p>
      </div>

      <Tabs defaultValue="research">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="research">Research Institutions</TabsTrigger>
          <TabsTrigger value="government">Government Agencies</TabsTrigger>
          <TabsTrigger value="industry">Industry Partners</TabsTrigger>
        </TabsList>

        {["research", "government", "industry"].map((tabValue) => (
          <TabsContent key={tabValue} value={tabValue} className="space-y-6 pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      {tabValue === "research"
                        ? "Research Data Products"
                        : tabValue === "government"
                          ? "Government Insight Reports"
                          : "Industry Market Analytics"}
                    </CardTitle>
                    <CardDescription>
                      {tabValue === "research"
                        ? "For academic and research institutions"
                        : tabValue === "government"
                          ? "For policy makers and government agencies"
                          : "For pet care companies and service providers"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {dataProducts
                      .filter((product) => product.forType === tabValue)
                      .map((product) => (
                        <div key={product.id} className="rounded-lg border p-4">
                          <div className="mb-4 flex items-start gap-3">
                            <div className="rounded-full bg-primary/10 p-2">
                              <product.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-medium">{product.title}</h3>
                              <p className="text-sm text-muted-foreground">{product.description}</p>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <p className="text-sm font-medium">Includes:</p>
                            <ul className="space-y-1">
                              {product.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <span className="select-none">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-4 flex items-center justify-between">
                            <span className="font-medium">{product.price}</span>
                            <Button size="sm">Request Access</Button>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Sample Insights</CardTitle>
                    <CardDescription>Examples of the data insights we provide</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-lg border p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="font-medium">
                          {tabValue === "research"
                            ? "Animal Condition Distribution"
                            : tabValue === "government"
                              ? "Rescue Response Effectiveness"
                              : "Pet Product Needs Analysis"}
                        </h4>
                        <div className="rounded-full bg-primary/10 p-1">
                          {tabValue === "research" ? (
                            <PieChart className="h-4 w-4 text-primary" />
                          ) : tabValue === "government" ? (
                            <BarChart className="h-4 w-4 text-primary" />
                          ) : (
                            <LineChart className="h-4 w-4 text-primary" />
                          )}
                        </div>
                      </div>

                      <div className="aspect-[16/9] rounded-md bg-muted p-4">
                        <div className="flex h-full items-center justify-center">
                          <p className="text-center text-sm text-muted-foreground">
                            [Sample chart visualization would appear here]
                          </p>
                        </div>
                      </div>

                      <p className="mt-2 text-sm text-muted-foreground">
                        {tabValue === "research"
                          ? "Analysis of health conditions across 10,000+ animal rescue cases"
                          : tabValue === "government"
                            ? "Comparison of response times and outcomes across different regions"
                            : "Identification of product needs based on animal health conditions"}
                      </p>
                    </div>

                    <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950">
                      <Lock className="mt-0.5 h-5 w-5 text-amber-600" />
                      <div>
                        <h4 className="font-medium text-amber-800">Data Privacy & Ethics</h4>
                        <p className="text-sm text-amber-700">
                          All data is anonymized and ethically sourced. We follow strict privacy guidelines and only
                          share data that cannot be used to identify individuals or specific animals. Revenue from data
                          services directly supports our animal rescue operations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Database className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">Custom Data Solutions</h3>
                        <p className="text-sm text-muted-foreground">
                          Need specialized data or insights? We can create custom data products tailored to your
                          specific requirements.
                        </p>
                      </div>
                      <Button>Contact Data Team</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
