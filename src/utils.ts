export interface Country {
  code: string,
  name: string,
}

export const countries: Country[] = [
  { code: "AU", name: "Australia" },
  { code: "BR", name: "Brazil"    },
  { code: "CA", name: "Canada"    },
  { code: "DE", name: "Germany"   },
  { code: "ES", name: "Spain"     },
  { code: "FR", name: "France"    },
  { code: "GB", name: "Britain"   },
  { code: "US", name: "USA"       },
];

export interface RawUserData {
  gender: string,
  name: {
    title: string,
    first: string,
    last:  string,
  },
  location: {
    street: {
      number: number,
      name:   string,
    },
    city:     string,
    state:    string,
    country:  string,
    postcode: string,
    coordinates: {
      latitude:  string,
      longitude: string,
    },
    timezone: {
      offset:      string,
      description: string,
    },
  },
  email: string,
  login: {
    uuid:     string,
    username: string,
    password: string,
    salt:     string,
    md5:      string,
    sha1:     string,
    sha256:   string,
  },
  dob: {
    date: string,
    age:  number,
  },
  phone: string,
  cell:  string,
  picture: {
    large:     string,
    medium:    string,
    thumbnail: string,
  },
  nat: string,
}

export interface ParsedUserData {
  uuid:     string,
  name:     string,
  username: string,
  nat:      string,
  gender:   string,
  city:     string,
  address:  string,
  email:    string,
  age:      number,
  phone:    string,
  picture: {
    large:     string,
    medium:    string,
    thumbnail: string,
  },
}

export const parseUsers = (data: RawUserData[]): ParsedUserData[] => {
  const parsedData: ParsedUserData[] = data.map((u) => ({
    uuid:     u.login.uuid,
    name:     `${u.name.first} ${u.name.last}`,
    username: u.login.username,
    nat:      u.nat,
    gender:   u.gender,
    city:     u.location.city,
    address:  `${u.location.street.number} ${u.location.street.name}, ${u.location.city}, ${u.location.state}, ${u.location.postcode}`,
    email:    u.email,
    age:      u.dob.age,
    phone:    u.cell,
    picture:  u.picture
  }))
  return parsedData;
}

export const filterUsers = (nameInput: string, users: ParsedUserData[]): ParsedUserData[] => {
  if (!nameInput) return users;

  // If the input is lowercase then the casing is disregarded, if not the casing matters.
  const isRigorous = (nameInput !== nameInput.toLowerCase());

  return users.filter( user => isRigorous?
    user.name.includes(nameInput):
    user.name.toLowerCase().includes(nameInput.toLowerCase())
  );
}
