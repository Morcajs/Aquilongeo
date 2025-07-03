
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4 md:p-10">
      <header className="mb-10 text-center">
        <img src="/logo.png" alt="Aquilon Geo Logo" className="mx-auto w-32 h-auto mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold mb-2">AQUILON GEO</h1>
        <p className="text-lg text-blue-600 font-semibold">Hydrogeologie pod kontrolou</p>

        <nav className="flex justify-center space-x-6 mt-6 text-blue-700 font-semibold">
          <a href="#o-nas" className="hover:underline">O nás</a>
          <a href="#sluzby" className="hover:underline">Služby</a>
          <a href="#reference" className="hover:underline">Reference</a>
          <a href="#kontakt" className="hover:underline">Kontakt</a>
        </nav>
      </header>

      <section id="o-nas" className="mb-10 text-center">
        <h2 className="text-2xl font-bold mb-4">O nás</h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          Jsme specializovaná firma s více než 5 lety praxe v oboru hydrogeologie. Zaměřujeme se na odborné posudky, vsakování, čerpací zkoušky a monitoring podzemních vod. Spolupracujeme s klienty z celé ČR a dbáme na kvalitu, přesnost a rychlé dodání výstupů.
        </p>
      </section>

      <section id="sluzby" className="mb-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Služby</h2>
        <ul className="list-none space-y-2">
          <li>Hydrogeologické posudky</li>
          <li>Hydrogeologické monitoringy</li>
          <li>Vsakovací, čerpací zkoušky</li>
          <li>Studny</li>
          <li>Sanační práce</li>
        </ul>
      </section>

      <section id="reference" className="mb-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Reference</h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto">
          Mezi naše realizované projekty patří například monitoring v areálu Třineckých železáren, vsakování srážkových vod v Loučné nad Desnou, sanace kontaminace v Markvartovicích a další desítky zakázek po celé republice.
        </p>
      </section>

      <section id="kontakt" className="text-center">
        <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
        <p className="text-base md:text-lg font-semibold">Mgr. Radek Morcinek</p>
        <p className="text-base md:text-lg">📞 +420 739 146 737</p>
        <p className="text-base md:text-lg">✉️ info@aquilongeo.cz</p>
        <p className="text-base md:text-lg">🌐 www.aquilongeo.cz</p>
      </section>
    </div>
  );
}
