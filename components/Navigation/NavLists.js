export const DefaultNav = {
  isLogoInclude: true,
  isAuth: true,
  lists: [
    { dest: "/", title: "메인" },
    { dest: "/aboutus", title: "소개" },
    { dest: "/study/depart/CSE", title: "스터디" },
  ],
  authList: {
    AUTHFAIL: [
      { dest: "/login", title: "로그인" },
      { dest: "/signup", title: "회원가입" },
    ],
    AUTHSUCCESS: [
      { dest: "/userpage", title: "마이페이지" },
      { dest: "/logout", title: "로그아웃" },
    ],
  },
};

export const SubNav = {
  isLogoInclude: false,
  isAuth: false,
  lists: [
    { dest: "/userinfo", title: "내정보" },
    { dest: "/mystudy", title: "내스터디" },
  ],
};
