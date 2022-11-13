import Account from '../views/account';
import AccountEdit from '../views/account/account-edit';
import Forgotpass from '../views/auth/forgotpass';
import Signin from '../views/auth/signin';
import Signup from '../views/auth/signup';
import Splash from '../views/auth/splash';
import VerifOTP from '../views/auth/verifOTP';
import Favorit from '../views/favorit';
import Home from '../views/home';
import Order from '../views/order';
import OrderHistoryDetail from '../views/order/order-history-detail';
import ProductDetail from '../views/productDetail/product-detail';
import Products from '../views/products';
import NavTabs from './nav-tabs';

const dataStack = [
//   {
//     name: 'Splash',
//     component: Splash,
//   },
//   {
//     name: 'Signin',
//     component: Signin,
//   },
//   {
//     name: 'Signup',
//     component: Signup,
//   },
//   {
//     name: 'Forgotpass',
//     component: Forgotpass,
//   },
//   {
//     name: 'VerifOTP',
//     component: VerifOTP,
//   },
  {
    name: 'NavTabs',
    component: NavTabs,
  },
  {
    name: 'OrderHistoryDetail',
    component: OrderHistoryDetail,
  },
  {
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    name: 'AccountEdit',
    component: AccountEdit,
  },
  {
    name: 'Products',
    component: Products,
  },
];
const dataTabs = [
  {
    name: 'Home',
    component: Home,
    title: 'Beranda',
  },
  {
    name: 'Order',
    component: Order,
    title: 'Pesanan',
  },
  {
    name: 'Favorit',
    component: Favorit,
    title: 'Favorit',
  },
  {
    name: 'Account',
    component: Account,
    title: 'Profile',
  },
];

export {dataStack, dataTabs};
