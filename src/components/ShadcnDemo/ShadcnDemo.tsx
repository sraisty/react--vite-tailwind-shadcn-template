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
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="charts">Charts</TabsTrigger>
            <TabsTrigger value="charts">Map</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6 space-y-4">
            <DemoDashboard />
          </TabsContent>

          <TabsContent value="components" className="mt-6 space-y-4">
            <DemoComponents />
          </TabsContent>

          <TabsContent value="charts" className="mt-6">
            <DemoCharts />
          </TabsContent>
          <TabsContent value="map" className="mt-6">
            <DemoMap />
          </TabsContent>
          <TabsContent value="settings" className="mt-6">
            <DemoSettings />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="container mx-auto mt-8 text-center text-sm text-muted-foreground">
        <p>Created with React, Vite, Tailwind CSS, and shadcn/ui</p>
      </footer>
    </div>
  )
}
