import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
  btnColor: "primary",
  color: "white",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary",
  btnColor: "secondary",
  color: "white",
};

export const KonerButton = Template.bind({});
KonerButton.args = {
  text: "KonerButton",
  btnColor: "koner",
  color: "white",
};

export const KonerButton2 = Template.bind({});
KonerButton2.args = {
  text: "KonerButton2",
  btnColor: "koner2",
  color: "white",
};
