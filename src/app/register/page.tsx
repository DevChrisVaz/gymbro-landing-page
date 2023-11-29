import RegisterForm from '@/features/gyms/components/RegisterForm/RegisterForm';
import React from 'react';

export type RegisterProps = {}

const Register: React.FC<RegisterProps> = (props) => {
    return (
        <RegisterForm />
    );
}

export default Register;