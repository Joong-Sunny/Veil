/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ci9yYU77v7L
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1" className="w-screen h-full">
      <Card className="w-full max-w-xs sm:max-w-2xl mx-auto">
        <CardHeader className="max-w-xs mx-auto">
          <CardTitle>Manage Your Profile</CardTitle>
          <CardDescription>Update your personal details and preferences.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-8">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-6 sm:space-y-0">
            <Avatar className="h-24 w-24 mx-auto sm:mx-0">
              <AvatarImage alt="User avatar" src="/placeholder.svg?height=96&width=96" />
              <AvatarFallback>AB</AvatarFallback>
              <span className="sr-only">Your current profile image</span>
            </Avatar>
            <div className="space-y-2">
              <Label htmlFor="avatar">Profile Image</Label>
              <Input id="avatar" type="file" />
              <p className="text-sm text-gray-500">Choose a new profile image.</p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="introduction">Personal Introduction</Label>
            <Textarea className="min-h-[200px]" id="introduction" placeholder="Tell something about yourself" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mbti">MBTI Type</Label>
            <Select id="mbti" placeholder="Select your MBTI type">
              <option value="">Select your MBTI type</option>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="residence">Residence</Label>
            <Select id="residence" placeholder="Select your residence">
              <option value="">Select your residence</option>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Height</Label>
            <Select id="height" placeholder="Select your height">
              <option value="">Select your height</option>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="hobby">Hobby</Label>
            <Select id="hobby" placeholder="Select your hobby">
              <option value="">Select your hobby</option>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full sm:ml-auto">Save Changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

