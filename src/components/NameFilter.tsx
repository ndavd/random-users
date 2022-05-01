import { useRecoilState } from 'recoil';
import { nameInputState } from '../state/nameInput';

const NameFilter = () => {
  const [name, setName] = useRecoilState(nameInputState);

  return <input
    type="text"
    value={name}
    onChange={e => setName(e.target.value)}
    className={
      "bg-white w-full px-3 py-2 sm:py-2 mb-4 text-sm sm:text-base drop-shadow-lg text-main-text " +
      "placeholder:text-main-text-secondary border-none focus:ring-2 focus:ring-main mt-2"
    }
    placeholder="Filter by name"
  />;
}

export default NameFilter;
