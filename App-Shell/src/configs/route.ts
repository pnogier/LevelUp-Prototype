import Home from 'components/Home'
import SignIn from 'components/SignIn'
import SignUp from 'components/SignUp'
import Profile from 'components/Profile'
import Page404 from "components/Page404"

import { useTranslation } from 'react-i18next';

export const defaultRoutes = () => {
	const { t } = useTranslation('routes');

	const data = [
		{
			id: 'Home',
			title: t('defaultRoutes.home'),
			path: '/',
			exact: true,
			component: Home,
			icon: 'fas fa-home'
		},
		{
			id: 'Question / Quiz',
			title: t('defaultRoutes.questionsQuizz'),
			path: '/list',
			component: Home,
			icon: 'fas fa-question'
		}
	]
	return data
}

export const authentification = () => {
	const { t } = useTranslation('routes');
	
	const data = [
		{
			id: "Signin",
      title: t("authentification.signin"),
      path: "/signin",
      exact: true,
      component: SignIn
    },
    {
			id: "Signup",
      title: t("authentification.signup"),
      path: "/signup",
      exact: true,
      component: SignUp
    }
  ];
	
	return data
}

export const connectedRoutes = () => {
	const { t } = useTranslation('routes');
	
	const data = [
    {
			id: "Home",
      title: t("connectedRoutes.home"),
      path: "/",
      exact: true,
      component: Home,
      icon: "fas fa-home"
    },
    {
			id: "Profile",
      title: t("connectedRoutes.profile"),
      path: "/Profile",
      exact: true,
      component: Profile,
      icon: "fas fa-user"
    }
  ];
	
	return data
}

export const page404 = () => {
	const data = [
		{
			id: 'Page404',
			path: '',
			component: Page404,
			exact: false,
		}
	]
	return data
}

