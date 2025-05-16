import {useState} from 'react'

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {Label} from '@/components/ui/label'
import {Bell} from 'lucide-react'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'

import {ThemeToggle} from './ThemeToggle'
import {DemoDashboard} from './DemoDashboard'
import {DemoComponents} from './DemoComponent'
import {DemoSettings} from './DemoSettings'
import {DemoCharts} from './DemoCharts'
import {DemoMap} from './DemoMap'

export function ShadcnDemo() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-slate-50 p-8 dark:bg-slate-950">
      <header className="container mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-primary p-2 text-primary-foreground">
              <Bell size={24} />
            </div>
            <h1 className="text-2xl font-bold">Shadcn UI Demo</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Label htmlFor="dark-mode">Dark Mode</Label>
              <ThemeToggle />
            </div>
            <Avatar>
              <AvatarImage src="/sue.png" alt="User" />
              <AvatarFallback>SR</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="container mx-auto">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="demodashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="democomponents">Components</TabsTrigger>
            <TabsTrigger value="democharts">Charts</TabsTrigger>
            <TabsTrigger value="demomap">Map</TabsTrigger>
            <TabsTrigger value="demosettings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="demodashboard" className="mt-6 space-y-4">
            <DemoDashboard />
          </TabsContent>
          <TabsContent value="democomponents" className="mt-6 space-y-4">
            <DemoComponents />
          </TabsContent>
          <TabsContent value="democharts" className="mt-6">
            <DemoCharts />
          </TabsContent>
          <TabsContent value="demomap" className="mt-6">
            <DemoMap />
          </TabsContent>
          <TabsContent value="demosettings" className="mt-6">
            <DemoSettings />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="container mx-auto mt-8 text-center text-sm text-muted-foreground">
        <p>Created with React, Vite, Tailwind CSS, ReCharts, Tailwind, and shadcn/ui</p>
      </footer>
    </div>
  )
}
