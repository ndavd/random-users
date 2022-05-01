import { Link } from 'react-router-dom';
import { ParsedUserData } from '../utils';

interface Props {
  user: ParsedUserData,
}

const User = ( { user }: Props ) => {

  return <li data-testid="user">
    <Link to={"/"+user.uuid} className={
      "group bg-white mb-2 p-1 flex gap-2 sm:gap-4 " +
      "drop-shadow-md duration-75 hover:bg-green-50 sm:hover:scale-105"
    }>

      <img
        className="h-14 w-14 sm:h-[72px] sm:w-[72px]"
        alt={user.name}
        src={user.picture.medium}
      />

      <div className="flex flex-col justify-between">
        <span
          className="duration-75 text-sm sm:text-base lg:text-lg xl:text-xl group-hover:text-main"
        >
          {user.name}
          <span
            className="duration-200 text-pink-500 hidden md:inline opacity-0 group-hover:opacity-100"
          >
            {`@${user.username}`}
          </span>
        </span>
        <span
          className="text-main-text-secondary text-2xs sm:text-sm"
          data-testid={user.nat}
        >
          {`${user.city}, ${user.nat}`}
        </span>
      </div>

    </Link>
  </li>;
}

export default User;
