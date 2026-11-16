export function PrivacyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-6">
      <header className="space-y-2 border-b border-emerald-950/10 pb-6">
        <p className="text-xs font-semibold text-safari-emerald">Conformidade LGPD</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-safari-ink">
          Política de Privacidade
        </h1>
        <p className="text-sm text-safari-muted">
          Safári Diversão · Tratamento transparente e seguro de dados pessoais.
        </p>
      </header>

      <section className="space-y-3 text-sm sm:text-base text-safari-muted leading-relaxed">
        <h2 className="font-display text-xl font-bold text-safari-ink">
          1. Proteção integral à infância
        </h2>
        <p>
          A Safári Diversão não coleta dados pessoais de crianças em seus formulários online. Toda compra de ingressos e comunicação é realizada exclusivamente por adultos responsáveis.
        </p>

        <h2 className="font-display text-xl font-bold text-safari-ink pt-3">
          2. Dados coletados e finalidade
        </h2>
        <p>
          Registramos apenas as informações estritamente necessárias para emissão de ingressos, atendimento ao cliente e formalização de parcerias com influenciadores aprovados (com solicitação de CPF somente quando indispensável para faturamento e pagamento de comissões).
        </p>

        <h2 className="font-display text-xl font-bold text-safari-ink pt-3">
          3. Cookies e rastreamento de links
        </h2>
        <p>
          Cookies essenciais preservam a unidade escolhida e o código promocional durante sua navegação. Ferramentas analíticas seguem as escolhas registradas no banner de consentimento.
        </p>
      </section>
    </article>
  );
}
