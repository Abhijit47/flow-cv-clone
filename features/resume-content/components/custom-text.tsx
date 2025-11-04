import { Text } from '@react-pdf/renderer';

const CustomText: React.FC<
  React.ComponentProps<typeof Text> & { className?: string }
> = (props) => {
  const textProps = Object.assign({}, props);

  const { children } = props as React.PropsWithChildren<
    React.ComponentProps<typeof Text> & { className?: string }
  >;

  if (props.className) {
    // className is accepted for consumers but @react-pdf/renderer View doesn't define it;
    // keep this branch if you plan to map className to styles or for future use.
    return <Text {...textProps}>{children}</Text>;
  }

  return <Text {...textProps}>{children}</Text>;
};

export default CustomText;
