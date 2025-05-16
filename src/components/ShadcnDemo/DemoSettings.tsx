import {Button} from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {Label} from '@/components/ui/label'
import {Switch} from '@/components/ui/switch'
import {Separator} from '@/components/ui/separator'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'
import {useTheme, type ThemeType} from '@/lib/useTheme'

export const DemoSettings = () => {
  const {theme, setTheme} = useTheme()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Manage your preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Notifications</p>
            <p className="text-sm text-muted-foreground">Receive email notifications</p>
          </div>
          <Switch />
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Dark Mode</p>
            <p className="text-sm text-muted-foreground">Toggle dark mode theme</p>
          </div>
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={(checked) => {
              setTheme(checked ? 'dark' : 'light')
            }}
          />
        </div>

        <Separator />

        <div className="space-y-2">
          <Label htmlFor="theme">Theme</Label>
          <Select value={theme} onValueChange={(value) => setTheme(value as ThemeType)}>
            <SelectTrigger id="theme">
              <SelectValue placeholder="Select theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="system">System</SelectItem>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save Settings</Button>
      </CardFooter>
    </Card>
  )
}
