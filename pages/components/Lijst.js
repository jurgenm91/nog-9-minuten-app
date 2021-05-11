import ReactPlayer from "react-player/lazy";

function Lijst(props) {
  return (
    <div>
      <div className="mt-12">
        <a>
          <div class="mb-5  max-w-full md:mx-auto mx-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="flex">
              <div>
                <ReactPlayer width="200px" height="200px" url={props.url} />
              </div>

              <div className="pl-5 pt-1">
                <div class="uppercase tracking-wide text-sm text-gray-700 font-semibold">
                  DAG {props.dag}
                </div>
                <div className=" text-lg text-gray-700 font-semibold">
                  {props.titel}
                </div>

                <div className="text-sm text-gray-500 font-regular">
                  {props.omschrijving}
                </div>
                <div className="mt-2 mb-5"></div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Lijst;
