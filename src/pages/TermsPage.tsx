export function TermsPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-6">
      <header className="space-y-2 border-b border-emerald-950/10 pb-6">
        <p className="text-xs font-semibold text-safari-emerald">Normas da plataforma</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-safari-ink">
          Termos de Uso
        </h1>
        <p className="text-sm text-safari-muted">
          Regras gerais de utilização dos canais digitais e parques Safári Diversão.
        </p>
      </header>

      <section className="space-y-3 text-sm sm:text-base text-safari-muted leading-relaxed">
        <h2 className="font-display text-xl font-bold text-safari-ink">
          1. Uso dos ingressos nas unidades
        </h2>
        <p>
          Cada passaporte é válido para a unidade selecionada no momento da compra e segue os horários de funcionamento do shopping correspondente, bem como as normas de segurança e faixa etária de cada brinquedo.
        </p>

        <h2 className="font-display text-xl font-bold text-safari-ink pt-3">
          2. Loja de brinquedos e redirecionamento Shopee
        </h2>
        <p>
          Os produtos exibidos na seção Loja Safári direcionam o visitante para a loja oficial da empresa na Shopee, onde se aplicam os termos de frete, pagamento e entrega da plataforma parceira.
        </p>

        <h2 className="font-display text-xl font-bold text-safari-ink pt-3">
          3. Programa de Afiliados
        </h2>
        <p>
          O ingresso no programa depende de aprovação administrativa e observância às diretrizes de comunicação familiar da marca. Comissões são calculadas exclusivamente sobre vendas válidas e confirmadas.
        </p>
      </section>
    </article>
  );
}
