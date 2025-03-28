import './index.scss';
import { ReactNode } from 'react';

interface IProps {
    title: string;
    icon: ReactNode;
    close: ReactNode;
    desc: string;
}

const Alert = ({title, icon, close, desc}: IProps) => {
    return (
        <>
            <div className='alert-wrapper'>
                <div className='alert-header'>
                    <h4>{icon} {title}</h4>
                    <span>{close}</span>
                </div>
                <p>{desc}</p>
            </div>
        </>
    )
}

export default Alert;