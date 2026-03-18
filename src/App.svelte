<script lang="ts">
  import {
    Dumbbell,
    Clock,
    MapPin,
    ArrowRight,
    Instagram,
    Facebook,
    Phone,
    Zap,
    Users,
    Trophy,
  } from "lucide-svelte";
  let scrollY = 0;
  let innerWidth = 0;
</script>

<svelte:window bind:scrollY bind:innerWidth />

<main
  class="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-orange-500 selection:text-white"
>
  <!-- Navbar -->
  <nav
    class="fixed top-0 w-full z-50 transition-all duration-300 border-b {scrollY >
    50
      ? 'bg-zinc-950/90 backdrop-blur-md border-zinc-800 py-3'
      : 'bg-transparent border-transparent py-6'}"
  >
    <div class="container mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div
          class="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center rotate-3 hover:rotate-0 transition-transform"
        >
          <Dumbbell class="text-white" size={24} />
        </div>
        <span class="text-2xl font-black tracking-tighter uppercase italic"
          >Metamorfose</span
        >
      </div>

      <div
        class="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest"
      >
        <a href="#sobre" class="hover:text-orange-500 transition-colors"
          >Sobre</a
        >
        <a href="#horarios" class="hover:text-orange-500 transition-colors"
          >Horários</a
        >
        <a href="#planos" class="hover:text-orange-500 transition-colors"
          >Planos</a
        >

        <a
          href="https://wa.me/5567999465233"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transition-all hover:scale-105 active:scale-95"
          >Matricule-se</a
        >
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="relative h-screen flex items-center overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
        alt="Gym Background"
        class="w-full h-full object-cover opacity-40"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"
      ></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-3xl" in:fly={{ y: 50, duration: 1000 }}>
        <div
          class="inline-flex items-center gap-2 bg-orange-600/20 border border-orange-600/30 text-orange-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
        >
          <Zap size={14} />
          Aceitamos Wellhub (Gympass)
        </div>
        <h1
          class="text-6xl md:text-8xl font-black italic uppercase leading-none mb-6"
        >
          Sua <span class="text-orange-600">Metamorfose</span> <br /> começa aqui.
        </h1>
        <p class="text-zinc-400 text-lg md:text-xl max-w-xl mb-10">
          Mais que uma academia, um centro de evolução. Equipamentos de ponta,
          ambiente motivador e a estrutura que você precisa para mudar de vida.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/5567999465233"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group"
          >
            Começar Agora
            <ArrowRight
              class="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#planos"
            class="bg-zinc-800 hover:bg-zinc-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
          >
            Conhecer Planos
          </a>
        </div>
      </div>
    </div>

    <!-- Floating Stats -->
    <div class="absolute bottom-10 right-10 hidden lg:flex gap-10">
      <div class="text-right">
        <div class="text-4xl font-black text-orange-600 italic">
          Venha conhecer
        </div>
        <div class="text-xs uppercase tracking-widest text-zinc-500 font-bold">
          Alunos Ativos
        </div>
      </div>
      <div class="text-right">
        <div class="text-4xl font-black text-orange-600 italic">
          Com Tutores profissionais
        </div>
        <div class="text-xs uppercase tracking-widest text-zinc-500 font-bold">
          Professores
        </div>
      </div>
    </div>
  </section>

  <!-- Info Cards -->
  <section id="sobre" class="py-24 bg-zinc-950">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-orange-600/50 transition-all group"
        >
          <div
            class="w-14 h-14 bg-orange-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors"
          >
            <Users
              class="text-orange-600 group-hover:text-white transition-colors"
            />
          </div>
          <h3 class="text-2xl font-bold mb-4">Comunidade Forte</h3>
          <p class="text-zinc-500">
            Um ambiente onde todos se apoiam. Aqui você não é apenas mais um
            número, você faz parte da elite.
          </p>
        </div>

        <div
          class="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-orange-600/50 transition-all group"
        >
          <div
            class="w-14 h-14 bg-orange-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors"
          >
            <Trophy
              class="text-orange-600 group-hover:text-white transition-colors"
            />
          </div>
          <h3 class="text-2xl font-bold mb-4">Equipamentos Pro</h3>
          <p class="text-zinc-500">
            As melhores máquinas do mercado para garantir que cada repetição
            conte para o seu resultado final.
          </p>
        </div>

        <div
          class="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-orange-600/50 transition-all group"
        >
          <div
            class="w-14 h-14 bg-orange-600/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors"
          >
            <Zap
              class="text-orange-600 group-hover:text-white transition-colors"
            />
          </div>
          <h3 class="text-2xl font-bold mb-4">Wellhub (Gympass)</h3>
          <p class="text-zinc-500">
            Facilidade para você treinar. Aceitamos todos os planos Wellhub para
            que sua rotina não tenha desculpas.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Horários Section -->
  <section id="horarios" class="py-24 bg-zinc-900 relative overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center gap-16">
        <div class="flex-1">
          <h2 class="text-5xl font-black italic uppercase mb-8">
            Horários de <br />
            <span class="text-orange-600">Funcionamento</span>
          </h2>
          <div class="space-y-6">
            <div
              class="flex items-center gap-6 p-6 bg-zinc-950 rounded-2xl border border-zinc-800"
            >
              <div
                class="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center shrink-0"
              >
                <Clock class="text-white" />
              </div>
              <div>
                <div
                  class="text-sm font-bold text-zinc-500 uppercase tracking-widest"
                >
                  Segunda a Sexta
                </div>
                <div class="text-2xl font-black italic">
                  05:00 AM — 22:00 PM
                </div>
              </div>
            </div>

            <div
              class="flex items-center gap-6 p-6 bg-zinc-950 rounded-2xl border border-zinc-800"
            >
              <div
                class="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center shrink-0"
              >
                <Clock class="text-white" />
              </div>
              <div>
                <div
                  class="text-sm font-bold text-zinc-500 uppercase tracking-widest"
                >
                  Sábado
                </div>
                <div class="text-2xl font-black italic">
                  08:00 AM — 12:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1 relative">
          <div
            class="aspect-square rounded-3xl overflow-hidden border-4 border-orange-600 rotate-3"
          >
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop"
              alt="Gym Interior"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="absolute -bottom-6 -left-6 bg-orange-600 p-8 rounded-3xl shadow-2xl -rotate-3"
          >
            <div class="text-4xl font-black italic">ABERTO</div>
            <div class="text-sm font-bold uppercase tracking-widest opacity-80">
              Pronto para você
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Planos Section -->
  <section id="planos" class="py-24 bg-zinc-950">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-black italic uppercase mb-4">
          Nossos <span class="text-orange-600">Planos</span>
        </h2>
        <p class="text-zinc-500 text-lg max-w-2xl mx-auto">
          Escolha o plano que melhor se adapta aos seus objetivos e comece sua
          evolução hoje mesmo.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <!-- Diária -->
        <div
          class="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-orange-600/50 transition-all flex flex-col justify-between"
        >
          <div>
            <h3
              class="text-xl font-bold mb-2 uppercase tracking-widest text-zinc-400"
            >
              Diária
            </h3>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-4xl font-black italic text-white">R$20</span>
            </div>
          </div>
          <a
            href="https://wa.me/5567999465233"
            target="_blank"
            class="w-full py-3 bg-zinc-800 hover:bg-white hover:text-black rounded-xl text-center font-bold transition-all"
            >Assinar</a
          >
        </div>

        <!-- Mensal -->
        <div
          class="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-orange-600/50 transition-all flex flex-col justify-between"
        >
          <div>
            <h3
              class="text-xl font-bold mb-2 uppercase tracking-widest text-zinc-400"
            >
              Mensal
            </h3>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-4xl font-black italic text-white">R$110</span>
              <span class="text-zinc-500 text-sm">/mês</span>
            </div>
          </div>
          <a
            href="https://wa.me/5567999465233"
            target="_blank"
            class="w-full py-3 bg-zinc-800 hover:bg-white hover:text-black rounded-xl text-center font-bold transition-all"
            >Assinar</a
          >
        </div>

        <!-- Trimestral -->
        <div
          class="bg-zinc-900 p-8 rounded-3xl border-2 border-orange-600 transform scale-105 shadow-2xl shadow-orange-600/10 flex flex-col justify-between relative"
        >
          <div
            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter"
          >
            Popular
          </div>
          <div>
            <h3
              class="text-xl font-bold mb-2 uppercase tracking-widest text-orange-500"
            >
              Trimestral
            </h3>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-4xl font-black italic text-white">R$315</span>
            </div>
            <div class="text-zinc-500 text-xs mb-6 font-bold uppercase italic">
              R$105.00 / MÊS
            </div>
          </div>
          <a
            href="https://wa.me/5567999465233"
            target="_blank"
            class="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl text-center font-bold transition-all"
            >Assinar Agora</a
          >
        </div>

        <!-- Semestral -->
        <div
          class="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-orange-600/50 transition-all flex flex-col justify-between"
        >
          <div>
            <h3
              class="text-xl font-bold mb-2 uppercase tracking-widest text-zinc-400"
            >
              Semestral
            </h3>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-4xl font-black italic text-white">R$570</span>
            </div>
            <div class="text-zinc-500 text-xs mb-6 font-bold uppercase italic">
              R$95.00 / MÊS
            </div>
          </div>
          <a
            href="https://wa.me/5567999465233"
            target="_blank"
            class="w-full py-3 bg-zinc-800 hover:bg-white hover:text-black rounded-xl text-center font-bold transition-all"
            >Assinar</a
          >
        </div>

        <!-- Anual -->
        <div
          class="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-orange-600/50 transition-all flex flex-col justify-between"
        >
          <div>
            <h3
              class="text-xl font-bold mb-2 uppercase tracking-widest text-zinc-400"
            >
              Anual
            </h3>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-4xl font-black italic text-white">R$1100</span>
            </div>
            <div class="text-zinc-500 text-xs mb-6 font-bold uppercase italic">
              R$91.66 / MÊS
            </div>
          </div>
          <a
            href="https://wa.me/5567999465233"
            target="_blank"
            class="w-full py-3 bg-zinc-800 hover:bg-white hover:text-black rounded-xl text-center font-bold transition-all"
            >Assinar</a
          >
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Wellhub -->
  <section class="py-20 bg-orange-600">
    <div class="container mx-auto px-6 text-center">
      <div class="flex flex-col items-center gap-8">
        <div class="bg-white p-6 rounded-3xl shadow-xl rotate-2">
          <div class="h-12 flex items-center">
            <div class="flex items-center h-12">
              <span
                class="font-extrabold text-3xl tracking-tighter text-neutral-950 flex items-baseline"
              >
                well
                <span class="text-neutral-500 font-medium">hub</span>
                <span class="ml-1 w-2 h-2 rounded-full bg-emerald-500"></span>
              </span>
            </div>
          </div>
        </div>
        <h2
          class="text-4xl md:text-6xl font-black italic uppercase text-white leading-tight"
        >
          Treine com seu <br /> plano Wellhub aqui!
        </h2>
        <p class="text-orange-100 text-xl max-w-xl">
          Antigo Gympass. Aceitamos todos os planos. Basta fazer o check-in na
          recepção e começar sua transformação.
        </p>
        <a
          href="https://wa.me/5567999465233"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-green-500 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-green-600 hover:scale-105 transition-all inline-block shadow-lg"
        >
          INICIAR MATRÍCULA
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer id="contato" class="bg-zinc-950 pt-24 pb-12 border-t border-zinc-900">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2 mb-8">
            <div
              class="w-8 h-8 bg-orange-600 rounded flex items-center justify-center"
            >
              <Dumbbell class="text-white" size={18} />
            </div>
            <span class="text-xl font-black tracking-tighter uppercase italic"
              >Metamorfose</span
            >
          </div>
          <p class="text-zinc-500 max-w-sm mb-8">
            A academia que entende seu processo. Localizada no coração da
            cidade, pronta para te levar ao próximo nível.
          </p>
          <div class="flex gap-4">
            <a
              href="#"
              class="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              class="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-bold mb-6 uppercase tracking-widest">
            Links
          </h4>
          <ul class="space-y-4 text-zinc-500 font-medium">
            <li>
              <a href="#sobre" class="hover:text-orange-500 transition-colors"
                >Sobre Nós</a
              >
            </li>
            <li>
              <a
                href="#horarios"
                class="hover:text-orange-500 transition-colors">Horários</a
              >
            </li>

            <li>
              <a href="#planos" class="hover:text-orange-500 transition-colors"
                >Planos</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-bold mb-6 uppercase tracking-widest">
            Localização
          </h4>
          <div class="flex gap-3 text-zinc-500 mb-4">
            <MapPin class="shrink-0 text-orange-600" size={20} />
            <span>End.: João Márcio Ferreira Terra 441</span>
          </div>
          <div class="flex gap-3 text-zinc-500">
            <Phone class="shrink-0 text-orange-600" size={20} />
            <span>(67) 99946-5233</span>
          </div>
        </div>
      </div>

      <div
        class="pt-12 border-t border-zinc-900 text-center text-zinc-600 text-sm font-bold uppercase tracking-widest"
      >
        &copy; 2026 Academia Metamorfose. Todos os direitos reservados.
      </div>
    </div>
  </footer>
</main>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
