import { View } from '@react-pdf/renderer';

const CustomView: React.FC<
  React.ComponentProps<typeof View> & { className?: string }
> = ({ children, ...props }) => {
  const viewProps = Object.assign({}, props);

  if (props.className) {
    // className is accepted for consumers but @react-pdf/renderer View doesn't define it;
    // keep this branch if you plan to map className to styles or for future use.
    return <View {...viewProps}>{children}</View>;
  }

  return <View {...viewProps}>{children}</View>;
};

export default CustomView;
