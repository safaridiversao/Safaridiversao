import { useState } from 'react';
import { CheckCircle2, Link2, ShieldCheck } from 'lucide-react';

interface PartnerFormState {
  fullName: string;
  artisticName: string;
  email: string;
  whatsapp: string;
  instagram: string;
  city: string;
  state: string;
  desiredCode: string;
}

const INITIAL_FORM: PartnerFormState = {
  fullName: '',
  artisticName: '',
  email: '',
  whatsapp: '',
  instagram: '',
  city: '',
  state: '',
  desiredCode: '',
};

const UF_OPTIONS = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
  'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC',
  'SP', 'SE', 'TO',
];

export function PartnerPage() {
  const [form, setForm] = useState<PartnerFormState>(INITIAL_FORM);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof PartnerFormState>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    if (form.fullName.trim().length < 3) {
      setErrorMsg('Informe seu nome completo.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setErrorMsg('Informe um endereço de e-mail válido.');
      return;
    }
    if (form.whatsapp.replace(/\D/g, '').length < 10) {
      setErrorMsg('Informe um WhatsApp válido com DDD.');
      return;
    }
    if (!/^[A-Za-z0-9]{3,16}$/.test(form.desiredCode.trim())) {
      setErrorMsg('O código exclusivo deve ter de 3 a 16 letras ou números, sem espaços.');
      return;
    }

    setSubmitted(true);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid lg:grid-cols-12 gap-10 items-start">
      <div className="lg:col-span-5 space-y-5">
        <p className="text-xs font-semibold text-safari-emerald">
          Programa de Afiliados Safári Diversão
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-safari-ink text-balance">
          Seja um influenciador parceiro da Safári
        </h1>
        <p className="text-sm sm:text-base text-safari-muted leading-relaxed">
          Compartilhe momentos de lazer seguro em família nos shoppings e receba um código exclusivo para rastrear cliques, vendas confirmadas e comissões.
        </p>

        <div className="bg-white rounded-2xl border border-emerald-950/10 p-5 space-y-3 text-sm">
          <div className="flex items-start gap-2.5">
            <Link2 className="w-4 h-4 text-safari-emerald shrink-0 mt-0.5" />
            <p className="text-safari-muted">
              <strong className="text-safari-ink">Links com 3 identificadores:</strong> seu código exclusivo, a unidade Safári e a campanha promocional.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-safari-emerald shrink-0 mt-0.5" />
            <p className="text-safari-muted">
              <strong className="text-safari-ink">Privacidade LGPD:</strong> o CPF só é solicitado posteriormente caso aprovado para formalização e pagamento de comissões.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 bg-white rounded-2xl border border-emerald-950/10 p-6 sm:p-8">
        {submitted ? (
          <div className="space-y-4 py-4">
            <CheckCircle2 className="w-10 h-10 text-safari-emerald" />
            <h2 className="font-display text-2xl font-bold text-safari-ink">
              Dados validados com sucesso!
            </h2>
            <p className="text-sm text-safari-muted leading-relaxed">
              Recebemos a pré-inscrição de <strong>{form.artisticName || form.fullName}</strong> com código sugerido{' '}
              <span className="font-mono font-semibold text-safari-ink">
                {form.desiredCode.toUpperCase()}
              </span>.
            </p>
            <p className="text-xs sm:text-sm text-safari-muted bg-safari-canvas border border-emerald-950/10 rounded-xl p-4">
              Nota de etapa: a persistência real em banco de dados, login do afiliado e fila de aprovação do administrador serão ativadas nas Etapas 2 e 3.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setForm(INITIAL_FORM);
              }}
              className="px-5 py-2.5 rounded-xl border border-emerald-950/15 text-sm font-semibold text-safari-ink hover:bg-safari-canvas"
            >
              Preencher outro cadastro
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="font-display text-xl font-bold text-safari-ink">
              Solicitação de cadastro de afiliado
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="aff-fullname" className="block text-xs font-semibold text-safari-ink mb-1">
                  Nome completo *
                </label>
                <input
                  id="aff-fullname"
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-emerald-950/15 bg-safari-canvas text-sm"
                />
              </div>

              <div>
                <label htmlFor="aff-artistic" className="block text-xs font-semibold text-safari-ink mb-1">
                  Nome artístico / Perfil *
                </label>
                <input
                  id="aff-artistic"
                  type="text"
                  required
                  value={form.artisticName}
                  onChange={(e) => updateField('artisticName', e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-emerald-950/15 bg-safari-canvas text-sm"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="aff-email" className="block text-xs font-semibold text-safari-ink mb-1">
                  E-mail *
                </label>
                <input
                  id="aff-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-emerald-950/15 bg-safari-canvas text-sm"
                />
              </div>

              <div>
                <label htmlFor="aff-whatsapp" className="block text-xs font-semibold text-safari-ink mb-1">
                  WhatsApp (com DDD) *
                </label>
                <input
                  id="aff-whatsapp"
                  type="tel"
                  required
                  placeholder="(19) 99999-0000"
                  value={form.whatsapp}
                  onChange={(e) => updateField('whatsapp', e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-emerald-950/15 bg-safari-canvas text-sm"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="aff-ig" className="block text-xs font-semibold text-safari-ink mb-1">
                  Instagram *
                </label>
                <input
                  id="aff-ig"
                  type="text"
                  required
                  placeholder="@seuperfil"
                  value={form.instagram}
                  onChange={(e) => updateField('instagram', e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-emerald-950/15 bg-safari-canvas text-sm"
                />
              </div>

              <div>
                <label htmlFor="aff-city" className="block text-xs font-semibold text-safari-ink mb-1">
                  Cidade *
                </label>
                <input
                  id="aff-city"
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => updateField('city', e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-emerald-950/15 bg-safari-canvas text-sm"
                />
              </div>

              <div>
                <label htmlFor="aff-state" className="block text-xs font-semibold text-safari-ink mb-1">
                  Estado (UF) *
                </label>
                <select
                  id="aff-state"
                  required
                  value={form.state}
                  onChange={(e) => updateField('state', e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-emerald-950/15 bg-safari-canvas text-sm"
                >
                  <option value="">UF</option>
                  {UF_OPTIONS.map((uf) => (
                    <option key={uf} value={uf}>
                      {uf}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="aff-code" className="block text-xs font-semibold text-safari-ink mb-1">
                Código exclusivo desejado (ex.: KEL01) *
              </label>
              <input
                id="aff-code"
                type="text"
                required
                placeholder="Ex.: FAMILIA01"
                value={form.desiredCode}
                onChange={(e) => updateField('desiredCode', e.target.value.toUpperCase())}
                className="w-full h-11 px-3.5 rounded-xl border border-emerald-950/15 bg-safari-canvas font-mono text-sm uppercase"
              />
            </div>

            {errorMsg && (
              <p role="alert" className="text-xs sm:text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-safari-coral hover:bg-safari-coral-hover text-white font-display font-bold text-base transition-colors"
            >
              Enviar solicitação de parceria
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
