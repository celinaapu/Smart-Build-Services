import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col gap-4 m-5">
        <Link
          href="/dashboard"
          className="rounded-full text-white bg-eaa-purple-300 hover:opacity-80 duration-300 w-fit py-2 px-5"
        >
          See dashboard
        </Link>
        <Link
          href="/signup"
          className="rounded-full text-eaa-purple-300 font-medium hover:opacity-80 duration-300 bg-eaa-green-300 w-fit py-2 px-5"
        >
          Signup
        </Link>
      </section>
    </div>
  );
}
