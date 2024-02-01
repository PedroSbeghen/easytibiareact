'use client';
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [gc, setGc] = useState(`0`);

  const [tc, setTc] = useState(`38000`);

  const [qtdTc, setQtdTc] = useState(`1`);

  const [vtc, setVtc] = useState(`45`);

  const [tot, setTot] = useState(`0`);

function toFloat(val: string){
  return val.replaceAll('.','').replaceAll(',','.');
}

const calc = (key: string) => { 
  let fGc = parseFloat(toFloat(gc)) || 1;
  let fTc = parseFloat(toFloat(tc)) || 1;
  let fQtdTc = parseFloat(toFloat(qtdTc)) || 1;
  let fVtc = parseFloat(toFloat(vtc)) || 1;
  let fTot = parseFloat(toFloat(tot)) || 1; 

  let total = ((((fGc*1000000)/fTc)*fVtc)/250)

  let totalGc = ((((fTot/fVtc)*250)*fTc)/1000000)

  switch (key) {
    case "GC":
      setTot(`${total.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);
      break;
    case "TC":

      break;
    case "QTDTC":

      break;
    case "VTC":

      break;
    case "TOT":
      setGc(`${totalGc.toLocaleString('pt-BR')}`);
      break;
    default:
      break;
  }
  // setTc(``);
  // setQtdTc(``);
  // setVtc(``);
}


const mascaraMoeda = (event) => {
  const onlyDigits = event.target.value
    .split("")
    .filter(s => /\d/.test(s))
    .join("")
    .padStart(3, "0")
  const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)
  event.target.value = maskCurrency(digitsFloat)
}

const maskCurrency = (valor, locale = 'pt-BR', currency = 'BRL') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency
  }).format(valor)
}


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Yellowdrop Remains</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.tibia.com/community/?name=upback+yellowdrop"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/static/upback.png"
              alt="Upback Yellowdrop"
              className="dark:invert w-auto h-auto"
              width={200}
              height={48}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-auto h-auto"
          src="/static/yellowdrop.png"
          alt="Yellow Drop"
          width={360}
          height={24}
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Gold Coins{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Valor em kk's de gold coins:
          </p>
          <input id="gc" type="text" value={gc} onChange={(e) => setGc(e.target.value)} onKeyUp={(e)=> {calc(`GC`);}} />
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Tibia Coin{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Valor do Tibia Coin:
          </p>
          <input id="tc" type="text" value={tc} onChange={(e) => { setTc(e.target.value) }} />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Qtd:
          </p>
          <input id="qtdTc" type="text" value={qtdTc} disabled onChange={(e) => setQtdTc(e.target.value) } />
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Vendedor TC{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Valor de venda x250TC em R$:
          </p>
          <input id="vtc" type="text" value={vtc} onChange={(e) => setVtc(e.target.value)} />
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Reais{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Valor em R$:
          </p>
          <input id="tot" type="text" value={tot} onChange={(e) => setTot(e.target.value)} onKeyUp={(e)=> {calc(`TOT`);}} />

        </div>

      </div>

    </main>
  )
}
