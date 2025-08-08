const form = document.getElementById("form-inscricao");
const sucesso = document.getElementById("sucesso");
const botao = document.getElementById("btn-enviar");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Previne envio duplicado
    botao.disabled = true;
    botao.innerText = "Enviando...";

    const dados = new FormData(form);

    fetch(form.action, {
    method: "POST",
    body: dados
    })
    .then(res => res.text())
    .then(() => {
    form.reset();
    sucesso.classList.remove("hidden");
    botao.innerText = "Inscrição enviada ✔";
    })
    .catch(() => {
    alert("Ocorreu um erro. Tente novamente.");
    botao.disabled = false;
    botao.innerText = "Enviar Inscrição";
    });
});




// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Modal functionality
const modal = document.getElementById('modal');

function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

const swiper = new Swiper('.slider-wrapper', {

    spaceBetween: 10,
    grabCursor: true,
    
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        620:{
            slidesPerView: 1
        },
        1024:{
            slidesPerView: 1
        },   
    }
  });
        

// Dados dos componentes do programa
    const componentDetails = [
        {
            title: "Formações Intensivas",
            table: `
                <div class="overflow-x-auto mt-8">
                    <table class="w-full border text-sm md:text-base">
                        <thead>
                        <tr class="bg-primary text-white">
                            <th class="py-2 px-3 text-left">Formação e Formador</th>
                            <th class="py-2 px-3 text-left">Descrição</th>
                            <th class="py-2 px-3 text-left">Público-Alvo</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="border px-3 py-2">
                            Excel e Power BI para os Negócios <br>
                            <span class="text-gray-600 text-sm">Formador: Gil Mac-Mahon – FORMADOR CREDENCIADO PELO CENFFOR 0242 FPIF/2024</span>
                            </td>
                            <td class="border px-3 py-2">Ferramentas para análise de dados e visualização de indicadores</td>
                            <td class="border px-3 py-2">Universitários de todas as áreas</td>
                        </tr>
                        <tr>
                            <td class="border px-3 py-2">
                            Planeamento Estratégico para Pequenos Negócios <br>
                            <span class="text-gray-600 text-sm">Formador: Prof. Msc. Segunda Tavares</span>
                            </td>
                            <td class="border px-3 py-2">Criação de objetivos, metas e planos para PMEs</td>
                            <td class="border px-3 py-2">Estudantes de gestão e negócios</td>
                        </tr>
                        <tr>
                            <td class="border px-3 py-2">
                            Como Elaborar um Plano de Marketing <br>
                            <span class="text-gray-600 text-sm">Formador: Prof. Msc. Segunda Tavares</span>
                            </td>
                            <td class="border px-3 py-2">Estratégias práticas de marketing digital e tradicional para negócios</td>
                            <td class="border px-3 py-2">Estudantes de marketing e comunicação</td>
                        </tr>
                        <tr>
                            <td class="border px-3 py-2">
                            Empreendedorismo na Prática com Lean Inception <br>
                            <span class="text-gray-600 text-sm">Formadora: Nywkha Casimiro – CEO do CEU</span>
                            </td>
                            <td class="border px-3 py-2">Criação de MVPs e validação de ideias de negócio</td>
                            <td class="border px-3 py-2">Estudantes empreendedores</td>
                        </tr>
                        <tr>
                            <td class="border px-3 py-2">
                            Modelagem de Processos com BPMN no Bizagi para Iniciantes <br>
                            <span class="text-gray-600 text-sm">Formador: Dário Sassa – CEO da KUENHA</span>
                            </td>
                            <td class="border px-3 py-2">Modelagem de processos empresariais com software</td>
                            <td class="border px-3 py-2">Estudantes de gestão, TI e logística</td>
                        </tr>
                        <tr>
                            <td class="border px-3 py-2">
                            Contabilidade no Primavera <br>
                            <span class="text-gray-600 text-sm">Formadores: André Culolo – Delloite Angola; Bernel Bernau – Soares da Costa</span>
                            </td>
                            <td class="border px-3 py-2">Prática de contabilidade informatizada com sistema Primavera</td>
                            <td class="border px-3 py-2">Estudantes de contabilidade</td>
                        </tr>
                        <tr>
                            <td class="border px-3 py-2">
                            Gestão de Tempo: Como Organizar o Dia e Render Mais <br>
                            <span class="text-gray-600 text-sm">Formadora: Suzeth Coimbra – Customer and Team Manager</span>
                            </td>
                            <td class="border px-3 py-2">Aprende a organizar o dia, definir prioridades e aumentar a produtividade com técnicas práticas</td>
                            <td class="border px-3 py-2">Estudantes universitários</td>
                        </tr>
                        <tr>
                            <td class="border px-3 py-2">
                            Processamento dos Efluentes do Petróleo Bruto <br>
                            <span class="text-gray-600 text-sm">Formador: Manuel Cusseiala – Eng. Mecânico, TotalEnergies</span>
                            </td>
                            <td class="border px-3 py-2">Técnicas e tecnologias para tratamento de resíduos líquidos da indústria petrolífera, redução de impactos ambientais e recuperação de subprodutos</td>
                            <td class="border px-3 py-2">Estudantes de Engenharia de Petróleos, Mecânica, Química, Geologia e áreas afins</td>
                        </tr>
                        <tr>
                            <td class="border px-3 py-2">
                            Introdução à Tecnologia de Poços Submarinos <br>
                            <span class="text-gray-600 text-sm">Formador: Eng. Nhanga Pinto Cristovão – Director de Operações e Conselheiro Técnico, LUAJARDIM</span>
                            </td>
                            <td class="border px-3 py-2">Equipamentos, segurança operacional, manutenção e tendências da tecnologia em Angola e no mundo</td>
                            <td class="border px-3 py-2">Estudantes de Engenharia de Petróleos, Mecânica, Química, Geologia e áreas afins</td>
                        </tr>
                        <tr>
                            <td class="border px-3 py-2">
                            Introdução à Perfuração de Poços Submarinos <br>
                            <span class="text-gray-600 text-sm">Formador: Eng. Nhanga Pinto Cristovão – LUAJARDIM</span>
                            </td>
                            <td class="border px-3 py-2">Equipamentos, segurança operacional, manutenção e tendências da tecnologia</td>
                            <td class="border px-3 py-2">Estudantes de Engenharia de Petróleos, Mecânica, Química, Geologia e áreas afins</td>
                        </tr>
                        <tr>
                            <td class="border px-3 py-2">
                            Introdução à Completação de Poços Submarinos <br>
                            <span class="text-gray-600 text-sm">Formador: Eng. Nhanga Pinto Cristovão – LUAJARDIM</span>
                            </td>
                            <td class="border px-3 py-2">Equipamentos, segurança operacional, manutenção e tendências da tecnologia</td>
                            <td class="border px-3 py-2">Estudantes de Engenharia de Petróleos, Mecânica, Química, Geologia e áreas afins</td>
                        </tr>
                        <tr>
                            <td class="border px-3 py-2">
                            Filtração de Poços <br>
                            <span class="text-gray-600 text-sm">Formador: Eng. Nhanga Pinto Cristovão – LUAJARDIM</span>
                            </td>
                            <td class="border px-3 py-2">Equipamentos, segurança operacional, manutenção e tendências da tecnologia</td>
                            <td class="border px-3 py-2">Estudantes de Engenharia de Petróleos, Mecânica, Química, Geologia e áreas afins</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            `,
            cards: [
                { title: "Instrutores", desc: "Profissionais experientes do mercado." },
                { title: "Metodologia", desc: "Aulas práticas e dinâmicas." },
                { title: "Networking", desc: "Contato com outros estudantes e profissionais." }
            ]
        },
        {
            title: "Estágio Prático: Contabilidade no primavera",
            table: `
                <div class="grid md:grid-cols-2 gap-6 text-sm md:text-base mt-8">

                    <!-- Modalidade -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Modalidade</h3>
                        <p class="text-gray-700">Estágio presencial / híbrido</p>
                    </div>

                    <!-- Atividades -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Atividades</h3>
                        <p class="text-gray-700">Lançamentos, reconciliações, relatórios e operações no Primavera</p>
                    </div>

                    <!-- Supervisão -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Supervisão</h3>
                        <p class="text-gray-700">Contabilistas certificados</p>
                    </div>

                    <!-- Duração -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Duração</h3>
                        <p class="text-gray-700">12 semanas</p>
                    </div>

                    <!-- Requisitos -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Requisitos</h3>
                        <p class="text-gray-700">Frequência em curso de contabilidade ou gestão financeira</p>
                    </div>

                    <!-- Benefício -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Benefício</h3>
                        <p class="text-gray-700">Certificado + experiência prática</p>
                    </div>

                </div>

            `,
            cards: [
            ]
        },
        {
            title: "Acampamentos",
            table: `
                <div class="grid md:grid-cols-2 gap-6 text-sm md:text-base mt-8">
  
                    <!-- Local -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Local</h3>
                        <p class="text-gray-700">Uíge e Huambo</p>
                    </div>

                    <!-- Público-Alvo -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Público-Alvo</h3>
                        <p class="text-gray-700">Estudantes universitários</p>
                    </div>

                    <!-- Duração -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Duração</h3>
                        <p class="text-gray-700">3 Dias</p>
                    </div>

                    <!-- Atividades -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Atividades</h3>
                        <p class="text-gray-700">Dinâmicas de grupo, palestras, partilhas, jogos, workshops e cultura</p>
                    </div>

                    <!-- Objetivo -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border md:col-span-2">
                        <h3 class="text-primary font-semibold mb-1">Objetivo</h3>
                        <p class="text-gray-700">Fomentar liderança, trabalho em equipa e networking estudantil</p>
                    </div>

                </div>

            `,
            cards: [
            ]
        },
        {
            title: "Visitas Técnicas",
            table: `
                <div class="grid md:grid-cols-2 gap-6 text-sm md:text-base mt-8">
  
                    <!-- Duração -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Duração por visita</h3>
                        <p class="text-gray-700">2 a 3 horas</p>
                    </div>

                    <!-- Número de Participantes -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Número de participantes</h3>
                        <p class="text-gray-700">25 a 30 por visita (grupo reduzido por área)</p>
                    </div>

                    <!-- Pré-requisitos -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Pré-requisitos</h3>
                        <p class="text-gray-700">Inscrição online com selecção por perfil académico/interesse</p>
                    </div>

                    <!-- Acompanhamento -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Acompanhamento</h3>
                        <p class="text-gray-700">Cada grupo será acompanhado por um representante do LABCriativo</p>
                    </div>

                    <!-- Certificação -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border md:col-span-2">
                        <h3 class="text-primary font-semibold mb-1">Certificação</h3>
                        <p class="text-gray-700">Participantes receberão um Certificado de Participação em Visitas Técnicas</p>
                    </div>

                </div>

            `,
            cards: [
            ]
        },
        {
            title: "Projeto Comunitário",
            table: `
                <div class="grid md:grid-cols-2 gap-6 text-sm md:text-base mt-8">

                    <!-- Objetivo -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border md:col-span-2">
                        <h3 class="text-primary font-semibold mb-1">Objetivo</h3>
                        <p class="text-gray-700">Levar ferramentas digitais a microempreendedores informais</p>
                    </div>

                    <!-- Participações -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Participações</h3>
                        <p class="text-gray-700">Estudantes como agentes de transformação digital</p>
                    </div>

                    <!-- Ferramentas -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Ferramentas</h3>
                        <p class="text-gray-700">WhatsApp Business, Google Forms, redes sociais, apps de finanças simples</p>
                    </div>

                    <!-- Impacto Esperado -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border md:col-span-2">
                        <h3 class="text-primary font-semibold mb-1">Impacto Esperado</h3>
                        <p class="text-gray-700">Inclusão digital, aumento de rendimento, formalização de operações</p>
                    </div>

                </div>

            `,
            cards: [
            ]
        },
        {
            title: "Comunidade",
            table: `
                <div class="grid md:grid-cols-2 gap-6 text-sm md:text-base mt-8">
  
                    <!-- Objetivo -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border md:col-span-2">
                        <h3 class="text-primary font-semibold mb-1">Objetivo</h3>
                        <p class="text-gray-700">Criar uma rede de freelancers formados em marketing digital</p>
                    </div>

                    <!-- Atividades -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Atividades</h3>
                        <p class="text-gray-700">Formação prática, desafios, portfólio e oportunidades reais</p>
                    </div>

                    <!-- Conteúdos -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Conteúdos</h3>
                        <p class="text-gray-700">Redes sociais, copywriting, tráfego pago, automação</p>
                    </div>

                    <!-- Participação -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border">
                        <h3 class="text-primary font-semibold mb-1">Participação</h3>
                        <p class="text-gray-700">Estudantes e recém-formados em marketing e comunicação</p>
                    </div>

                    <!-- Resultados Esperados -->
                    <div class="bg-gray-50 p-5 rounded-xl shadow border md:col-span-2">
                        <h3 class="text-primary font-semibold mb-1">Resultados Esperados</h3>
                        <p class="text-gray-700">Geração de rendimento e inserção no mercado digital</p>
                    </div>

                </div>

            `,
            cards: [
            ]
        }
    ];

    function openComponentModal(idx) {
        const modal = document.getElementById('component-modal');
        const content = document.getElementById('component-modal-content');
        const data = componentDetails[idx];
        content.innerHTML = `
            <h3 class="text-2xl font-bold mb-4 text-[#0093fd]">${data.title}</h3>
            ${data.table}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                ${data.cards.map(card => `
                    <div class="bg-gray-50 p-4 rounded-lg shadow border">
                        <h4 class="font-bold mb-2 text-primary">${card.title}</h4>
                        <p class="text-gray-700 text-sm">${card.desc}</p>
                    </div>
                `).join('')}
            </div>
        `;
        modal.classList.remove('opacity-0', 'pointer-events-none');
        modal.classList.add('opacity-100');
    }

    function closeComponentModal() {
        const modal = document.getElementById('component-modal');
        modal.classList.add('opacity-0', 'pointer-events-none');
        modal.classList.remove('opacity-100');
    }