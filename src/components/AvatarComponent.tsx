import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const AvatarComponent = () => {
  return (
    <Avatar>
      <AvatarImage src={"./../../avatar.png"} alt="@shezcode" />
      <AvatarFallback>shezcode</AvatarFallback>
    </Avatar >
  )
}

export default AvatarComponent
