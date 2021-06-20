export const Test = (props) => {
  return {
    props,
    isTest: true,
  };
};

export const getProps = (test) => {
  return test.props;
};

export const objectTest = {
  child: [],
  parent: true,
  value: 1,
};
