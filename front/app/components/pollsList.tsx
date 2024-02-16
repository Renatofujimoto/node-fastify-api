"use client";
import React from "react";
import { useQueryPolls } from "../hooks/polls";

function PollComponent({ pollId: pollId }: { pollId: string }) {
  const { data, isLoading, error } = useQueryPolls(pollId);

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Ocorreu um erro: {error.message}</div>;

  return (
    <div className="container text-center justify-items-center bg-slate-500 w-full h-screen">
      {data && (
        <div>
          <p className="text-xl font-extrabold pt-[15%]">{data.poll.title}</p>
          <ul>
            {data.poll.options.map((option: any) => (
              <li
                key={option.id}
                className="bg-slate-400 rounded-lg my-4 w-1/4 h-8 text-center justify-center mx-auto font-bold"
              >
                {option.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PollComponent;
