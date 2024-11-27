export default function MyProfileSection(props: any) {
  return (
    <section className="flex flex-col space-y-4 border-b-2 border-b-gray-100 pl-8 pb-4">
      <header className="justify-items-start">
        <figure className=" bg-slate-300 py-8 px-10 rounded-full font-extralight text-2xl text-sky-700">
          N
        </figure>
      </header>
      <article className="flex flex-col space-y-4">
        <section className="flex flex-col space-y-2">
          <h1 className="text-gray-100 text-lg first-letter:uppercase">
            {props.username}
          </h1>
          <p className="text-gray-100">{props.role}</p>
        </section>
        <section className="flex flex-col space-y-2">
          <section>
            <button className="text-gray-100 font-extralight hover:text-sky-200 hover:pl-4 ease-out duration-300">
              Mon Historique
            </button>
          </section>
          <section>
            <button className="text-gray-100 font-extralight hover:text-sky-200 hover:pl-4 ease-out duration-300">
              Deconnection
            </button>
          </section>
        </section>
      </article>
    </section>
  );
}
