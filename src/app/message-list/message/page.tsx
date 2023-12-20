import {AvatarImage, AvatarFallback, Avatar} from "@/components/ui/avatar"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1" className="bg-white rounded-lg shadow overflow-hidden max-w-3xl mx-auto p-4 flex flex-col h-[80vh]">
      <div className="flex items-center space-x-4 p-3">
        <Avatar className="w-20 h-20">
          <AvatarImage alt="User Avatar" src="/dummy-face/dummy2.jpeg" />
          <AvatarFallback>UA</AvatarFallback>
        </Avatar>
        <div className="text-xl">
          <p className="font-semibold">박보곰</p>
          <p className="text-gray-400">현재 접속중</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-6 max-w-screen-lg mx-auto">
        <div className="chat-message flex items-end space-x-2">
          <div className="flex-none">
            <Avatar className="w-12 h-12">
              <AvatarImage alt="User Avatar" src="/dummy-face/dummy2.jpeg" />
              <AvatarFallback>UA</AvatarFallback>
            </Avatar>
          </div>
          <div className="bg-gray-200 rounded-lg px-4 py-2 text-sm flex-grow">오늘 한파래요 ㅠㅠ</div>
        </div>
        <div className="chat-message flex items-start space-x-2 flex-row-reverse">
          <div className="flex-none">
            <Avatar className="w-12 h-12">
              <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>UA</AvatarFallback>
            </Avatar>
          </div>
          <div className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm flex-grow">
            I'm doing great, thank you!
          </div>
        </div>
        <div className="chat-message flex items-end space-x-2">
          <div className="flex-none">
            <Avatar className="w-12 h-12">
              <AvatarImage alt="User Avatar" src="/dummy-face/dummy2.jpeg" />
              <AvatarFallback>UA</AvatarFallback>
            </Avatar>
          </div>
          <div className="bg-gray-200 rounded-lg px-4 py-2 text-sm flex-grow">
            와 ㅋㅋㅋㅋㅋ 어떻게 하죠?
          </div>
        </div>
        <div className="chat-message flex items-start space-x-2 flex-row-reverse">
          <div className="flex-none">
            <Avatar className="w-12 h-12">
              <AvatarImage alt="User Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>UA</AvatarFallback>
            </Avatar>
          </div>
          <div className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm flex-grow">
            I'm planning to go hiking. How about you?
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 p-3">
        <form className="flex space-x-3">
          <Input className="flex-grow rounded-full border" placeholder="Type a message..." />
          <Button className="w-8 h-8 rounded-full flex items-center justify-center">
            <SendIcon size={{height: 24, width: 24}} />
          </Button>
        </form>
      </div>
    </div>
  )
}


interface SendIconProps {
  size: {
    height: number;
    width: number;
  };
}

function SendIcon({size}: SendIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size.width}
      height={size.height}
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


// import {CardFooter} from "@/components/ui/card";
// import {Input} from "@/components/ui/input";
// import {Button} from "@/components/ui/button";
//
// export default function Home() {
//   return (
//     <CardFooter className="p-4 border-t">
//       <div className="flex w-full items-center justify-around gap-3">
//         <Input className="flex-grow" placeholder="메시지를 입력해 주세요..." />
//         <Button size="icon" variant="ghost">
//           <SendIcon />
//         </Button>
//       </div>
//     </CardFooter>
//   )
// }
//
//
// function SendIcon(props: unknown) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m22 2-7 20-4-9-9-4Z" />
//       <path d="M22 2 11 13" />
//     </svg>
//   )
// }
//
