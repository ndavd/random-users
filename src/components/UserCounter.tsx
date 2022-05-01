import { useRecoilValue } from 'recoil';
import { userCountState } from '../state/userCount';

const UserCounter = () => {
  const count = useRecoilValue(userCountState);

  return <div className="absolute right-0 text-main-text-secondary text-xs sm:text-sm">
    {
      (count >= 0)?`${count} ${(count === 1)?"result":"results"}`:" "
    }
  </div>;
}

export default UserCounter;
