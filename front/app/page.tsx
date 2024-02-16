import PollList from "../../front/app/components/pollsList";

export default function Home() {
  return (
    <>
      <div className="container text-center justify-items-center bg-slate-500 w-full h-screen">
        <PollList pollId={"ad80f558-c23b-4ec5-94e6-530ae94df0bb"} />
      </div>
    </>
  );
}
