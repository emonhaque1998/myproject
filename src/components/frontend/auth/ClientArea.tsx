'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
  

export default function ClientArea() {
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-30 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white bg-opacity-50 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className='flex gap-5 justify-center w-full'>
                    <div className='w-full'>
                      <h1 className='text-center text-xl font-medium'>Welcome To Our World</h1>
                      <h1 className='mt-3 font-normal text-center'>Login with Social</h1>
                      <div className='mb-5'>
                        <div className='flex justify-center py-3 gap-3'>
                          <button className='flex bg-black px-4 py-2 rounded-full gap-2 items-center'>
                            <FcGoogle size="24" /><span className='text-white'>Google Accounts</span>
                          </button>
                          <button className='flex bg-black px-4 py-2 rounded-full gap-2 items-center'>
                            <SiFacebook size="24" color='blue' /><span className='text-white'>Facebook</span>
                          </button>
                        </div>
                      </div>
                      <div className='flex justify-center gap-5'>
                        <button className='bg-black text-white px-3 py-2 rounded-lg'>Sign In</button>
                        <button>Sign Up</button>
                      </div>
                      <form action="" className='flex flex-col gap-3 mt-3'>
                        <div className="col-span-full">
                          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                          </label>
                          <div className="mt-2">
                            <input
                              id="street-address"
                              name="email"
                              type="text"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                            />
                          </div>
                        </div>
                        <div className="col-span-full">
                          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                          </label>
                          <div className="mt-2">
                            <input
                              id="street-address"
                              name="password"
                              type="password"
                              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none"
                            />
                          </div>
                        </div>
                        <div className='flex justify-end gap-3 mt-2'>
                          <button className="rounded-full bg-black text-white px-5 py-1.5 my-2">Login</button>
                          <button className="rounded-full bg-black text-white px-5 py-1.5 my-2">Cancle</button>
                        </div>
                      </form>
                    </div>
                </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
