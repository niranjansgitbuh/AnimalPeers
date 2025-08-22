"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Lock, FileText, Users, AlertTriangle, Check } from "lucide-react"

export function DataEthics() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          <Shield className="h-4 w-4" />
          Data Ethics & Privacy
        </div>
        <h2 className="mt-4 text-3xl font-bold">Our Commitment to Ethical Data Use</h2>
        <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
          How we balance revenue generation with privacy and ethical considerations
        </p>
      </div>

      <Tabs defaultValue="privacy">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="privacy">Data Privacy</TabsTrigger>
          <TabsTrigger value="ethics">Ethical Framework</TabsTrigger>
          <TabsTrigger value="governance">Data Governance</TabsTrigger>
        </TabsList>

        <TabsContent value="privacy" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Data Privacy Principles</CardTitle>
                  <CardDescription>How we protect user and animal data</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Data Anonymization</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      All personal data is anonymized before being used for analytics or shared with partners. We remove
                      all personally identifiable information and use aggregation techniques to ensure individuals
                      cannot be identified from the data.
                    </p>
                    <div className="mt-4 rounded-md bg-muted p-3">
                      <h4 className="text-sm font-medium">Example:</h4>
                      <p className="text-sm text-muted-foreground">
                        Instead of "Rahul Sharma reported an injured dog at 123 Main St on June 15th at 10:30 AM", we
                        would store "User reported an injured dog in Koramangala area in June".
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Explicit Consent</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      We obtain clear, explicit consent before collecting or using any data. Users can review and modify
                      their consent preferences at any time through their account settings.
                    </p>
                    <div className="mt-4 grid gap-2">
                      <div className="flex items-center gap-2 rounded-md border p-2">
                        <Check className="h-4 w-4 text-primary" />
                        <p className="text-sm">Granular consent options for different data types</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-md border p-2">
                        <Check className="h-4 w-4 text-primary" />
                        <p className="text-sm">Easy-to-understand consent language</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-md border p-2">
                        <Check className="h-4 w-4 text-primary" />
                        <p className="text-sm">One-click consent withdrawal</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Data Minimization</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      We collect only the data necessary for the specific purpose it will be used for. We regularly
                      review our data collection practices to ensure we're not collecting unnecessary information.
                    </p>
                    <div className="mt-4 rounded-md bg-muted p-3">
                      <h4 className="text-sm font-medium">Our Process:</h4>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="select-none">1.</span>
                          <span>Identify the minimum data needed for each feature</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="select-none">2.</span>
                          <span>Quarterly data collection audits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="select-none">3.</span>
                          <span>Automatic data purging for unnecessary information</span>
                        </li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Secure Storage & Transmission</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      All data is encrypted both in transit and at rest using industry-standard encryption protocols. We
                      implement strict access controls and regular security audits to protect user information.
                    </p>
                    <div className="mt-4 grid gap-2">
                      <div className="flex items-center gap-2 rounded-md border p-2">
                        <Check className="h-4 w-4 text-primary" />
                        <p className="text-sm">AES-256 encryption for stored data</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-md border p-2">
                        <Check className="h-4 w-4 text-primary" />
                        <p className="text-sm">TLS 1.3 for all data transmissions</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-md border p-2">
                        <Check className="h-4 w-4 text-primary" />
                        <p className="text-sm">Regular penetration testing by third-party security firms</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-2">
                <FileText className="h-4 w-4" />
                View Full Privacy Policy
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="ethics" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Ethical Framework</CardTitle>
                  <CardDescription>Our principles for ethical data use</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-500" />
                    <div>
                      <h4 className="font-medium">Mission-First Approach</h4>
                      <p className="text-sm text-muted-foreground">
                        Our primary ethical principle is that all data monetization must directly support our mission of
                        animal welfare. We will never compromise animal welfare for financial gain.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Our Ethical Principles:</h4>

                  <div className="rounded-md border p-4">
                    <h5 className="mb-2 font-medium">1. Do No Harm</h5>
                    <p className="text-sm text-muted-foreground">
                      We ensure that our data practices never cause harm to animals, users, or organizations. This
                      includes preventing misuse of location data that could endanger animals or rescuers.
                    </p>
                  </div>

                  <div className="rounded-md border p-4">
                    <h5 className="mb-2 font-medium">2. Transparency</h5>
                    <p className="text-sm text-muted-foreground">
                      We are completely transparent about how data is used, who it is shared with, and how revenue from
                      data services is allocated. All data partnerships are publicly disclosed.
                    </p>
                  </div>

                  <div className="rounded-md border p-4">
                    <h5 className="mb-2 font-medium">3. Informed Consent</h5>
                    <p className="text-sm text-muted-foreground">
                      We obtain explicit, informed consent before using any data for purposes beyond direct animal
                      rescue. Users can withdraw consent at any time without affecting access to essential services.
                    </p>
                  </div>

                  <div className="rounded-md border p-4">
                    <h5 className="mb-2 font-medium">4. Equitable Access</h5>
                    <p className="text-sm text-muted-foreground">
                      Essential animal rescue services are always available to everyone regardless of ability to pay.
                      Premium features never restrict access to critical animal welfare functions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="governance" className="space-y-6 pt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Data Governance</CardTitle>
                  <CardDescription>How we oversee and manage data practices</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-md border p-4">
                  <h4 className="mb-2 font-medium">Ethics Committee</h4>
                  <p className="text-sm text-muted-foreground">
                    Our independent Ethics Committee reviews all data partnerships and monetization strategies. The
                    committee includes animal welfare experts, data privacy specialists, and community representatives.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    <div className="rounded-md bg-muted p-2 text-center text-xs">Quarterly Reviews</div>
                    <div className="rounded-md bg-muted p-2 text-center text-xs">Public Reports</div>
                    <div className="rounded-md bg-muted p-2 text-center text-xs">Veto Authority</div>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <h4 className="mb-2 font-medium">Data Impact Assessments</h4>
                  <p className="text-sm text-muted-foreground">
                    Before implementing any new data collection or monetization strategy, we conduct a thorough Data
                    Impact Assessment to identify and mitigate potential ethical risks.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <p className="text-sm">Privacy impact analysis</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <p className="text-sm">Mission alignment verification</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <p className="text-sm">Stakeholder consultation</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border p-4">
                  <h4 className="mb-2 font-medium">Regular Audits</h4>
                  <p className="text-sm text-muted-foreground">
                    We conduct regular audits of our data practices to ensure compliance with our ethical framework and
                    privacy policies. Results are published in our annual transparency report.
                  </p>
                </div>

                <div className="rounded-md border p-4">
                  <h4 className="mb-2 font-medium">User Feedback Channels</h4>
                  <p className="text-sm text-muted-foreground">
                    We maintain open channels for users to provide feedback on our data practices and raise concerns.
                    All feedback is reviewed by our Ethics Committee.
                  </p>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      Submit Feedback or Concern
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full gap-2">
                <FileText className="h-4 w-4" />
                Download Data Governance Framework
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
