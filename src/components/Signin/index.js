import React from 'react';
import { FormButton, FormInput, Text, Container, FormWrap, Icon, FormContent,Form, FormH1, FormLabel } from './SigninElement';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>dolla</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlfor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlfor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn