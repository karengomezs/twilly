"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";

export default function SignInForm() {
  return (
    <div className="flex flex-col items-center  text-lime-500 font-semibold">
      <h2 className="text-2xl mb-5">Log In</h2>
      <Form.Root className="flex flex-col gap-4">
        <Form.Field className="mx-auto" name="email">
          <div className="flex flex-col gap-1">
            <Form.Label className="">User</Form.Label>
            <Form.Control asChild>
              <input className="w-60 p-2 rounded-md" type="email" required />
            </Form.Control>
          </div>
        </Form.Field>

        <Form.Field className="mx-auto" name="email">
          <div className="flex flex-col gap-1">
            <Form.Label className="">Password</Form.Label>
            <Form.Control asChild>
              <input className="w-60 p-2 rounded-md" type="email" required />
            </Form.Control>
          </div>
        </Form.Field>

        <Form.Submit asChild>
          <button className="w-60 p-2 mt-3 mx-auto rounded-md bg-lime-500 text-center text-gray-950">
            Sign In
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
