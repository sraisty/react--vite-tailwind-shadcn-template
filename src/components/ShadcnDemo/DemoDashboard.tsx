import {Button} from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {Badge} from '@/components/ui/badge'
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert'
import {Check, Info, Plus} from 'lucide-react'
import {useState} from 'react'

export const DemoDashboard = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Alert className="mb-4">
        <Info className="h-4 w-4" />
        <AlertTitle>Welcome to your dashboard!</AlertTitle>
        <AlertDescription>
          This is a showcase of shadcn/ui components in a React + Vite + Tailwind + Recharts
          project.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Clicks</CardTitle>
            <CardDescription>Track how many times you clicked the button</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">{count}</div>
          </CardContent>
          <CardFooter>
            <Button onClick={() => setCount(count + 1)}>
              <Plus className="mr-2 h-4 w-4" /> Increment
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
            <CardDescription>Your project setup progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>React</span>
              </div>
              <Badge variant="outline">Complete</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Vite</span>
              </div>
              <Badge variant="outline">Complete</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Tailwind</span>
              </div>
              <Badge variant="outline">Complete</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>shadcn/ui</span>
              </div>
              <Badge variant="outline">Complete</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks for your project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start">
              <Plus className="mr-2 h-4 w-4" /> New Component
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Info className="mr-2 h-4 w-4" /> Documentation
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
