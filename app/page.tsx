import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between p-12 
     md:p-24 gap-8
    '>
      <h1 className='text-4xl font-bold text-center text-gray-900 mb-8'>
        Application PWA (Progressive Web App)
      </h1>
      <p>
        Ceci est une application web progressive (PWA). Elle est installable sur
        tous les appareils, qu&apos;ils soient mobiles, tablettes ou
        ordinateurs, et fonctionne également hors ligne. <br />
        Pour l&apos;installer, cliquez sur le bouton &quot;Installer&quot;{` `}
        <Image
          src='/install.png'
          alt='Installer'
          width={50}
          height={50}
          className='inline-block'
        />
        {` `}dans la barre d&apos;adresse de votre navigateur.☝️
      </p>
      <Image
        src='/install2.png'
        alt='Installer 2'
        width={250}
        height={500}
        className='inline-block'
      />
      <p>
        Une fois l&apos;application installée, vous pourrez retrouver
        l&apos;icone de l&apos;application(entierement personnalisable) dans le
        menu et/ou l&apos;écran d&apos;accueil de votre appareil. <br />
        Le fonctionnement et alors le meme que celui d&apos;une application
        native (provenant d&apos;un store d&apos;application, Android ou iOS).
      </p>
      <h2 className='text-2xl font-bold text-center text-gray-900 mt-8 mb-4'>
        Avantages des PWA :
      </h2>
      <ul>
        <li>
          Installation rapide et simple, sans passer par un store
          d&apos;application
        </li>
        <li>
          Développement d&apos;une seule application pour tous les appareils,
          sans avoir à développer une application pour chaque plateforme
          (Android, iOS, Windows, etc.)
        </li>
        <li>Installation sur tous les appareils</li>
        <li>Fonctionnement hors ligne</li>
        <li>Accès rapide et simple</li>
        <li>Notifications</li>
        <li>Accès à l&apos;appareil photo, au GPS, etc.</li>
        <li>
          Mise à jour automatique de l&apos;application, sans intervention de
          l&apos;utilisateur (contrairement à une application native)
        </li>
      </ul>
      <h2 className='text-2xl font-bold text-center text-gray-900 mt-8 mb-4'>
        Une fois l&apos;application installée les boutons suivants fonctionnent
        meme hors ligne :
      </h2>
      <p>
        Désactivez votre connexion internet et cliquez sur les boutons
        ci-dessous (Dans l&apos;application installée)
      </p>
      <div className='flex gap-4'>
        <Link
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
          href='/page1'>
          Page 1
        </Link>
        <Link
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
          href='/page2'>
          Page 2
        </Link>
      </div>
    </main>
  );
}
