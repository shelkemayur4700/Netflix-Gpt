export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVTAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_ACCESS_TOKEN} `,
  },
};
console.log(process.env.REACT_APP_TMDB_API_ACCESS_TOKEN);
export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500";
