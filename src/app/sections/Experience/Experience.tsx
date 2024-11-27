import Title from "../title"
import { CardExperience } from "./CardExperience"

export function Experience() {
  return (
    < >
      <div className="flex flex-col gap-2 mt-36 mb-10">
         <Title title="2+ YEARS XP"/>
        <div className="flex flex-wrap">
          <div className="flex leading-relaxed hover:text-sky-500 ">

            <CardExperience 
                title="Interstar"
                titleDescription="Developer Jr"
                content=" Análise e desenvolvimento de sites e sistemas. Análise,
              execução em plataforma de vendas White
                Label. Atuando no Front e Back End. Ferramentas utilizadas no
                dia a dia: React, JavaScript, TypeScript, Fluent Ui, Postgres,
                NestJS dentre outras."
                footercard="Cliente: Sicred e Sicoob"
              />
          </div>
            <div className="flex leading-relaxed">
              <CardExperience 
                title="Real Seguro Viagem"
                titleDescription="Intern Developer"
                content=" Estágio de Desenvolvimento de software: análise, planejamento,
                testes e execução com Ruby On Rails, Sinatra, Svelte e Postgres."
                footercard=""
              />
            </div>
            <div className="flex  leading-relaxed">
            <CardExperience 
                title="It Universe"
                titleDescription="Support Analyst"
                content="Identificação e resolução de problemas em sistemas internos;
                SmartSystem, BioSystem, Smart Ponto, Bio Ponto, NPS, Bio Malote,Workout. Config. manutenção Windows/Linux. Admin Active
                Directory. Totem e máquinas TEF (Pinpad)."
                footercard="Cliente: Smartfit / Bio Ritmo"
              />
            </div>
            <div className="flex  leading-relaxed">
              <CardExperience 
                  title="Algar Tech"
                  titleDescription="Support Analyst L2"
                  content=" Desenv. de processos para otimização de recursos. implementação
                  de boas práticas dentro da Metodologia ITIL.Monitoramento de rede. Segurança dos dados do
                  serviço. Resolução de Problemas aos colaboradores KPMG nacional
                  e internacional."
                  footercard="Cliente: KPMG Auditores Indpt."
                />
            </div>
        </div>
     </div>
    </>
  )
}
