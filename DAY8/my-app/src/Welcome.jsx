import { memo } from 'react';

const Welcome = () => {
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
};

export default memo(Welcome);

const WelcomeWithName = ({name}) => {
  return (
    <div>
      Hello my name is {name}
    </div>
  );
};

export { WelcomeWithName };
