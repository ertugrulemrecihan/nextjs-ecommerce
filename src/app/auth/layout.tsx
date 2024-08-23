import React from 'react';

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full flex md:flex-row flex-col h-screen">
      <div className="md:w-1/2 w-full bg-primary md:flex hidden flex-col justify-center p-8 gap-y-14">
        <div className="flex justify-center">
          <span className="text-2xl font-medium">
            nextjs-ecommerce<span className="text-border text-nowrap">.</span>
          </span>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="md:w-72 w-44 md:h-72 h-44 rounded-full bg-gradient-to-br from-blue-500 to-blue-300 blur-md animate-bounce"></div>
        </div>
      </div>
      <div className="md:w-1/2 md:p-0 p-6 w-full min-h-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
