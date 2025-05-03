export function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu Carrinho</h1>

      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img className="w-28" src="https://a-static.mlcdn.com.br/1500x1500/airpods-apple-com-estojo-de-recarga/magazineluiza/223026300/c07710dceefc3ded640be6a20db6a167.jpg" alt="Logo do Produto" />
        <strong>Preço: R$1.000,00</strong>
        <div className="flex items-center justify-center gap-3">
          <button className="bg-slate-600 px-2 rounded text-white font-medium justify-center ">-</button>
          1
          <button className="bg-slate-600 px-2 rounded text-white font-medium justify-center ">+</button>
        </div>
        <strong className="float-right">
          Subtotal: R$1.000,00
        </strong>
      </section>

      <p className="font-bold mt-4">Total: R$1.000,0</p>
    </div>
  );
}
