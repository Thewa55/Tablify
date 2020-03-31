// consolidate all the routes of your application

//public landing page === deafult page === user ends up when visiting your web application.
export const LANDING = '/';

export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';

//protected routes :
export const HOME = '/home';
export const ACCOUNT = '/account';

// protected on a high level, only accessible for authenticated admin users.
export const ADMIN = '/admin';

//non-protected page === users who are not authenticated and forgot about their password.
export const PASSWORD_FORGET = '/pw-forget';