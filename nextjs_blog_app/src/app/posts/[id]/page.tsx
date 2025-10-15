import { promises } from "dns";
import { notFound } from "next/navigation";
import React from "react";

interface page {
  params: Promise<{
    id: number;
  }>;
}

const Page = async ({ params }: page) => {
  const id = (await params).id;
  if (!id) return notFound();
  return <div>HEllo {id}</div>;
};

export default Page;
