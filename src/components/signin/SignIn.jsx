import React, { useState } from 'react'
import styles from '../../style'
import './sigin.css'
//icons
import { FaFacebookF, FaGoogle, FaRegEnvelope, FaRegUser } from 'react-icons/fa'
import { MdLockOutline } from 'react-icons/md'

const SignIn = () => {
    const [login, setLogin] = useState(true);

    return (
        <section id='signin' className={`flex flex-col items-center justify-center ${styles.paddingY} my-12`}>
            <div className={`container sm:flex relative hidden md:w-3/5 w-4/5 max-w-full min-h-[500px] ${login ? '' : 'right-panel-active'}`}>
                <div className="sign-up">
                    <form action="">
                        <h2 className='font-poppins font-semibold text-3xl text-white text-center mb-2'>Create Account</h2>
                        <div className='border-2 w-10 border-purple-500 mx-auto mb-2'></div>
                        <div className='flex flex-col items-center mt-4'>
                            <div className='flex items-center border-b-2 w-64 p-2 mb-3'>
                                <FaRegUser className='text-gray-400 m-2' />
                                <input type="name" name="name" placeholder='Name' className='flex-1 bg-transparent outline-none text-white' />
                            </div>
                            <div className='flex items-center border-b-2 w-64 p-2 mb-3'>
                                <FaRegEnvelope className='text-gray-400 m-2' />
                                <input type="email" name="email" placeholder='Email' className='flex-1 bg-transparent outline-none text-white' />
                            </div>
                            <div className='flex items-center border-b-2 w-64 p-2 mb-3'>
                                <MdLockOutline className='text-gray-400 m-2' />
                                <input type="password" name="password" placeholder='Password' className='flex-1 bg-transparent outline-none text-white' />
                            </div>
                        </div>
                        <p className='text-dimWhite text-sm text-center my-3'>Or Sign Up Using</p>
                        <div className='flex justify-center my-2'>
                            <a href="#" className='border-2 border-white rounded-full p-3 mx-1 hover:bg-blue-900'>
                                <FaFacebookF className='text-sm text-white' />
                            </a>
                            <a href="#" className='border-2 border-white rounded-full p-3 mx-1 hover:bg-red-700'>
                                <FaGoogle className='text-sm text-white' />
                            </a>
                        </div>
                        <div className='flex flex-col items-center mt-4'>
                            <button type='submit' className='flex justify-center w-64 text-white font-semibold border-2 border-purple-500 rounded-full mx-6 py-2 hover:bg-purple-500'>Sign Up</button>
                        </div>
                    </form>
                </div>
                <div className="sign-in">
                    <form action="">
                        <h2 className='font-poppins font-semibold text-3xl text-white text-center mb-2'>Sign in to Account</h2>
                        <div className='border-2 w-10 border-purple-500 mx-auto mb-2'></div>
                        <div className='flex flex-col items-center mt-4'>
                            <div className='flex items-center border-b-2 w-64 p-2 mb-3'>
                                <FaRegEnvelope className='text-gray-400 m-2' />
                                <input type="email" name="email" placeholder='Email' className='flex-1 bg-transparent outline-none text-white' />
                            </div>
                            <div className='flex items-center border-b-2 w-64 p-2 mb-3'>
                                <MdLockOutline className='text-gray-400 m-2' />
                                <input type="password" name="password" placeholder='Password' className='flex-1 bg-transparent outline-none text-white' />
                            </div>
                        </div>
                        <p className='text-dimWhite text-sm text-center my-3'>Or Sign In Using</p>
                        <div className='flex justify-center my-2'>
                            <a href="#" className='border-2 border-white rounded-full p-3 mx-1 hover:bg-blue-900'>
                                <FaFacebookF className='text-sm text-white' />
                            </a>
                            <a href="#" className='border-2 border-white rounded-full p-3 mx-1 hover:bg-red-700'>
                                <FaGoogle className='text-sm text-white' />
                            </a>
                        </div>
                        <div className='flex flex-col items-center mt-4'>
                            <div className='flex justify-between w-64 mb-5'>
                                <label className='flex items-center text-xs text-white'>
                                    <input type="checkbox" name="remenber" className='mr-1' />
                                    Remember Me
                                </label>
                                <a href="#" className='text-xs text-white '>Forgot Password?</a>
                            </div>
                            <button type='submit' className='flex justify-center w-64 text-white font-semibold border-2 border-purple-500 rounded-full mx-6 py-2 hover:bg-purple-500'>Sign In</button>
                        </div>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay bg-purple-gradient">
                        <div class="overlay-left">
                            <h2 className='text-center text-3xl font-poppins font-semibold mb-2'>Welcome Back!</h2>
                            <div className='border-2 w-10 border-white mx-auto mb-2'></div>
                            <p className='mb-8 text-center'>To keep connected with us please login with your personal info.</p>
                            <button className='flex justify-center w-4/5 font-semibold border-2 border-white rounded-full mx-6 py-2 hover:bg-white hover:text-purple-500' onClick={() => setLogin((prev) => !prev)}>Sign In!</button>
                        </div>
                        <div className="overlay-right">
                            <h2 className='text-center text-3xl font-poppins font-semibold mb-2'>New Here?</h2>
                            <div className='border-2 w-10 border-white mx-auto mb-2'></div>
                            <p className='mb-8 text-center'>Ready to empower your finances? <br /> Sign up now and start your journey.</p>
                            <button className='flex justify-center w-4/5 font-semibold border-2 border-white rounded-full mx-6 py-2 hover:bg-white hover:text-purple-500' onClick={() => setLogin((prev) => !prev)}>Sign up!</button>
                        </div>
                    </div>
                </div>
            </div>
            //responsive
            <div className={`sm:hidden container relative sm:w-3/5 w-4/5 max-w-full min-h-[500px]`}>
                <div className={`sign-up-responsive ${login ? 'hidden' : ''}`}>
                    <form action="" className='my-8'>
                        <h2 className='font-poppins font-semibold text-3xl text-white text-center mb-2'>Create Account</h2>
                        <div className='border-2 w-10 border-purple-500 mx-auto mb-2'></div>
                        <div className='flex flex-col items-center mt-4'>
                            <div className='flex items-center border-b-2 w-64 p-2 mb-3'>
                                <FaRegUser className='text-gray-400 m-2' />
                                <input type="name" name="name" placeholder='Name' className='flex-1 bg-transparent outline-none text-white' />
                            </div>
                            <div className='flex items-center border-b-2 w-64 p-2 mb-3'>
                                <FaRegEnvelope className='text-gray-400 m-2' />
                                <input type="email" name="email" placeholder='Email' className='flex-1 bg-transparent outline-none text-white' />
                            </div>
                            <div className='flex items-center border-b-2 w-64 p-2 mb-3'>
                                <MdLockOutline className='text-gray-400 m-2' />
                                <input type="password" name="password" placeholder='Password' className='flex-1 bg-transparent outline-none text-white' />
                            </div>
                        </div>
                        <p className='text-dimWhite text-sm text-center my-3'>Or Sign Up Using</p>
                        <div className='flex justify-center my-2'>
                            <a href="#" className='border-2 border-white rounded-full p-3 mx-1 hover:bg-blue-900'>
                                <FaFacebookF className='text-sm text-white' />
                            </a>
                            <a href="#" className='border-2 border-white rounded-full p-3 mx-1 hover:bg-red-700'>
                                <FaGoogle className='text-sm text-white' />
                            </a>
                        </div>
                        <div className='flex flex-col items-center mt-4'>
                            <button type='submit' className='flex justify-center w-64 text-white font-semibold border-2 border-purple-500 rounded-full mx-6 py-2 hover:bg-purple-500'>Sign Up</button>
                        </div>
                    </form>
                    <div className='flex justify-center bg-purple-500 mt-2 pt-2 pb-8'>
                        <p className='text-white cursor-pointer' onClick={() => setLogin((prev) => !prev)}>Already an account? <b>Sign in</b></p>
                    </div>
                </div>
                <div className={`sign-in-responsive ${login ? '' : 'hidden'}`}>
                    <form action="" className='my-8 z-100'>
                        <h2 className='font-poppins font-semibold text-3xl text-white text-center mb-2'>Sign in to Account</h2>
                        <div className='border-2 w-10 border-purple-500 mx-auto mb-2'></div>
                        <div className='flex flex-col items-center mt-4'>
                            <div className='flex items-center border-b-2 w-64 p-2 mb-3'>
                                <FaRegEnvelope className='text-gray-400 m-2' />
                                <input type="email" name="email" placeholder='Email' className='flex-1 bg-transparent outline-none text-white' />
                            </div>
                            <div className='flex items-center border-b-2 w-64 p-2 mb-3'>
                                <MdLockOutline className='text-gray-400 m-2' />
                                <input type="password" name="password" placeholder='Password' className='flex-1 bg-transparent outline-none text-white' />
                            </div>
                        </div>
                        <p className='text-dimWhite text-sm text-center my-3'>Or Sign In Using</p>
                        <div className='flex justify-center my-2'>
                            <a href="#" className='border-2 border-white rounded-full p-3 mx-1 hover:bg-blue-900'>
                                <FaFacebookF className='text-sm text-white' />
                            </a>
                            <a href="#" className='border-2 border-white rounded-full p-3 mx-1 hover:bg-red-700'>
                                <FaGoogle className='text-sm text-white' />
                            </a>
                        </div>
                        <div className='flex flex-col items-center mt-4'>
                            <div className='flex justify-between w-64 mb-5'>
                                <label className='flex items-center text-xs text-white'>
                                    <input type="checkbox" name="remenber" className='mr-1' />
                                    Remember Me
                                </label>
                                <a href="#" className='text-xs text-white '>Forgot Password?</a>
                            </div>
                            <button type='submit' className='flex justify-center w-64 text-white font-semibold border-2 border-purple-500 rounded-full mx-6 py-2 hover:bg-purple-500'>Sign In</button>
                        </div>
                    </form>
                    <div className='flex justify-center bg-purple-500 mt-2 pt-2 pb-8'>
                        <p className='text-white cursor-pointer' onClick={() => setLogin((prev) => !prev)}>Don't have an account? <b>Sign up</b></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn