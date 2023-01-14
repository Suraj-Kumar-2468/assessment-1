interface Props {
  className?: string;
  children: JSX.Element | JSX.Element[] | string | number | any;
  onClick?: () => void;
}

/**\
 * @Component Text
 * It Is used to display the text on UI
 * @param className : string
 * @param children : JSX element
 * @function onClick : onClick Handler 
 */

const Text = ({ children, className, onClick }: Props) => {
  return (
    <p className={className} onClick={onClick}>
      {children}
    </p>
  );
};

export default Text;
