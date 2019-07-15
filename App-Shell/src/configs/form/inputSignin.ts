import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';

export default function inputSingin() {
    const { t } = useTranslation('signin');

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const data = [
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
        }
    ]
    return data
}
