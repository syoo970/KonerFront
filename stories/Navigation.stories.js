import { RecoilRoot } from "recoil";
import Navigation from "../components/Navigation";
import { DefaultNav, SubNav } from "../components/Navigation/NavLists";

export default {
  title: "Navigation",
  component: Navigation,
};

export const Default = () => (
  <RecoilRoot>
    <Navigation {...DefaultNav} />
  </RecoilRoot>
);

export const Sub = () => (
  <RecoilRoot>
    <Navigation {...SubNav} />
  </RecoilRoot>
);
