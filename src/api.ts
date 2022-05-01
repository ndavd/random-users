import { QueryFunctionContext } from 'react-query';
import { parseUsers, ParsedUserData, RawUserData } from './utils';

export const results = 50;

interface Params {
  nats: string[]
}

export const getUsers = async (params: QueryFunctionContext<[string, Params]>): Promise<ParsedUserData[]> => {
  const nats = params.queryKey[1].nats;

  if (nats.length === 0) {
    throw new Error("At least 1 nationality should be selected");
  }

  const url =
    `https://randomuser.me/api/1.3/?` +
    `results=${results}` +
    `&exc=registered,id` +
    `&nat=${nats.reduce((a, b) => `${a},${b}`)}` +
    "&noinfo";

  const response = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    }
  );

  if (!response.ok) {
    throw new Error("Problem fetching data.");
  }

  // Parse users' data
  const jsonData = await response.json();
  const rawUserData: RawUserData[] = jsonData.results;
  const parsedUserData = parseUsers(rawUserData);

  return parsedUserData;
}
