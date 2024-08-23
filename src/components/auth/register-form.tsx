'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '@/schemas/AuthSchemas';

import Link from 'next/link';
import React, { useTransition } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

export default function RegisterForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      terms: false,
    },
    mode: 'onChange',
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      console.log(values);
      toast.success('Registered successfully');
    });
  };

  return (
    <div className="md:max-w-[22.5rem] w-full flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-6">
        <h1 className="font-medium text-[2.5rem] text-black">Register</h1>
        <span className="text-base text-border">
          Already have an account?{' '}
          <Link href="/auth/login">
            <span className="font-semibold text-[#38CB89]">Login</span>
          </Link>
        </span>
      </div>
      <div className="w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="w-full">
                    <Input
                      {...field}
                      className="w-full h-11 border-0 border-b-2 outline-none border-b-secondary  rounded-none p-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Name"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="w-full">
                    <Input
                      {...field}
                      className="w-full h-11 border-0 border-b-2 outline-none border-b-secondary  rounded-none p-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Username"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="w-full">
                    <Input
                      {...field}
                      className="w-full h-11 border-0 border-b-2 outline-none border-b-secondary  rounded-none p-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Email Address"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="w-full">
                    <Input
                      {...field}
                      className="w-full h-11 border-0 border-b-2 outline-none border-b-secondary  rounded-none p-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Password"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="w-full">
                    <div className="items-top flex space-x-2">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="terms"
                        name="terms"
                        className="data-[state=checked]:bg-black"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree with <strong>Privacy Policy</strong> and{' '}
                        <strong>Terms of Use</strong>
                      </label>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              variant="outline"
              disabled={isPending}
              type="submit"
              className="w-full"
            >
              Register
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
