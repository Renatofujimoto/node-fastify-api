"use client";
import { Poll, useQueryPolls } from "@/app/hooks/polls";

export default function PollList(id: Number) {
  const { data } = useQueryPolls(id);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        {data?.map((data: any) => (
          <div key={data.id}>
            <h2 className="text-2xl">{data}</h2>
          </div>
        ))}
      </main>
    </>
  );
}
