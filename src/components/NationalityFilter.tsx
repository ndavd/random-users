import { useRecoilState } from 'recoil';
import { countries } from '../utils';
import { nationalitiesState } from '../state/nationalities';

const NationalityFilter = () => {
  const [nationalities, setNationalities] = useRecoilState(nationalitiesState);

  const checkboxHandler = (_: React.ChangeEvent<HTMLInputElement>, nationality: string) => {
    const index = nationalities.indexOf(nationality);

    if (index === -1) {
      setNationalities([...nationalities, nationality]);
      return;
    }

    if (nationalities.length > 1) {
      setNationalities(
        [...nationalities.slice(0, index), ...nationalities.slice(index + 1)]
      );
    }
  }

  return <section className="w-full bg-white px-3 py-2 text-sm sm:text-base drop-shadow-lg">

    <div className="text-gray-500 mb-2">
      Nationality:
    </div>

    <ul className="text-xs sm:text-sm grid grid-cols-[repeat(auto-fit,minmax(12ch,1fr))]">
      {
        countries.map(({code, name}, i) => {

          return <li key={i} className="p-1" data-testid="nat">
            <label className="flex justify-end items-center gap-2">
              {name}
              <input
                type="checkbox"
                checked={nationalities.includes(code)}
                onChange={(e) => {checkboxHandler(e, code)}}
                className="h-5 w-5 text-main focus:ring-main"
              />
            </label>
          </li>

        })
      }
    </ul>

  </section>;
}

export default NationalityFilter;
