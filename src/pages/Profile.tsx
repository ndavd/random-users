import { Navigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { nationalitiesState } from '../state/nationalities';
import { ParsedUserData, countries } from '../utils';
import { queryClient } from '../index';

const Profile = () => {
  const nats = useRecoilValue(nationalitiesState);
  const users = queryClient.getQueryData<ParsedUserData[]>([ "getUsers", {nats} ]);
  const uuid = useParams().uuid as string;

  if (!users) return <Navigate to="/"/>;

  const user = users.find(e => e.uuid === uuid);

  if (!user) return <Navigate to="/"/>;

  const info = [
    { title: "Country", data: countries.find( ({ code }) => code === user.nat )?.name },
    { title: "Address", data: user.address                                            },
    { title: "Gender",  data: user.gender                                             },
    { title: "Age",     data: user.age                                                },
    { title: "Email",   data: user.email                                              },
    { title: "Phone",   data: user.phone                                              },
  ];

  return <section className="bg-white py-5 px-4 sm:px-8 lg:px-14 drop-shadow-lg">

    <div className="flex flex-col items-center gap-4 mb-5">
      <img
        className="w-32 h-32 border-4 border-main bg-main"
        src={user.picture.large}
        alt={user.name}
      />
      <div className="flex flex-col items-center">
        <h1 className="sm:text-2xl text-main text-center">
          {user.name}
        </h1>
        <h2 className="w-fit text-sm sm:text-lg bg-pink-500 text-white px-1">
          {user.username}
        </h2>
      </div>
    </div>

    <ul>
      {
        info.map(({ title, data }, i) => {
          return <li key={i} className={(i !== info.length - 1)?"pb-4":""}>
            <h3 className="text-xs sm:text-base">
              {title + ":"}
            </h3>
            <p className="text-main-text-secondary text-2xs sm:text-sm">
              {data}
            </p>
          </li>
        })
      }
    </ul>

  </section>;
}

export default Profile;
