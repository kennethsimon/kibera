import First from '../components/newhomepage';
import Aboutus from '../components/aboutustwo';
import Team from '../components/team';
import Insurance from '../components/insurance';
import Clients from '../components/clients';
import Contactus from '../components/contactustwo';
export const routes = [
  {
    key: 'home',
    path: '/',
    component: First,
  },
  {
    key: 'aboutus',
    path: '/aboutus',
    component: Aboutus,
  },
  {
    key: 'projects',
    path: '/projects',
    component: Team,
  },
  {
    key: 'projectsinside',
    path: '/projects/:projectId',
    component: Insurance,
  },
  {
    key: 'projects',
    path: '/projects',
    component: Clients,
  },
  {
    key: 'contactus',
    path: '/contactus',
    component: Contactus,
  },
  
]