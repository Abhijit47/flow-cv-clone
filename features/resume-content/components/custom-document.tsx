import { Document } from '@react-pdf/renderer';

const CustomDocument: React.FC<React.ComponentProps<typeof Document>> = ({
  children,
  ...props
}) => {
  const documentProps = Object.assign({}, props);
  delete documentProps.pageLayout;
  delete documentProps.pageMode;
  delete documentProps.creationDate;
  delete documentProps.modificationDate;

  if (
    props.pageLayout ||
    props.pageMode ||
    props.creationDate ||
    props.modificationDate
  ) {
    // Object.assign(documentProps, {
    //   pageLayout: props.pageLayout,
    //   pageMode: props.pageMode,
    //   creationDate: props.creationDate,
    //   modificationDate: props.modificationDate,
    // });

    return <Document {...documentProps}>{children}</Document>;
  }

  return <Document {...documentProps}>{children}</Document>;
};

export default CustomDocument;
