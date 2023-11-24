import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const [localErrors, setLocalErrors] = useState({});

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        post(route('login'));
    };

    const validate = () => {
        const newErrors = {};
        if (!data.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!data.password) {
            newErrors.password = 'Password is required';
        } else if (data.password.length < 8) {
            newErrors.password = 'Password error';
        }
        setLocalErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    return (
        <GuestLayout>

            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
                   Sign in to your account
                </h2>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center min-h-screen"
            >

                <form onSubmit={submit} className="mt-8 space-y-6 bg-white p-6 rounded-md shadow-lg">

                    <div>
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={localErrors.email || errors.email} className="mt-2 text-red-600 text-sm" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={localErrors.password || errors.password} className="mt-2 text-red-600 text-sm" />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                    </div>
                <div className="flex items-center justify-between">
                {canResetPassword && (
                    <motion.a
                        href={route('password.request')}
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Forgot your password?
                    </motion.a>
                )}

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={processing}
                >
                    Log in
                        </motion.button>

                    </div>
                    <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.location.href='http://127.0.0.1:8000/verify-face'}
                                className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Verify Face
                            </motion.button>
                </form>
            </motion.div>
        </GuestLayout>
    );
}
