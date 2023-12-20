/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Tq968i8jAsy
 */
import {CardHeader, CardContent, CardFooter, Card} from "@/components/ui/card"
import {AvatarImage, AvatarFallback, Avatar} from "@/components/ui/avatar"
import Link from "next/link"
import {ScrollArea} from "@/components/ui/scroll-area"

export default function MessageList() {
  return (
    <Card key="1" className="h-[100dvh] overflow-hidden">
      <CardHeader className="p-4">
        <h2 className="text-3xl font-semibold">메시지</h2>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[540px]">
          <div className="grid gap-4 p-4">
            <Link className="flex items-center justify-between" href="message-list/message">
              <div className="flex items-start gap-3">
                <Avatar className="w-20 h-20 border">
                  <AvatarImage alt="@user1" src="/dummy-face/dummy1.jpeg" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xl font-semibold">
                    최강민우
                  </p>
                  <p className="text-lg text-gray-600">고고</p>
                </div>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </Link>
            <Link className="flex items-center justify-between" href="message-list/message">
              <div className="flex items-start gap-3">
                <Avatar className="w-20 h-20 border">
                  <AvatarImage alt="@user2" src="/dummy-face/dummy2.jpeg" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xl font-semibold">
                    김철수
                  </p>
                  <p className="text-lg text-gray-600">오늘 어떠실까요</p>
                </div>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </Link>
            <Link className="flex items-center justify-between" href="message-list/message">
              <div className="flex items-start gap-3">
                <Avatar className="w-20 h-20 border">
                  <AvatarImage alt="@user3" src="/dummy-face/dummy3.jpeg" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xl font-semibold">
                    동해번쩍서해번쩍
                  </p>
                  <p className="text-lg text-gray-600">ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</p>
                </div>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </Link>
            <Link className="flex items-center justify-between" href="message-list/message">
              <div className="flex items-start gap-3">
                <Avatar className="w-20 h-20 border">
                  <AvatarImage alt="@user4" src="/dummy-face/dummy4.jpeg" />
                  <AvatarFallback>U4</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xl font-semibold">
                    킬동홍
                  </p>
                  <p className="text-lg text-gray-600">내가 그랬잖아ㅎㅎㅎ</p>
                </div>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </Link>
            <Link className="flex items-center justify-between" href="message-list/message">
              <div className="flex items-start gap-3">
                <Avatar className="w-20 h-20 border">
                  <AvatarImage alt="@user5" src="/dummy-face/dummy5.jpeg" />
                  <AvatarFallback>U5</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xl font-semibold">
                    박보곰
                  </p>
                  <p className="text-lg text-gray-600">32분전에 읽음</p>
                </div>
              </div>
              <div className="text-xs text-gray-500">2h ago</div>
            </Link>
          </div>

        </ScrollArea>
      </CardContent>
    </Card>
  )
}
