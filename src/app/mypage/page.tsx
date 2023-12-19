import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link";

export default function Component() {
  return (
    <>
    <div className="bg-[#020729] h-80 w-full"/>
      <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <header className="border-b border-gray-200 sm:flex sm:items-center sm:justify-between sm:pb-4">
          <div className="flex items-center space-x-5">
            <Avatar className="h-16 w-16">
              <AvatarImage alt="@username" src="/placeholder-avatar.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">윤중선</h1>
              <p className="text-sm text-gray-500">항상 밝은에너지!😘</p>
            </div>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-4 sm:flex sm:flex-shrink-0 sm:justify-end">
            <Link href="/mypage/edit">
              <Button className="w-full sm:w-auto text-xl" variant="outline">
                프로필 수정하기
              </Button>
            </Link>
          </div>
        </header>
          <div className="flex items-center justify-between">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-5 text-lg font-medium">
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  스토어
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  고객센터
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50"
                  href="#"
                >
                  보낸 좋아요
                </Link>
                <Link
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  사연 보내기
                </Link>
              </nav>
            </div>
          </div>
      </div>
    </>
  )
}

