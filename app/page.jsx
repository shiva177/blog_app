import Link from 'next/link';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="container flex flex-col md:flex-row gap-5 h-[calc(100vh-4rem)]">
      <div className="basis-full flex flex-col justify-center md:basis-2/3">
        <p className="special-word text-xs">A Blogging Stage</p>
        <h1 className="pb-5">
          Your <span className="special-word">Voice,</span><br /> Your Platform
        </h1>
        <p>Amplify Your Voice, Share Your Story. Empowering individuals to express themselves freely and connect with like-minded individuals through the art of blogging.</p>
        <Link href="/blog">
          <p className="bg-purple-500 text-black px-4 py-2 rounded-lg mt-4 inline-block hover:bg-white hover:text-black transition duration-300">Explore Blogs</p>
        </Link>
      </div>
    </div>
  );
}
