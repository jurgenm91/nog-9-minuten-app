import Image from "next/image";
import Link from "next/link";

function Collectie() {
  return (
    <div className="">
      <Link href="/meditaties">
        <a>
          <div class="mb-5 max-w-full  md:mx-auto  bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-2xl">
            <div class="flex">
              <Image
                src="/images/album.jpg"
                width={200}
                height={200}
                className="h-full w-40 md:h-40 md:w-40 object-cover"
              ></Image>

              <div className="pl-5 pt-1">
                <div class="flex uppercase tracking-wide text-sm text-gray-700 font-semibold">
                  <p className="flex-1 text-left">februari</p>
                </div>
                <div className=" text-lg text-gray-700 font-semibold">
                  Meditaties Dag 1 - 21
                </div>

                <div className="text-sm text-gray-500 font-regular">
                  Hier vind je de meditaties terug van de maand februari.
                </div>
                <div className="mt-2 mb-5">
                  <Link href="/meditaties">
                    <a className="px-2 border rounded border-purple-500 p-1 text-sm text-purple-500">
                      Ontdekken
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Collectie;
