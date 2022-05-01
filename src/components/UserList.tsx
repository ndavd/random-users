import { useMemo, useEffect } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getUsers } from '../api';
import { userCountState } from '../state/userCount';
import { nationalitiesState } from '../state/nationalities';
import { filterUsers, ParsedUserData } from '../utils';
import Status from './Status';
import User from './User';
import { nameInputState } from '../state/nameInput';

const Users = () => {
  const nats = useRecoilValue(nationalitiesState);
  const name = useRecoilValue(nameInputState);
  const [ , setUserCount ] = useRecoilState(userCountState);

  const { status, error, data }: UseQueryResult<ParsedUserData[], Error> = useQuery(
    [ "getUsers", { nats } ],
    getUsers
  );

  const users = useMemo(() => {
    return (status==="success")?
      filterUsers(name, data):
      []
  }, [ status, name, data ]);

  useEffect(() => {
    setUserCount((status === "success")?users.length:-1);
  }, [ status, users, setUserCount ]);

  switch (status) {
    case "idle":
    case "loading":
      return <Status status="loading"/>;
    case "error":
      return <Status status="error" msg={error.message}/>;
    case "success":
      return <ul className="mt-6">
        {
          users.map((e, i) => <User key={i} user={e}/>)
        }
      </ul>;
  }
}

export default Users;
