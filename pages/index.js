import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <Head>
        <title>Aquilon Geo</title>
      </Head>

      <header className="text-center mb-10">
        <img src="/logo.png" alt="Logo" className="mx-auto w-28 h-auto mb-4" />
        <h1 className="text-4xl font-bold">Aquilon Geo</h1>
        <p className="text-blue-700 mt-2">Hydrogeologie pod kontrolou</p>
      </header>

      <main className="max-w-3xl mx-auto text-center space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">O nás</h2>
          <p>Jsme specialisté na hydrogeologii, monitoringy a vsakování srážkových vod. S více než 5 lety praxe nabízíme kvalitní odborné výstupy po celé ČR.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Služby</h2>
          <ul className="list-disc list-inside text-left mx-auto max-w-md">
            <li>Hydrogeologické posudky</li>
            <li>Hydrogeologické monitoringy</li>
            <li>Vsakovací, čerpací zkoušky</li>
            <li>Studny</li>
            <li>Sanační práce</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Kontakt</h2>
          <p>Mgr. Radek Morcinek</p>
          <p>📞 +420 739 146 737</p>
          <p>✉️ morcajs@gmail.com</p>
        </section>
      </main>
    </div>
  )
}
