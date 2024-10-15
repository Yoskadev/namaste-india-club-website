import Head from "next/head";
import { permanentRedirect } from "next/navigation";

export default function Home() {
  permanentRedirect("/hotels");

  return (
    <div>
      <Head>
        <title>Responsive Container Example</title>
      </Head>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8 ">
        <h1 className="text-center text-2xl font-bold py-4">
          Welcome to My Next.js App with Tailwind CSS
        </h1>
        <p className="text-center">
          This is an example of a responsive container using Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
