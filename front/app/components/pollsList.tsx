"use client";
import React from "react";
import { useQueryPolls } from "../hooks/polls";
import { useVotePoll } from "../hooks/vote-on-poll";
import { Toaster } from "react-hot-toast";

function PollComponent({ pollId: pollId }: { pollId: string }) {
  const { data, isLoading, error } = useQueryPolls(pollId);
  const { mutate } = useVotePoll();

  const handleVote = async (e: any) => {
    mutate(e.target.value);
    console.log(e.target.value);
  };

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Ocorreu um erro: {error.message}</div>;

  return (
    <div className="container text-center justify-items-center bg-slate-500 w-full h-screen">
      {data && (
        <div>
          <Toaster />
          <p className="text-xl font-extrabold pt-[15%]">{data.poll.title}</p>
          {data.poll.options.map((option: any) => (
            <button
              onClick={handleVote}
              value={option.id}
              type="submit"
              id={option.id}
              key={option.id}
              className={
                "bg-slate-400 rounded-lg my-4 w-1/4 h-8 text-center justify-center items-center mx-auto font-bold flex flex-col"
              }
            >
              {option.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default PollComponent;
