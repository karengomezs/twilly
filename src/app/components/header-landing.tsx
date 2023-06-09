import Link from "next/link";

export default function HeaderLanding() {
  return (
    <header>
      <nav className="bg-gray-900 text-white py-4 px-24">
        <ul className="flex justify-between items-center">
          <li>
            <Link className="text-lime-500  text-3xl font-bold" href="">
              TWILLY
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
