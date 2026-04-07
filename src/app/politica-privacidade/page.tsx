import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade e tratamento de dados pessoais conforme a LGPD — Lei Geral de Proteção de Dados.",
  robots: { index: false, follow: false },
};

const LAST_UPDATED = "07 de abril de 2025"; // EDITÁVEL

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div
        className="pt-24 pb-12 px-4"
        style={{
          background: "linear-gradient(135deg, #0f2240 0%, #1e3a5f 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white mb-3">
            Política de Privacidade
          </h1>
          <p className="text-white/60 text-sm">
            Última atualização: {LAST_UPDATED}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12 prose prose-gray max-w-none">
          <Section title="1. Quem somos">
            <p>
              <strong>{CONTACT.name}</strong>{/* EDITÁVEL */} atua como correspondente bancário nos
              termos da Resolução CMN nº 3.954/11, com sede em{" "}
              <strong>{CONTACT.city} — {CONTACT.state}</strong>{/* EDITÁVEL */}. Para contato:{" "}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
            </p>
          </Section>

          <Section title="2. Dados que coletamos">
            <p>Coletamos apenas os dados necessários para prestação dos nossos serviços:</p>
            <ul>
              <li><strong>Dados de identificação:</strong> nome completo, CPF/CNPJ.</li>
              <li><strong>Dados de contato:</strong> telefone/WhatsApp, e-mail, cidade.</li>
              <li><strong>Dados do negócio:</strong> descrição da atividade, finalidade do crédito, valor e prazo desejados.</li>
              <li><strong>Dados de navegação:</strong> cookies, endereço IP, tipo de navegador e páginas visitadas (coletados automaticamente).</li>
            </ul>
          </Section>

          <Section title="3. Finalidade do tratamento">
            <p>Utilizamos seus dados para:</p>
            <ul>
              <li>Análise de elegibilidade para as linhas de crédito da Fomento Paraná;</li>
              <li>Elaboração e encaminhamento de proposta de crédito;</li>
              <li>Comunicação sobre o andamento do processo;</li>
              <li>Melhoria dos nossos serviços e do site;</li>
              <li>Cumprimento de obrigações legais e regulatórias.</li>
            </ul>
          </Section>

          <Section title="4. Base legal">
            <p>
              O tratamento de dados é realizado com base no{" "}
              <strong>consentimento do titular</strong> (Art. 7º, I da LGPD), na{" "}
              <strong>execução de contrato ou procedimentos preliminares</strong>{" "}
              (Art. 7º, V da LGPD) e no{" "}
              <strong>cumprimento de obrigação legal</strong> (Art. 7º, II da
              LGPD).
            </p>
          </Section>

          <Section title="5. Compartilhamento de dados">
            <p>
              Seus dados poderão ser compartilhados exclusivamente com a{" "}
              <strong>Fomento Paraná — Agência de Fomento do Paraná S/A</strong>{" "}
              para fins de análise de crédito, conforme autorização prévia do
              titular. Não vendemos, alugamos ou cedemos dados pessoais a
              terceiros para fins comerciais.
            </p>
          </Section>

          <Section title="6. Retenção de dados">
            <p>
              Os dados são armazenados pelo tempo necessário para a execução dos
              serviços e cumprimento de obrigações legais, observando os prazos
              mínimos exigidos pelas regulamentações do Banco Central do Brasil e
              pela LGPD.
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              Utilizamos cookies essenciais para o funcionamento do site e
              cookies analíticos (como Google Analytics) para entender o
              comportamento de navegação e melhorar a experiência. Ao continuar
              navegando, você consente com o uso de cookies. Você pode
              desabilitá-los nas configurações do seu navegador, mas isso pode
              afetar a funcionalidade do site.
            </p>
          </Section>

          <Section title="8. Direitos do titular">
            <p>
              Nos termos da LGPD (Lei nº 13.709/2018), você tem direito a:
            </p>
            <ul>
              <li>Confirmar a existência de tratamento de seus dados;</li>
              <li>Acessar seus dados pessoais;</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Portabilidade dos dados;</li>
              <li>Revogar o consentimento a qualquer momento;</li>
              <li>Opor-se ao tratamento em caso de descumprimento da lei.</li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato pelo e-mail{" "}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>{/* EDITÁVEL */}.
            </p>
          </Section>

          <Section title="9. Segurança">
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para
              proteger seus dados contra acesso não autorizado, perda,
              destruição ou divulgação indevida, em conformidade com as boas
              práticas de segurança da informação.
            </p>
          </Section>

          <Section title="10. Alterações desta política">
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente.
              Recomendamos que você a revise regularmente. A data da última
              atualização está indicada no topo desta página.
            </p>
          </Section>

          <Section title="11. Contato">
            <p>
              Dúvidas sobre esta política ou sobre o tratamento dos seus dados?
              Entre em contato:
            </p>
            <ul>
              <li>
                <strong>E-mail:</strong>{" "}
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>{/* EDITÁVEL */}
              </li>
              <li>
                <strong>Telefone:</strong> {CONTACT.phone}{/* EDITÁVEL */}
              </li>
            </ul>
          </Section>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-blue-900 font-semibold text-sm hover:underline"
          >
            ← Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-bold text-blue-900 mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed text-sm space-y-2">
        {children}
      </div>
    </div>
  );
}
