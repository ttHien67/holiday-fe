import { Link } from 'react-router-dom';
import './Button.scss';

function Button({ to, href, disabled, children, className, onClick, ...passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        disabled,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={className} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
