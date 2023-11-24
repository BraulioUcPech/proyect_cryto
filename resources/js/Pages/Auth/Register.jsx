import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

import { motion } from "framer-motion"


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [customErrors, setCustomErrors] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const validate = () => {
        let isValid = true;
        let newErrors = { name: '', email: '', password: '', password_confirmation: '' };

        if (!data.name) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!data.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (!data.password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (data.password.length < 9) {
            newErrors.password = 'Password must be at least 9 characters long';
            isValid = false;
        }
       if (data.password !== data.password_confirmation) {
            newErrors.password_confirmation = 'Passwords do not match';
            isValid = false;
        }

        setCustomErrors(newErrors);
        return isValid;
    };

   const submit = (e) => {
    e.preventDefault();
    if (validate()) {
        post(route('register'));
        reset('password', 'password_confirmation');
    }
   };


    useEffect(() => {
        return () => {
            reset('', '');
        };
    }, []);

    return (
                <GuestLayout>
            <Head title="Register" />

     <div >
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full space-y-8"
        >
            <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
                    Create your account
                </h2>
            </div>
            <form onSubmit={submit} className="mt-8 space-y-6 bg-white p-6 rounded-md shadow-lg">
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        name="name"
                        type="text"
                        value={data.name}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        autoComplete="name"
                        onChange={(e) => setData('name', e.target.value)}
                                required

                    />
                    <InputError message={customErrors.name || errors.name} className="mt-2 text-red-600 text-sm" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError message={customErrors.email || errors.email} className="mt-2 text-red-600 text-sm" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />
                    <InputError message={customErrors.password || errors.password} className="mt-2 text-red-600 text-sm" />
                </div>

                <div>
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />
                    <InputError message={customErrors.password_confirmation || errors.password_confirmation} className="mt-2 text-red-600 text-sm" />
                </div>
                <div className="flex items-center justify-between">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href={route('login')}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Already registered?
                        </Link>
                    </motion.div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        disabled={processing}
                    >
                        Register
                            </motion.button>


                 </div>

                        <div className="flex justify-center space-x-2"> {/* Esta línea crea un contenedor flex y pone espacio entre los elementos hijos */}
                   <motion.button
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                        onClick={() => window.location.href='http://127.0.0.1:8000/verify-face'}
                        className="relative overflow-hidden py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-in-out"
                        style={{
                            boxShadow: '0 4px 14px 0 rgba(0, 118, 255, 0.39)'
                        }}
                    >
                        <span className="absolute left-0 top-0 h-full w-1 bg-white opacity-75 transition-all duration-300 ease-in-out transform scale-0 group-hover:scale-100" />
                        <span className="relative">
                            Verify Face
                        </span>
                    </motion.button>


                    <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.location.href='http://127.0.0.1:8000/login-google'}
                         className="py-2 px-4 text-sm font-medium rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                         style={{
                              background: 'linear-gradient(to right, #4285F4, #34A853, #FBBC05, #EA4335)',
                               boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
                          }}
                   >
                             Google
                            </motion.button>

                            

                    </div>

                    </form>




        </motion.div>
    </div>
        </GuestLayout>

    );
}

