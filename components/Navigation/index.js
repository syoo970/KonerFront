import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { loginStatus } from "../../recoil/Authentication";
import * as S from "./Navigation.style";
import Text from "../Text";

const Navigation = ({ lists, isLogoInclude, isAuth, authList }) => {
  const isLogined = useRecoilValue(loginStatus);
  const router = useRouter();
  const [active, setActive] = useState("/");

  useEffect(() => {
    if (router) {
      const { pathname } = router;
      setActive(pathname);
    }
  }, [router]);

  return (
    <S.NavigationWrapper isMainNav={isLogoInclude}>
      <S.NavItemWrapper>{isLogoInclude && <div>Logo</div>}</S.NavItemWrapper>
      <S.NavItemWrapper>
        {lists.map((list) => (
          <S.NavItem key={list.dest} isActive={active === list.dest}>
            <Link href={list.dest}>
              <a>
                <Text>{list.title}</Text>
              </a>
            </Link>
          </S.NavItem>
        ))}
      </S.NavItemWrapper>
      <S.NavItemWrapper>
        {isAuth &&
          authList[isLogined ? "AUTHSUCCESS" : "AUTHFAIL"].map((list) => (
            <S.NavItem key={list.dest} isActive={active === list.dest}>
              <Link href={list.dest}>
                <a>
                  <Text>{list.title}</Text>
                </a>
              </Link>
            </S.NavItem>
          ))}
      </S.NavItemWrapper>
    </S.NavigationWrapper>
  );
};

Navigation.propTypes = {
  lists: PropTypes.array,
  isLogoInclude: PropTypes.bool,
  isAuth: PropTypes.bool,
  authList: PropTypes.object,
};

Navigation.defaultProps = {
  lists: [],
  isLogoInclude: false,
  isAuth: false,
  authList: {},
};

export default Navigation;
