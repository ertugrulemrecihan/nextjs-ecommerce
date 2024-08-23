'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas/AuthSchemas';

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

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      emailOrUsername: '',
      password: '',
      remember: false,
    },
    mode: 'onChange',
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      console.log(values);
      toast.success('Login successfully');
    });
  };

  return (
    <div className="md:max-w-[22.5rem] w-full flex flex-col gap-y-8">
      <div className="flex flex-col gap-y-6">
        <h1 className="font-medium text-[2.5rem] text-black">Login</h1>
        <span className="text-base text-border">
          Don’t have an account yet?{' '}
          <Link href="/auth/register">
            <span className="font-semibold text-[#38CB89]">Register</span>
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
              name="emailOrUsername"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="w-full">
                    <Input
                      {...field}
                      className="w-full h-11 border-0 border-b-2 outline-none border-b-secondary rounded-none p-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Email or Username"
                      type="text"
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
                      className="w-full h-11 border-0 border-b-2 outline-none border-b-secondary rounded-none p-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Password"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center">
              <FormField
                control={form.control}
                name="remember"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="w-full">
                      <div className="items-top flex space-x-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          id="remember"
                          name="remember"
                          className="data-[state=checked]:bg-black"
                        />
                        <label
                          htmlFor="remember"
                          className="text-base leading-none peer-disabled:cursor-not-allowed text-[#6C7275]"
                        >
                          Remember me
                        </label>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Link href="/auth/forgot-password">
                <span className="text-base font-semibold text-[#141718] text-nowrap">
                  Forgot password?
                </span>
              </Link>
            </div>

            <Button
              variant="outline"
              disabled={isPending}
              type="submit"
              className="w-full"
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
