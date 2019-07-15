import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';

export default function inputSingup() {
    const { t } = useTranslation('signup');


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const data = [
        {
            name: 'first-name',
            placeholder: t('firstname'),
            type: 'text',
            value: firstName,
            onChange: setFirstName
        },
        {
            name: 'last-name',
            placeholder: t('lastname'),
            type: 'text',
            value: lastName,
            onChange: setLastName
        },
        {
            name: 'email',
            placeholder: t('email'),
            type: 'email',
            value: email,
            onChange: setEmail
        },
        {
            name: 'password',
            placeholder: t('password'),
            type: 'password',
            value: password,
            onChange: setPassword
        },
        {
            name: 'password',
            placeholder: t('confirmpassword'),
            type: 'password',
            value: confirmPassword,
            onChange: setConfirmPassword
        }
    ]
    return data
}
