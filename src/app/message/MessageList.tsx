/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Tq968i8jAsy
 */
import {CardHeader, CardContent, CardFooter, Card} from "@/components/ui/card"
import {AvatarImage, AvatarFallback, Avatar} from "@/components/ui/avatar"
import Link from "next/link"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"

export default function MessageList() {
  return (
    // <Card key="1" className="w-full max-w-md overflow-hidden">
    <Card key="1" className="h-fit">
      <CardHeader className="p-4">
        <h2 className="text-2xl font-semibold">Direct Messages</h2>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[540px]">
          <div className="grid gap-4 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage alt="@user1" src="/placeholder-user1.jpg" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Link className="text-sm font-semibold" href="#">
                  user1
                </Link>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </div>
            <p className="text-sm text-gray-600 pl-12 pr-4">안녕하세요 ㅎㅎ</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage alt="@user2" src="/placeholder-user2.jpg" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Link className="text-sm font-semibold" href="#">
                  user2
                </Link>
              </div>
              <div className="text-xs text-gray-500">4h ago</div>
            </div>
            <p className="text-sm text-gray-600 pl-12 pr-4">오늘 어떄</p>
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <div className="flex items-center justify-between gap-3">
          <Input className="flex-grow" placeholder="Type a message..." />
          <Button size="icon" variant="ghost">
            <SendIcon />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

function SendIcon(props: unknown) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
