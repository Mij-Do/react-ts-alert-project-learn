import './index.scss';
import { ReactNode } from 'react';
import { AlertTypes } from './../../Types';

interface IProps {
    type: AlertTypes;
    title: string;
    icon: ReactNode;
    close: ReactNode;
    desc?: string;
    children?: ReactNode;
}

const Alert = ({type, title, icon, close, desc, children}: IProps) => {
    return (
        <>
            <div className={type}>
                <div className='alert-header'>
                    <h4>{icon} {title}</h4>
                    <span>{close}</span>
                </div>
                <p>{children ? children : desc}</p>
            </div>
        </>
    )
}

export default Alert;