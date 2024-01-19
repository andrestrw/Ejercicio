"use client";

import { Button } from "@/components";
import { useURL } from "@/hooks";

import { FormEventHandler } from "react";

type ValueInput = {
  target: any;
  value?: string | number;
};

const Search = () => {
  const { setQuery } = useURL();
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log("MANEJADOR DE EVENTOS DEL FORMULARIO", e);
    const channel = (e as ValueInput)?.target[0].value;
    setQuery({ channel, page: 1 });
  };
  return (
    <main className="container mx-auto pt-14 px-8">
      <div className="flex justify-center ">
        <form
          className="flex flex-col gap-6 w-2/4 justify-center justify-items-center rounded-lg   "
          onSubmit={onSubmit}
        >
          <input className="rounded-lg px-3 py-3 " name="channel" />
          <Button htmlType="submit">Submit</Button>
        </form>
      </div>
    </main>
  );
};

export default Search;
