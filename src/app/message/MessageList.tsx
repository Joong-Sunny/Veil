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
        <h2 className="text-2xl font-semibold">메시지</h2>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[540px]">
          <div className="grid gap-4 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <Avatar className="w-20 h-20 border">
                  <AvatarImage alt="@user1" src="/dummy-face/dummy1.jpeg" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <div>
                  <Link className="text-xl font-semibold" href="#">
                    최강민우
                  </Link>
                  <p className="text-lg text-gray-600">고고</p>
                </div>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <Avatar className="w-20 h-20 border">
                  <AvatarImage alt="@user2" src="/dummy-face/dummy2.jpeg" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <div>
                  <Link className="text-xl font-semibold" href="#">
                    김철수
                  </Link>
                  <p className="text-lg text-gray-600">오늘 어떠실까요</p>
                </div>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <Avatar className="w-20 h-20 border">
                  <AvatarImage alt="@user3" src="/dummy-face/dummy3.jpeg" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <div>
                  <Link className="text-xl font-semibold" href="#">
                    동해번쩍서해번쩍
                  </Link>
                  <p className="text-lg text-gray-600">ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>
                </div>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <Avatar className="w-20 h-20 border">
                  <AvatarImage alt="@user4" src="/dummy-face/dummy4.jpeg" />
                  <AvatarFallback>U4</AvatarFallback>
                </Avatar>
                <div>
                  <Link className="text-xl font-semibold" href="#">
                    킬동홍
                  </Link>
                  <p className="text-lg text-gray-600">내가 그랬잖아ㅎㅎㅎ</p>
                </div>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <Avatar className="w-20 h-20 border">
                  <AvatarImage alt="@user5" src="/dummy-face/dummy5.jpeg" />
                  <AvatarFallback>U5</AvatarFallback>
                </Avatar>
                <div>
                  <Link className="text-xl font-semibold" href="#">
                    박보곰
                  </Link>
                  <p className="text-lg text-gray-600">32분전에 읽음</p>
                </div>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <div className="flex w-full items-center justify-around gap-3">
          <Input className="flex-grow" placeholder="메시지를 입력해 주세요..." />
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
