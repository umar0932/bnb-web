import { useLogoutMutation } from '@/api/Authentication/useLogoutMutation'
import { Avatar, AvatarFallback, AvatarImage } from '@/core/ui/avatar'
import { Button } from '@/core/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/core/ui/dropdown-menu'
import Link from 'next/link'

export function ProfileAvatar() {
  const { mutate: logout } = useLogoutMutation()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src='/avatars/01.png' alt='@shadcn' />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <Link href=  {"/account-settings"} passHref>
          <DropdownMenuItem>
            Account Settings
          </DropdownMenuItem>
        </Link>

        <DropdownMenuItem onClick={() => logout()}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
