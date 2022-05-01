import NationalityFilter from '../components/NationalityFilter';
import NameFilter from '../components/NameFilter';
import UserCounter from '../components/UserCounter';
import UserList from '../components/UserList';

const Home = () => {

  return <>
    <section className="relative">
      <NationalityFilter/>
      <NameFilter/>
      <UserCounter/>
    </section>

    <section>
      <UserList/>
    </section>
  </>;
}

export default Home;
