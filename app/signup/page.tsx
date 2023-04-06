import React from 'react';
import Input from '../../components/inputs/Input'
import Button from '../../components/buttons/Button'

const SignUp = () => {
    return (
        <>
            <div className='w-full py-52 flex flex-col justify-center items-center'>
                <Input label="Email" type="email" icon="Email" required />
                <Input label="Nom" type="text" icon="" />
                <Input label="Tel" type="text" icon="" />
                <Input label="Password" type="password" icon="Password" required />
                <Button label="S'inscrire" type="submit" style="classic" />
            </div>
        </>
    );
};

export default SignUp;