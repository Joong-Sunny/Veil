/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Ci9yYU77v7L
 */
import {CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card} from "@/components/ui/card"
import {AvatarImage, AvatarFallback, Avatar} from "@/components/ui/avatar"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {Button} from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1">
      <div className="w-full mx-auto">
        <CardHeader className="max-w-xs mx-auto">
          <CardTitle>프로필 수정하기</CardTitle>
          <CardDescription>타인에게 더 매력적으로 어필해보세요</CardDescription>
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
            <Label htmlFor="introduction">본인에 대해 적어주세요</Label>
            <Textarea className="min-h-[100px]" id="introduction" placeholder="Tell something about yourself" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="mbti">MBTI를 골라주세요</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="MBTI" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="INTP">INTP</SelectItem>
                <SelectItem value="ENTP">ENTP</SelectItem>
                <SelectItem value="INTJ">INTJ</SelectItem>
                <SelectItem value="ENTJ">ENTJ</SelectItem>
              </SelectContent>
            </Select>

            {/*<Select id="mbti" placeholder="Select your MBTI type">*/}
            {/*  <option value="">Select your MBTI type</option>*/}
            {/*</Select>*/}
          </div>
          <div className="space-y-2">
            <Label htmlFor="residence">어디에서 보고싶으세요?</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="거주지" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
            {/*<Select id="residence" placeholder="Select your residence">*/}
            {/*  <option value="">Select your residence</option>*/}
            {/*</Select>*/}
          </div>
          <div className="space-y-2">
            <Label htmlFor="height">Height</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="키" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small1">145~149</SelectItem>
                <SelectItem value="small2">150~154</SelectItem>
                <SelectItem value="small3">155~159</SelectItem>
                <SelectItem value="small5">160~164</SelectItem>
                <SelectItem value="middle1">165~167</SelectItem>
                <SelectItem value="middle2">168~170</SelectItem>
                <SelectItem value="middle3">171~173</SelectItem>
                <SelectItem value="middle4">174~176</SelectItem>
                <SelectItem value="big1">177~180</SelectItem>
                <SelectItem value="big2">181~185</SelectItem>
                <SelectItem value="big3">186~190</SelectItem>
                <SelectItem value="big4">190~195</SelectItem>
              </SelectContent>
            </Select>
            {/*<Select id="height" placeholder="Select your height">*/}
            {/*  <option value="">Select your height</option>*/}
            {/*</Select>*/}
          </div>
          <div className="space-y-2">
            <Label htmlFor="hobby">취미를 알려주세요</Label>
            <Textarea className="min-h-[50px]" id="introduction" placeholder="Tell something about yourself" />
            {/*<Select id="hobby" placeholder="Select your hobby">*/}
            {/*  <option value="">Select your hobby</option>*/}
            {/*</Select>*/}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full sm:ml-auto">Save Changes</Button>
        </CardFooter>
      </div>
    </div>
  )
}

