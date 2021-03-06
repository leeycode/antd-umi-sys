import LoginLayout from './login';
import MainLayout from './main';

function BasicLayout(props) {
  const { location, children } = props;
  const { pathname } = location;
  if (pathname === '/login' || pathname === '/register' || pathname === '/') {
    return (<LoginLayout>{children}</LoginLayout>);
  }
  return (
    <MainLayout location={location}>{children}</MainLayout>
  );
}

export default BasicLayout;
