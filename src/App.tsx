import { FormEvent, ReactNode, useEffect, useRef, useState } from 'react'
import {
  Activity, AlertTriangle, ArrowRight, Building2, Check, ChevronRight,
  CircleUserRound, Clock3, CloudCog, Database, FileCheck2, FileText, Gauge, GitBranch,
  Headphones, Landmark, Layers3, Menu, MessageSquareText, Network, PanelsTopLeft,
  Route, Search, Send, Settings2, ShieldCheck, Sparkles, UploadCloud, UsersRound, X,
} from 'lucide-react'
import {
  Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts'
import { capabilities, challenges, industries, IndustryKey, lifecycle, roles, scenarios } from './data'

const nav = [
  ['Product', 'product'], ['Challenges', 'challenges'], ['Use Cases', 'industries'],
  ['Case Lifecycle', 'lifecycle'], ['Experiences', 'experiences'], ['Capabilities', 'capabilities'],
  ['Analytics', 'analytics'], ['Architecture', 'architecture'], ['Adoption', 'adoption'],
]

const Button = ({ children, onClick, secondary = false, type = 'button' }: { children: ReactNode; onClick?: () => void; secondary?: boolean; type?: 'button' | 'submit' }) => (
  <button type={type} onClick={onClick} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition ${secondary ? 'border border-slate-300 bg-white text-ink hover:border-teal hover:text-teal' : 'bg-teal text-white shadow-lg shadow-teal/15 hover:bg-[#086d71]'}`}>
    {children}
  </button>
)

const SectionHead = ({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) => (
  <div>
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="section-title">{title}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </div>
)

const Pill = ({ children, tone = 'teal' }: { children: ReactNode; tone?: 'teal' | 'amber' | 'slate' }) => {
  const style = tone === 'amber' ? 'bg-amber-50 text-amber-800' : tone === 'slate' ? 'bg-slate-100 text-slate-700' : 'bg-teal/10 text-teal'
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold ${style}`}>{children}</span>
}

function Header({ openDemo }: { openDemo: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 text-white shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3" aria-label="MTX Case Management home">
          <span className="font-display text-2xl font-bold tracking-[-.04em]">MTX</span>
          <span className="hidden border-l border-slate-600 pl-3 text-xs font-semibold leading-4 text-slate-300 sm:block">CASE MANAGEMENT<br />FOR BFSI</span>
        </a>
        <nav className="hidden items-center gap-4 xl:flex" aria-label="Primary navigation">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} className="text-xs font-semibold text-slate-300 transition hover:text-white">{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={openDemo} className="hidden min-h-10 rounded-lg bg-cyan px-4 text-sm font-bold text-ink transition hover:bg-white sm:block">Request a Demo</button>
          <button className="grid size-11 place-items-center rounded-lg border border-slate-600 xl:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label="Toggle navigation">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {mobileOpen && <nav id="mobile-menu" className="border-t border-slate-700 px-5 py-4 xl:hidden" aria-label="Mobile navigation">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-1">
          {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/10">{label}</a>)}
          <button onClick={() => { setMobileOpen(false); openDemo() }} className="rounded-lg px-3 py-3 text-left text-sm font-bold text-cyan sm:hidden">Request a Demo</button>
        </div>
      </nav>}
    </header>
  )
}

function Hero({ openDemo }: { openDemo: () => void }) {
  return <section id="product" className="relative overflow-hidden bg-ink text-white">
    <div className="absolute inset-0 dot-grid" aria-hidden="true" />
    <div className="absolute -right-40 -top-40 size-[540px] rounded-full bg-teal/20 blur-3xl" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10 lg:py-28">
      <div>
        <p className="eyebrow !text-cyan">MTX Financial Services</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">Connect every service request to the people and information needed to resolve it.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">MTX Case Management for BFSI brings customer inquiries, documents, tasks, approvals, escalations, and service history into configurable workflows for banking, financial-services, and insurance operations.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button onClick={openDemo}>Request a Product Demonstration <ArrowRight size={17} /></Button>
          <a href="#lifecycle" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-600 px-5 py-3 text-sm font-bold hover:border-cyan hover:text-cyan">Explore the Case Lifecycle</a>
        </div>
        <p className="mt-5 text-sm text-slate-400">Built on Salesforce Financial Services Cloud and Service Cloud.</p>
      </div>
      <HeroWorkspace />
    </div>
    <div className="relative border-t border-slate-700/80 bg-navy/80">
      <div className="mx-auto grid max-w-7xl divide-y divide-slate-700/80 px-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {[[Database, 'One coordinated case record'], [GitBranch, 'Configurable service workflows'], [CircleUserRound, 'Customer status visibility'], [Gauge, 'Operational oversight']].map(([Icon, text]) =>
          <div key={String(text)} className="flex items-center gap-3 px-4 py-5"><Icon className="text-cyan" size={20} /><span className="text-sm font-semibold">{String(text)}</span></div>)}
      </div>
    </div>
  </section>
}

function HeroWorkspace() {
  return <div className="relative">
    <div className="mb-3 flex items-center justify-between text-xs text-slate-400"><span>Illustrative product view</span><span className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-400" /> Service workspace</span></div>
    <div className="overflow-hidden rounded-2xl border border-slate-600 bg-[#f4f7f9] text-ink shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
        <div className="flex items-center gap-2"><span className="grid size-8 place-items-center rounded-lg bg-ink text-xs font-bold text-white">M</span><b className="text-sm">Case console</b></div>
        <div className="flex gap-2"><Search size={17} className="text-slate-400" /><span className="size-5 rounded-full bg-teal/20" /></div>
      </div>
      <div className="grid gap-3 p-3 sm:grid-cols-[1fr_1.8fr]">
        <aside className="rounded-xl bg-ink p-4 text-white">
          <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-cyan font-bold text-ink">JL</span><div><b className="block text-sm">Jordan Lee</b><span className="text-xs text-slate-400">Verified portal context</span></div></div>
          <div className="mt-5 space-y-4 text-xs">
            <div><span className="text-slate-400">Relationship</span><p className="mt-1 font-semibold">Retail customer · 6 years</p></div>
            <div><span className="text-slate-400">Related product</span><p className="mt-1 font-semibold">Checking ·••• 014</p></div>
            <div><span className="text-slate-400">Recent interactions</span><p className="mt-1 font-semibold">Portal · Contact center</p></div>
          </div>
        </aside>
        <div className="space-y-3">
          <div className="rounded-xl bg-white p-4">
            <div className="flex flex-wrap items-start justify-between gap-2"><div><span className="text-xs text-slate-500">CASE-B-1048</span><h3 className="font-display text-lg font-bold">Transaction dispute</h3></div><Pill>Information review</Pill></div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
              {[['Priority', 'Standard'], ['Service target', '1d 6h'], ['Assigned team', 'Payments service'], ['Next action', 'Request details']].map(([a,b]) => <div key={a}><span className="text-slate-500">{a}</span><b className="mt-1 block">{b}</b></div>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white p-4"><FileText size={18} className="text-teal" /><b className="mt-3 block text-sm">2 documents</b><span className="text-xs text-slate-500">Received and linked</span></div>
            <div className="rounded-xl bg-white p-4"><Check size={18} className="text-teal" /><b className="mt-3 block text-sm">3 open tasks</b><span className="text-xs text-slate-500">Next due in 4h</span></div>
          </div>
          <div className="rounded-xl bg-white p-4"><span className="text-xs font-bold text-slate-500">RECENT ACTIVITY</span><div className="mt-3 border-l-2 border-cyan pl-3 text-sm"><b>Statement received</b><p className="text-xs text-slate-500">Portal upload · 10:42</p></div></div>
        </div>
      </div>
    </div>
  </div>
}

function Challenges() {
  const [active, setActive] = useState(0)
  const item = challenges[active]
  return <section id="challenges" className="bg-slate-50"><div className="section-wrap">
    <SectionHead eyebrow="Operating challenges" title="Complex service requests break down when information and ownership are fragmented." copy="Select a challenge to see where it appears in operations and how a configurable case model can respond." />
    <div className="mt-12 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1" role="tablist" aria-label="Operating challenges">
        {challenges.map((c, i) => <button key={c.title} role="tab" aria-selected={active === i} onClick={() => setActive(i)} className={`flex min-h-16 items-center justify-between rounded-xl border p-4 text-left text-sm font-bold transition ${active === i ? 'border-teal bg-ink text-white shadow-lg' : 'border-slate-200 bg-white hover:border-teal'}`}><span><span className={`mr-3 ${active === i ? 'text-cyan' : 'text-teal'}`}>0{i + 1}</span>{c.title}</span><ChevronRight size={18} /></button>)}
      </div>
      <div className="panel p-6 sm:p-8" role="tabpanel">
        <Pill>Selected challenge</Pill><h3 className="mt-4 font-display text-2xl font-bold">{item.title}</h3>
        <div className="mt-7 grid gap-6 sm:grid-cols-2">
          {[['The operating challenge', item.problem], ['Who experiences it', item.people], ['Operational effect', item.effect], ['MTX product response', item.response]].map(([title, copy]) => <div key={title}><h4 className="text-sm font-bold text-ink">{title}</h4><p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p></div>)}
        </div>
        <div className="mt-7 rounded-xl bg-mist p-5"><h4 className="text-sm font-bold">Measures an institution could monitor</h4><div className="mt-3 flex flex-wrap gap-2">{item.measures.map(m => <Pill key={m} tone="slate">{m}</Pill>)}</div></div>
      </div>
    </div>
  </div></section>
}

function IndustrySelector({ industry, setIndustry }: { industry: IndustryKey; setIndustry: (v: IndustryKey) => void }) {
  const current = industries[industry]
  return <section id="industries"><div className="section-wrap">
    <SectionHead eyebrow="Industry configurations" title="A shared product model, configured for distinct operating environments." copy="Common capabilities can support different case types, roles, information models, and service measures. The views below are illustrative." />
    <div className="mt-9 flex flex-wrap gap-2" role="tablist" aria-label="Industry views">
      {(Object.keys(industries) as IndustryKey[]).map(key => <button key={key} role="tab" aria-selected={industry === key} className={`tab-button ${industry === key ? 'tab-button-active' : 'tab-button-idle'}`} onClick={() => setIndustry(key)}>{industries[key].label}</button>)}
    </div>
    <div className="mt-6 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-panel lg:grid-cols-[.8fr_1.2fr]" role="tabpanel">
      <div className="bg-ink p-7 text-white sm:p-9"><Landmark className="text-cyan" /><h3 className="mt-5 font-display text-3xl font-bold">{current.label}</h3><p className="mt-4 leading-7 text-slate-300">{current.description}</p><h4 className="mt-8 text-xs font-bold uppercase tracking-wider text-cyan">Workspace personas</h4><div className="mt-3 flex flex-wrap gap-2">{current.personas.map(p => <span key={p} className="rounded-full bg-white/10 px-3 py-1.5 text-xs">{p}</span>)}</div><div className="mt-8 rounded-xl border border-slate-600 p-4"><span className="text-xs text-slate-400">Analytics spotlight</span><b className="mt-1 block">{current.metric}</b><span className="mt-2 block text-xs text-slate-400">Illustrative grouping, based on configured definitions</span></div></div>
      <div className="p-7 sm:p-9"><span className="text-xs font-bold uppercase tracking-wider text-slate-500">Example case types</span><div className="mt-5 grid gap-3 sm:grid-cols-2">{current.caseTypes.map((type, i) => <div key={type} className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 text-sm font-semibold"><span className="grid size-7 shrink-0 place-items-center rounded-lg bg-mist text-xs text-teal">{String(i + 1).padStart(2,'0')}</span>{type}</div>)}</div><p className="mt-6 fine-print">MTX can organize and support these workflows. Legal, regulatory, credit, coverage, suitability, fraud, and claims determinations remain with authorized personnel and institutional processes.</p></div>
    </div>
  </div></section>
}

function Lifecycle() {
  const [active, setActive] = useState(0)
  const stage = lifecycle[active]
  return <section id="lifecycle" className="bg-ink text-white"><div className="section-wrap">
    <SectionHead eyebrow="Case lifecycle" title="A governed path from intake to recorded resolution." copy="Each stage connects people, information, work, and controls while preserving institutional authority." />
    <div className="mt-10 overflow-x-auto pb-3"><div className="flex min-w-[850px] items-start">
      {lifecycle.map((s,i) => <button key={s.name} onClick={() => setActive(i)} className="group flex flex-1 flex-col items-center text-center" aria-current={active === i ? 'step' : undefined}><span className={`grid size-10 place-items-center rounded-full border-2 text-sm font-bold transition ${active === i ? 'border-cyan bg-cyan text-ink' : 'border-slate-600 bg-navy text-slate-300 group-hover:border-cyan'}`}>{i + 1}</span><span className={`mt-2 text-xs font-semibold ${active === i ? 'text-cyan' : 'text-slate-400'}`}>{s.name}</span></button>)}
    </div></div>
    <div className="mt-6 rounded-2xl border border-slate-700 bg-navy p-6 sm:p-8">
      <div className="grid gap-7 lg:grid-cols-[1.4fr_1fr_1fr]"><div><Pill>{`Stage ${active + 1}`}</Pill><h3 className="mt-4 font-display text-2xl font-bold">{stage.name}</h3><p className="mt-3 leading-7 text-slate-300">{stage.what}</p></div><div><h4 className="text-xs font-bold uppercase tracking-wider text-cyan">People involved</h4><p className="mt-3 text-sm leading-6 text-slate-300">{stage.people}</p><h4 className="mt-5 text-xs font-bold uppercase tracking-wider text-cyan">Product capabilities</h4><p className="mt-3 text-sm leading-6 text-slate-300">{stage.capabilities}</p></div><div><h4 className="text-xs font-bold uppercase tracking-wider text-cyan">Control considerations</h4><p className="mt-3 text-sm leading-6 text-slate-300">{stage.controls}</p><h4 className="mt-5 text-xs font-bold uppercase tracking-wider text-cyan">Suggested measures</h4><p className="mt-3 text-sm leading-6 text-slate-300">{stage.measures}</p></div></div>
    </div>
  </div></section>
}

function SelectableGrid({ items, active, setActive }: { items: (string | string[])[][]; active: number; setActive: (n:number)=>void }) {
  return <div className="grid gap-5 lg:grid-cols-[.85fr_1.15fr]"><div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">{items.map((item,i) => <button key={String(item[0])} onClick={() => setActive(i)} className={`min-h-14 rounded-xl border px-4 py-3 text-left text-sm font-bold transition ${active === i ? 'border-teal bg-teal text-white' : 'border-slate-200 hover:border-teal'}`}>{String(item[0])}</button>)}</div><div className="panel min-h-64 p-7"><h3 className="font-display text-2xl font-bold">{String(items[active][0])}</h3>{Array.isArray(items[active][1]) ? <div className="mt-6 grid gap-3 sm:grid-cols-2">{(items[active][1] as string[]).map(x => <div key={x} className="flex gap-3 rounded-lg bg-slate-50 p-3 text-sm"><Check size={17} className="mt-0.5 shrink-0 text-teal" />{x}</div>)}</div> : <p className="mt-5 text-lg leading-8 text-slate-600">{String(items[active][1])}</p>}</div></div>
}

function ExperiencesCapabilities() {
  const [role, setRole] = useState(0)
  const [capability, setCapability] = useState(0)
  return <>
    <section id="experiences"><div className="section-wrap"><SectionHead eyebrow="Role-based experiences" title="Give each participant the context and actions relevant to their work." copy="Access, actions, and customer-visible information are governed by role and institutional configuration." /><div className="mt-10"><SelectableGrid items={roles} active={role} setActive={setRole} /></div></div></section>
    <section id="capabilities" className="bg-slate-50"><div className="section-wrap"><SectionHead eyebrow="Product capability families" title="Reusable building blocks for service and operational case management." copy="Start with selected capabilities and introduce additional modules as products, policies, and operating requirements evolve." /><div className="mt-10"><SelectableGrid items={capabilities} active={capability} setActive={setCapability} /></div></div></section>
  </>
}

function Workspace({ industry, setIndustry }: { industry: IndustryKey; setIndustry: (v:IndustryKey)=>void }) {
  const [event, setEvent] = useState(0)
  const [notes, setNotes] = useState(['Intake details checked against the submitted request.'])
  const [note, setNote] = useState('')
  const [taskAssigned, setTaskAssigned] = useState(false)
  const [toast, setToast] = useState('')
  const s = scenarios[industry]
  const act = (message:string) => { setToast(message); window.setTimeout(() => setToast(''), 2500) }
  return <section id="workspace" className="bg-ink text-white"><div className="section-wrap">
    <SectionHead eyebrow="Interactive case workspace" title="Bring relevant case context into one role-based view." copy="Explore three fictional scenarios. Actions update this browser view only and do not make a consequential decision." />
    <p className="mt-5 inline-flex items-center gap-2 rounded-lg border border-cyan/30 bg-cyan/10 px-3 py-2 text-xs font-bold text-cyan"><Sparkles size={15} /> Fictional data shown for demonstration purposes.</p>
    <div className="mt-7 flex flex-wrap gap-2">{(Object.keys(scenarios) as IndustryKey[]).map(key => <button key={key} onClick={() => {setIndustry(key); setEvent(0)}} className={`tab-button ${industry === key ? 'border-cyan bg-cyan text-ink' : 'border-slate-600 text-slate-300 hover:border-cyan'}`}>{scenarios[key].label}</button>)}</div>
    <div className="mt-5 overflow-hidden rounded-2xl bg-[#f4f7f9] text-ink shadow-2xl">
      <div className="flex flex-col justify-between gap-3 border-b border-slate-200 bg-white px-5 py-4 sm:flex-row sm:items-center"><div><span className="text-xs font-bold text-teal">{s.ref}</span><h3 className="font-display text-xl font-bold">{s.label}</h3></div><div className="flex flex-wrap gap-2"><Pill>{s.status}</Pill><Pill tone="slate">Priority: {s.priority}</Pill><Pill tone="amber"><Clock3 size={12} className="mr-1" /> {s.target}</Pill></div></div>
      <div className="grid lg:grid-cols-[280px_1fr_300px]">
        <aside className="border-b border-slate-200 bg-white p-5 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-full bg-ink font-bold text-white">{s.initials}</span><div><b>{s.person}</b><span className="block text-xs text-slate-500">Fictional profile</span></div></div>
          <dl className="mt-6 space-y-4 text-sm"><div><dt className="text-xs text-slate-500">Related product</dt><dd className="mt-1 font-semibold">{s.product}</dd></div><div><dt className="text-xs text-slate-500">Assigned team</dt><dd className="mt-1 font-semibold">{s.team}</dd></div><div><dt className="text-xs text-slate-500">Open exception</dt><dd className="mt-1 font-semibold">{s.exception}</dd></div></dl>
          <button onClick={() => act('Case history opened in the demonstration.')} className="mt-6 flex w-full items-center justify-between rounded-lg border border-slate-300 p-3 text-sm font-bold hover:border-teal">View case history <ArrowRight size={16}/></button>
        </aside>
        <main className="p-5">
          <div className="rounded-xl bg-white p-5"><span className="text-xs font-bold uppercase tracking-wider text-slate-500">Case description</span><p className="mt-2 text-sm leading-6">{s.description}</p></div>
          <div className="mt-4 grid gap-4 xl:grid-cols-2">
            <div className="rounded-xl bg-white p-5"><h4 className="font-bold">Case timeline</h4><div className="mt-4 space-y-1">{s.timeline.map((x,i) => <button key={x} onClick={() => setEvent(i)} className={`flex w-full gap-3 rounded-lg p-2 text-left text-sm ${event === i ? 'bg-mist text-teal' : 'hover:bg-slate-50'}`}><span className={`mt-1 size-2 shrink-0 rounded-full ${event === i ? 'bg-teal' : 'bg-slate-300'}`} /><span><b className="block">{x}</b><small className="text-slate-500">{i === 0 ? 'Today' : `${i + 1}h ago`} · recorded event</small></span></button>)}</div></div>
            <div className="rounded-xl bg-white p-5"><h4 className="font-bold">Documents & tasks</h4><div className="mt-4 space-y-2">{s.documents.map(x => <button key={x} onClick={() => act(`${x} opened as a fictional document preview.`)} className="flex w-full items-center gap-2 rounded-lg bg-slate-50 p-3 text-left text-sm hover:bg-mist"><FileText size={16} className="text-teal"/>{x}</button>)}</div><div className="mt-4 space-y-2">{s.tasks.map((x,i) => <div key={x} className="flex items-center gap-2 text-sm"><span className={`grid size-5 place-items-center rounded border ${taskAssigned && i === 0 ? 'border-teal bg-teal text-white' : 'border-slate-300'}`}>{taskAssigned && i === 0 && <Check size={13}/>}</span>{x}</div>)}</div></div>
          </div>
          <div className="mt-4 rounded-xl bg-white p-5"><h4 className="font-bold">Internal notes</h4><div className="mt-3 space-y-2">{notes.map((x,i) => <p key={`${x}-${i}`} className="rounded-lg bg-amber-50 p-3 text-sm">{x}</p>)}</div><div className="mt-3 flex gap-2"><input value={note} onChange={e => setNote(e.target.value)} className="field" aria-label="New internal note" placeholder="Add a fictional internal note" /><button onClick={() => {if(note.trim()){setNotes([...notes,note.trim()]);setNote('')}}} className="min-w-11 rounded-lg bg-ink text-white" aria-label="Add note"><Send size={17} className="mx-auto"/></button></div></div>
        </main>
        <aside className="border-t border-slate-200 bg-white p-5 lg:border-l lg:border-t-0"><h4 className="font-bold">Permitted actions</h4><p className="mt-1 text-xs text-slate-500">Subject to role and workflow configuration</p><div className="mt-4 space-y-2">{[
          ['Assign first task', () => {setTaskAssigned(true);act('Task assigned in the demonstration.')}],
          ['Request information', () => act('Information request prepared for staff review.')],
          ['Escalate exception', () => act('Exception routed to a supervisor queue.')],
          ['Prepare communication', () => act('Draft prepared from an approved template.')],
        ].map(([label,fn]) => <button key={String(label)} onClick={fn as ()=>void} className="flex min-h-11 w-full items-center justify-between rounded-lg border border-slate-300 px-3 text-left text-sm font-bold hover:border-teal hover:text-teal">{String(label)}<ChevronRight size={16}/></button>)}</div><div className="mt-6 rounded-xl bg-mist p-4"><span className="text-xs text-slate-500">Next permitted action</span><b className="mt-1 block text-sm">{s.next}</b></div><div className="mt-4"><span className="text-xs text-slate-500">Approval history</span><p className="mt-1 text-sm">No consequential approval recorded.</p></div></aside>
      </div>
    </div>
    <div aria-live="polite" className={`fixed bottom-5 right-5 z-50 rounded-lg bg-white px-4 py-3 text-sm font-bold text-ink shadow-panel transition ${toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}>{toast}</div>
  </div></section>
}

function CustomerPortal({ industry }: { industry: IndustryKey }) {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const s = scenarios[industry]
  const upload = () => { setUploading(true); window.setTimeout(() => {setUploading(false);setUploaded(true)}, 900) }
  return <section><div className="section-wrap">
    <SectionHead eyebrow="Customer self-service" title="Keep customers informed without exposing internal case activity." copy="Portal content reflects institutional policy, case type, communication preferences, and the information permitted for customer display." />
    <div className="mt-10 grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
      <div><h3 className="font-display text-2xl font-bold">{industries[industry].label} portal pattern</h3><p className="mt-4 leading-7 text-slate-600">Customers can submit requests, provide supporting documents, see permitted status, read messages, and follow upcoming actions. Internal risk indicators, staff notes, and confidential review activity remain outside this view.</p><div className="mt-6 grid grid-cols-2 gap-3">{['Request submission', 'Permitted status', 'Secure documents', 'Messages & preferences'].map(x => <div key={x} className="flex gap-2 rounded-lg bg-slate-50 p-3 text-sm font-semibold"><Check size={17} className="text-teal"/>{x}</div>)}</div></div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-panel">
        <div className="flex items-center justify-between bg-ink px-5 py-4 text-white"><b>My service requests</b><span className="text-xs text-cyan">Secure portal · illustrative</span></div>
        <div className="p-5 sm:p-7"><div className="flex flex-wrap items-start justify-between gap-3"><div><span className="text-xs text-slate-500">{s.ref}</span><h3 className="mt-1 font-display text-xl font-bold">{s.label}</h3></div><Pill tone={s.portalStatus === 'Action needed' ? 'amber' : 'teal'}>{s.portalStatus}</Pill></div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">{[['Information received', 'Request details'], ['Requested documents', uploaded ? 'Received' : industry === 'wealth' ? '1 requested' : 'None'], ['Communication', 'Email preferred']].map(([a,b]) => <div key={a} className="rounded-xl bg-white p-4"><span className="text-xs text-slate-500">{a}</span><b className="mt-1 block text-sm">{b}</b></div>)}</div>
          <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-white p-5"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><div><b className="text-sm">Supporting documents</b><p className="mt-1 text-xs text-slate-500">{uploaded ? 'Demonstration file received.' : 'Upload only information requested by your institution.'}</p></div><button onClick={upload} disabled={uploading} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-teal px-4 text-sm font-bold text-white disabled:opacity-60">{uploading ? <Activity className="animate-spin" size={17}/> : uploaded ? <Check size={17}/> : <UploadCloud size={17}/>} {uploading ? 'Uploading…' : uploaded ? 'Received' : 'Secure upload'}</button></div></div>
          <div className="mt-4 rounded-xl bg-mist p-4"><span className="text-xs font-bold uppercase tracking-wider text-teal">Upcoming action</span><p className="mt-2 text-sm">{s.portalNext}</p></div>
        </div>
      </div>
    </div>
  </div></section>
}

function OmnichannelAI() {
  const [channel, setChannel] = useState('Web portal')
  const channels = [['Contact center',Headphones],['Email',MessageSquareText],['Web portal',PanelsTopLeft],['Mobile app',CircleUserRound],['Branch / office',Building2],['Advisor',UsersRound],['Partner',Network],['API',CloudCog]] as const
  return <>
    <section className="bg-slate-50"><div className="section-wrap"><SectionHead eyebrow="Omnichannel service model" title="Multiple authorized channels. One configured case model." copy="Channel availability and data access depend on institutional configuration." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
        <div className="grid grid-cols-2 gap-2">{channels.map(([name,Icon]) => <button key={name} onClick={() => setChannel(name)} className={`flex min-h-16 items-center gap-3 rounded-xl border p-3 text-left text-sm font-bold transition ${channel === name ? 'border-teal bg-ink text-white' : 'border-slate-200 bg-white hover:border-teal'}`}><Icon size={19} className={channel === name ? 'text-cyan' : 'text-teal'}/>{name}</button>)}</div>
        <ArrowRight className="mx-auto rotate-90 text-teal lg:rotate-0" size={28}/>
        <div className="panel p-7"><div className="mx-auto grid size-24 place-items-center rounded-full border-8 border-mist bg-teal text-white"><Layers3 size={35}/></div><h3 className="mt-5 text-center font-display text-2xl font-bold">Common case model</h3><p className="mt-2 text-center text-sm text-slate-600"><b>{channel}</b> request captured with permitted channel context.</p><div className="mt-6 flex items-center justify-center gap-2 text-sm font-bold"><Route size={18} className="text-teal"/> Routed to configured service workflow</div></div>
      </div>
    </div></section>
    <section><div className="section-wrap"><SectionHead eyebrow="Governed AI assistance" title="Use AI to prepare information and support staff action." copy="Potential assistance can classify requests, summarize interactions, extract proposed information, identify missing items, draft from approved templates, prepare chronology, and flag approaching deadlines." />
      <div className="mt-10 overflow-hidden rounded-2xl bg-ink p-6 text-white sm:p-9">
        <div className="flex flex-wrap items-center justify-center gap-2">{['Customer request','AI-assisted preparation','Configured validation','Staff review','Authorized action','Recorded case history'].map((x,i) => <div key={x} className="flex items-center gap-2"><div className={`rounded-lg px-3 py-3 text-center text-xs font-bold ${i === 1 ? 'bg-cyan text-ink' : 'bg-white/10'}`}>{x}</div>{i < 5 && <ArrowRight size={16} className="text-cyan"/>}</div>)}</div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{['Human review','Source traceability','Role-based access','Approved templates','Configurable thresholds','Model & prompt records','Override capture','Data boundaries','Performance monitoring'].map(x => <div key={x} className="flex items-center gap-2 rounded-lg border border-slate-700 p-3 text-sm"><ShieldCheck size={17} className="shrink-0 text-cyan"/>{x}</div>)}</div>
        <p className="mt-7 text-sm leading-6 text-slate-300">AI assistance does not independently determine fraud, approve or deny credit, resolve disputes, determine coverage, deny claims, assess suitability, file regulatory reports, or send consequential communications without approval.</p>
      </div>
    </div></section>
  </>
}

const chartData = [
  { name: 'New', value: 128 }, { name: 'In review', value: 92 }, { name: 'Waiting', value: 57 }, { name: 'Approval', value: 31 }, { name: 'Resolved', value: 146 },
]
const pieData = [{ name: 'Portal', value: 38 },{ name: 'Contact center', value: 29 },{ name: 'Email', value: 18 },{ name: 'Other', value: 15 }]

function Analytics({ industry }: { industry: IndustryKey }) {
  const [filter, setFilter] = useState('30 days')
  const metrics = [['New cases','128'],['Open cases','214'],['Average case age','2.8 days'],['Service-target attainment','86%'],['Backlog','63'],['Escalations','12'],['Reopened cases','9'],['Repeat contacts','34'],['Reviewer workload','41 active'],['Customer actions pending','27'],['Documents outstanding','18'],['Integration exceptions','4']]
  return <section id="analytics" className="bg-slate-50"><div className="section-wrap">
    <SectionHead eyebrow="Operational analytics" title="See workload, aging, service measures, and operational exceptions." copy="Dashboards use configured definitions and connected source data. Values shown here are fictional." />
    <div className="mt-6 flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm font-bold text-amber-900"><AlertTriangle size={18}/> Illustrative analytics — not MTX or customer results.</div>
    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{['Industry','Case type','Channel','Team','Priority','Status'].map((x,i) => <label key={x} className="text-xs font-bold text-slate-600">{x}<select className="field mt-2" aria-label={`Filter by ${x}`} defaultValue="Any"><option>Any</option>{i===0 && <option>{industries[industry].label}</option>}<option>Selected</option></select></label>)}</div>
    <div className="mt-3 flex gap-2">{['7 days','30 days','Quarter'].map(x => <button key={x} onClick={() => setFilter(x)} className={`tab-button ${filter===x?'tab-button-active':'tab-button-idle'}`}>{x}</button>)}</div>
    <div className="mt-6 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
      <div className="panel p-5"><div className="flex justify-between"><h3 className="font-bold">Cases by status</h3><Pill tone="slate">{filter}</Pill></div><div className="mt-5 h-64" aria-label="Bar chart of fictional cases by status"><ResponsiveContainer width="100%" height="100%"><BarChart data={chartData}><CartesianGrid strokeDasharray="3 3" vertical={false}/><XAxis dataKey="name" tick={{fontSize:11}}/><YAxis tick={{fontSize:11}}/><Tooltip/><Bar dataKey="value" fill="#0a7f83" radius={[6,6,0,0]}/></BarChart></ResponsiveContainer></div><p className="fine-print">Text summary: Resolved is the largest group in this fictional period, followed by new and in-review cases.</p></div>
      <div className="panel p-5"><h3 className="font-bold">Cases by channel</h3><div className="mt-3 h-52" aria-label="Donut chart of fictional cases by channel"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={pieData} dataKey="value" innerRadius={48} outerRadius={75} paddingAngle={3}>{pieData.map((_,i)=><Cell key={i} fill={['#0a7f83','#0b2038','#4fd1d9','#94a3b8'][i]}/>)}</Pie><Tooltip/></PieChart></ResponsiveContainer></div><div className="grid grid-cols-2 gap-2">{pieData.map((x,i)=><div key={x.name} className="text-xs"><span className="mr-2 inline-block size-2 rounded-full" style={{background:['#0a7f83','#0b2038','#4fd1d9','#94a3b8'][i]}}/>{x.name}: {x.value}%</div>)}</div></div>
    </div>
    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{metrics.map(([a,b]) => <div key={a} className="panel p-4"><span className="text-xs text-slate-500">{a}</span><b className="mt-2 block font-display text-xl">{b}</b></div>)}</div>
  </div></section>
}

const archLayers = [
  ['Experience layer','Customer and policyholder portals, service workspaces, mobile access, contact center experiences, leadership dashboards.'],
  ['MTX product layer','Case intake, customer context, workflow, tasks, service targets, documents, escalations, approvals, communications, analytics.'],
  ['Salesforce foundation','Financial Services Cloud, Service Cloud, Experience Cloud where applicable, platform security, workflow, reporting, and integration capabilities.'],
  ['Integration layer','APIs, events, webhooks, approved middleware, message queues, and secure file exchange.'],
  ['Institutional systems','Core banking, loan servicing, card processing, wealth platforms, policy administration, claims systems, documents, payments, identity, and data platforms.'],
  ['Governance & operations','Access controls, monitoring, audit records, retention, release management, backup, and recovery.'],
]

function Architecture() {
  const [active, setActive] = useState(1)
  return <section id="architecture"><div className="section-wrap">
    <SectionHead eyebrow="Salesforce-centered architecture" title="A coordination and service-workflow layer for the institution’s existing ecosystem." copy="MTX uses Salesforce Financial Services Cloud and Service Cloud as its primary application foundation. Existing core systems continue to hold their designated responsibilities." />
    <div className="mt-10 grid gap-7 lg:grid-cols-[.9fr_1.1fr]">
      <div className="space-y-2">{archLayers.map(([name,copy],i)=><button key={name} onClick={()=>setActive(i)} className={`w-full rounded-xl border p-4 text-left transition ${active===i?'border-teal bg-ink text-white shadow-lg':'border-slate-200 hover:border-teal'}`}><span className={`text-xs font-bold ${active===i?'text-cyan':'text-teal'}`}>LAYER 0{i+1}</span><b className="mt-1 block">{name}</b>{active===i&&<p className="mt-3 text-sm leading-6 text-slate-300">{copy}</p>}</button>)}</div>
      <div className="panel flex flex-col justify-center p-7 sm:p-10"><Network className="text-teal" size={38}/><h3 className="mt-5 font-display text-3xl font-bold">{archLayers[active][0]}</h3><p className="mt-4 text-lg leading-8 text-slate-600">{archLayers[active][1]}</p><div className="mt-7 rounded-xl bg-mist p-5 text-sm leading-6"><b>Architecture principle</b><p className="mt-2">MTX coordinates case context and service work. It does not imply that Salesforce replaces each core banking, lending, wealth, insurance, payment, document, or data system.</p></div></div>
    </div>
  </div></section>
}

function SecurityIntegrations() {
  const controls=['Role-based access','Least-privilege configuration','Identity and authentication options','Encryption','Data minimization','Consent and communication preferences','Case-level access controls','Sensitive-data masking','Retention configuration','Audit history','Action and approval records','Integration monitoring','Environment separation','Backup and recovery configuration']
  const systems=['Core banking systems','Loan-origination and servicing platforms','Card and payment systems','Wealth-management platforms','Policy-administration systems','Claims-management systems','Customer identity services','Document and content repositories','Communication platforms','Fraud and risk-data services','Financial and ERP systems','Data warehouses and analytics environments','Regulatory and records systems']
  return <>
    <section className="bg-ink text-white"><div className="section-wrap"><SectionHead eyebrow="Security, privacy & traceability" title="Configurable controls for sensitive service operations." copy="The product provides configurable controls that can support institutional security, privacy, records-management, and audit requirements." /><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{controls.map(x=><div key={x} className="flex gap-3 rounded-xl border border-slate-700 bg-navy p-4 text-sm"><ShieldCheck className="shrink-0 text-cyan" size={19}/>{x}</div>)}</div><p className="mt-7 text-sm text-slate-400">Control configuration forms part of an institution’s broader governance program and does not automatically provide regulatory compliance.</p></div></section>
    <section><div className="section-wrap"><SectionHead eyebrow="Integration ecosystem" title="Connect the case layer to approved institutional systems." copy="Integration scope and frequency depend on available interfaces, security review, data ownership, and implementation choices." /><div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{systems.map(x=><div key={x} className="flex gap-3 rounded-xl border border-slate-200 p-4 text-sm font-semibold"><Database size={18} className="shrink-0 text-teal"/>{x}</div>)}</div><div className="mt-8 rounded-xl bg-mist p-5"><b className="text-sm">Supported patterns may include</b><div className="mt-3 flex flex-wrap gap-2">{['REST APIs','Events','Webhooks','Secure files','Message queues','Approved middleware','Batch synchronization'].map(x=><Pill key={x} tone="slate">{x}</Pill>)}</div><p className="mt-4 fine-print">System categories and patterns do not indicate that each connector is prebuilt.</p></div></div></section>
  </>
}

const configCases = {
  'Transaction dispute': { route:'Payments service → Review queue', checklist:'Request details · Statement · Supporting context', target:'3 business days', approval:'Exception → Payments supervisor' },
  'Beneficiary update': { route:'Client service → Account maintenance', checklist:'Designation form · Identity context · Account authority', target:'2 business days', approval:'Permitted update → Authorized reviewer' },
  'Claims-status inquiry': { route:'Claims service → Status queue', checklist:'Policy context · Claim reference · Contact preference', target:'1 business day', approval:'Restricted status → Claims supervisor' },
}

function Configuration() {
  const [selected,setSelected]=useState<keyof typeof configCases>('Transaction dispute')
  const c=configCases[selected]
  return <section className="bg-slate-50"><div className="section-wrap"><SectionHead eyebrow="Configuration studio" title="Shape case behavior around approved operating rules." copy="Illustrative configuration experience. Production settings require institutional design, testing, and governance." />
    <div className="mt-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-panel lg:grid-cols-[.72fr_1.28fr]"><div className="bg-ink p-7 text-white"><Settings2 className="text-cyan"/><label className="mt-6 block text-xs font-bold uppercase tracking-wider text-cyan">Case type<select value={selected} onChange={e=>setSelected(e.target.value as keyof typeof configCases)} className="field mt-2 !border-slate-600 !bg-navy !text-white">{Object.keys(configCases).map(x=><option key={x}>{x}</option>)}</select></label><div className="mt-7 space-y-3 text-sm">{['Intake questions','Required information','Document checklists','Queues & routing','Service targets','Escalation thresholds','Approval authority','Exception paths','Task templates','Correspondence templates','Customer-visible statuses','Role permissions','Retention rules','Reports & dashboards','Integration mappings'].map(x=><div key={x} className="flex items-center justify-between border-b border-slate-700 pb-2"><span>{x}</span><Check size={15} className="text-cyan"/></div>)}</div></div>
      <div className="p-7 sm:p-9"><Pill>Illustrative preview</Pill><h3 className="mt-4 font-display text-2xl font-bold">{selected}</h3><div className="mt-7 grid gap-4 sm:grid-cols-2">{Object.entries({Routing:c.route,'Required checklist':c.checklist,'Service target':c.target,'Approval path':c.approval}).map(([a,b])=><div key={a} className="rounded-xl border border-slate-200 p-5"><span className="text-xs font-bold uppercase tracking-wider text-slate-500">{a}</span><p className="mt-3 text-sm font-semibold leading-6">{b}</p></div>)}</div><div className="mt-6 flex items-center gap-3 rounded-xl bg-mist p-4 text-sm"><GitBranch className="shrink-0 text-teal"/><span>Changing the case type updates the routing, checklist, target, and approval pattern.</span></div></div>
    </div>
  </div></section>
}

function Adoption() {
  const [active,setActive]=useState(0)
  const phases=[
    ['Establish the service core',['Select priority case types','Configure intake and queues','Establish the case record','Define service targets','Introduce staff workspaces']],
    ['Connect customer experiences',['Add portal or mobile intake','Enable document submission','Provide permitted status visibility','Configure communications','Introduce callback workflows where needed']],
    ['Integrate operations',['Connect core business systems','Add document repositories','Coordinate approvals','Strengthen exception handling','Expand operational reporting']],
    ['Improve and extend',['Add case types','Refine workflows','Introduce governed AI assistance','Expand analytics','Continue operational optimization']],
  ]
  return <section id="adoption"><div className="section-wrap"><SectionHead eyebrow="Modular adoption" title="Begin with a defined service need and extend the product over time." copy="This sequence is illustrative and should reflect the institution’s technology environment, business priorities, and change capacity." />
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{phases.map(([name,items],i)=><button key={name as string} onClick={()=>setActive(i)} className={`rounded-2xl border p-5 text-left transition ${active===i?'border-teal bg-ink text-white shadow-panel':'border-slate-200 hover:border-teal'}`}><span className={`text-xs font-bold ${active===i?'text-cyan':'text-teal'}`}>PHASE {i+1}</span><h3 className="mt-2 font-display text-lg font-bold">{name as string}</h3>{active===i&&<ul className="mt-5 space-y-3">{(items as string[]).map(x=><li key={x} className="flex gap-2 text-sm text-slate-300"><Check size={15} className="mt-0.5 shrink-0 text-cyan"/>{x}</li>)}</ul>}</button>)}</div>
  </div></section>
}

function ProductModelWhy() {
  const models=[
    ['Product subscription','Reusable BFSI case types, workflows, portal patterns, role-based experiences, routing logic, reports, dashboards, integration patterns, product documentation, and planned product updates.'],
    ['Implementation services','Discovery, configuration, approved integrations, data migration, testing, training, security preparation, deployment, and organizational readiness.'],
    ['Managed services','Production support, monitoring, release coordination, reporting assistance, workflow enhancements, integration support, and operational optimization.'],
  ]
  const why=[['BFSI-oriented case patterns','Start from case patterns shaped for banking, lending, wealth, and insurance service operations.'],['Connected customer & operational context','Bring permitted relationship, product, document, interaction, and case information into the work view.'],['Configurable workflows & controls','Reflect service targets, approvals, exceptions, escalation rules, and role authority.'],['Salesforce financial-services foundation','Use Financial Services Cloud and Service Cloud as the application foundation for case coordination.'],['Modular adoption','Introduce selected use cases and expand as operating priorities and readiness evolve.'],['Governed AI assistance','Prepare and organize information while retaining staff review, source context, and recorded actions.']]
  return <><section className="bg-slate-50"><div className="section-wrap"><SectionHead eyebrow="Product & delivery model" title="A reusable product, configured and operated for the institution." /><div className="mt-10 grid gap-5 lg:grid-cols-3">{models.map(([a,b],i)=><div key={a} className={`rounded-2xl p-6 ${i===0?'bg-ink text-white shadow-panel':'border border-slate-200 bg-white'}`}><span className={`text-xs font-bold uppercase tracking-wider ${i===0?'text-cyan':'text-teal'}`}>0{i+1}</span><h3 className="mt-3 font-display text-xl font-bold">{a}</h3><p className={`mt-4 text-sm leading-7 ${i===0?'text-slate-300':'text-slate-600'}`}>{b}</p></div>)}</div></div></section>
  <section><div className="section-wrap"><SectionHead eyebrow="Why MTX Case Management for BFSI" title="Purpose-built coordination for financial-service operations." /><div className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">{why.map(([a,b])=><div key={a}><span className="grid size-11 place-items-center rounded-xl bg-mist"><FileCheck2 className="text-teal" size={21}/></span><h3 className="mt-4 font-display text-lg font-bold">{a}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{b}</p></div>)}</div></div></section></>
}

function FinalCTA({ openDemo }: { openDemo:()=>void }) {
  return <section className="bg-ink text-white"><div className="section-wrap text-center"><p className="eyebrow !text-cyan">Explore the product</p><h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold tracking-[-.04em] sm:text-5xl">Create a clearer path from customer request to documented resolution.</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">Explore how MTX Case Management for BFSI can coordinate service workflows, connect relevant information, and give customers and operations teams better visibility into case progress.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button onClick={openDemo}>Request a Product Demonstration</Button><a href="#adoption" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-600 px-5 py-3 text-sm font-bold hover:border-cyan hover:text-cyan">Discuss Your Service Modernization Roadmap</a></div></div></section>
}

function DemoModal({ open, onClose }: { open:boolean; onClose:()=>void }) {
  const dialog=useRef<HTMLDivElement>(null)
  const close=useRef<HTMLButtonElement>(null)
  const [submitted,setSubmitted]=useState(false)
  const [error,setError]=useState('')
  useEffect(()=>{if(!open)return; const previous=document.activeElement as HTMLElement; document.body.style.overflow='hidden'; window.setTimeout(()=>close.current?.focus(),0); const key=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose(); if(e.key==='Tab'){const items=dialog.current?.querySelectorAll<HTMLElement>('button,input,select,textarea');if(!items?.length)return;const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}};document.addEventListener('keydown',key);return()=>{document.body.style.overflow='';document.removeEventListener('keydown',key);previous?.focus()}},[open,onClose])
  if(!open)return null
  const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();const fd=new FormData(e.currentTarget);if(!String(fd.get('email')).includes('@')){setError('Enter a valid work email address.');return}setError('');setSubmitted(true)}
  return <div className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-ink/80 p-4" role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}>
    <div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="demo-title" className="my-6 w-full max-w-3xl rounded-2xl bg-white shadow-2xl">
      <div className="flex items-start justify-between border-b border-slate-200 p-5 sm:p-7"><div><p className="eyebrow">Product demonstration</p><h2 id="demo-title" className="mt-2 font-display text-2xl font-bold">{submitted?'Thank you for your interest.':'Tell us about your service priorities.'}</h2></div><button ref={close} onClick={onClose} className="grid size-11 place-items-center rounded-lg border border-slate-300 hover:border-teal" aria-label="Close dialog"><X size={20}/></button></div>
      {submitted?<div className="p-8 text-center sm:p-12"><span className="mx-auto grid size-16 place-items-center rounded-full bg-mist"><Check size={30} className="text-teal"/></span><h3 className="mt-5 font-display text-2xl font-bold">Demonstration request complete</h3><p className="mx-auto mt-3 max-w-lg leading-7 text-slate-600">This prototype did not send or retain your information. In a production experience, the next step would be a confirmation and follow-up process.</p><Button onClick={onClose} secondary>Return to the product</Button></div>:
      <form onSubmit={submit} noValidate className="p-5 sm:p-7"><p className="mb-6 rounded-lg bg-mist p-3 text-sm">Prototype only: submitted information is neither sent nor retained.</p><div className="grid gap-4 sm:grid-cols-2">{[['name','Name','Your name','text'],['organization','Organization','Organization name','text'],['email','Work email','name@organization.com','email'],['role','Role','Your role','text']].map(([n,l,p,t])=><label key={n} className="label">{l}<input className="field mt-2" name={n} type={t} placeholder={p} required aria-required="true"/></label>)}<label className="label">Industry segment<select name="industry" className="field mt-2" required><option value="">Select one</option><option>Banking and lending</option><option>Wealth and financial services</option><option>Insurance</option></select></label><label className="label">Primary case-management need<input className="field mt-2" name="need" placeholder="e.g., dispute servicing" required/></label><label className="label">Current customer-service platform<input className="field mt-2" name="platform" placeholder="Platform or mixed tools"/></label><label className="label">Approximate monthly case volume<select name="volume" className="field mt-2"><option>Prefer not to say</option><option>Under 1,000</option><option>1,000–10,000</option><option>10,000–50,000</option><option>More than 50,000</option></select></label><label className="label sm:col-span-2">Optional message<textarea className="field mt-2 min-h-24" name="message" placeholder="Share relevant goals or constraints."/></label></div>{error&&<p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm font-semibold text-red-800">{error}</p>}<div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end"><Button onClick={onClose} secondary>Cancel</Button><Button type="submit">Complete request <ArrowRight size={16}/></Button></div></form>}
    </div>
  </div>
}

function Footer() {
  return <footer className="border-t border-slate-800 bg-ink text-slate-400"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-9 sm:px-8 md:flex-row md:items-center"><div><span className="font-display text-xl font-bold text-white">MTX</span><p className="mt-2 text-sm">Case Management for BFSI</p></div><div className="text-xs leading-5 md:text-right"><p>Prototype uses fictional information and illustrative product views.</p><p>© {new Date().getFullYear()} MTX. Product demonstration concept.</p></div></div></footer>
}

export default function App() {
  const [industry,setIndustry]=useState<IndustryKey>('banking')
  const [demoOpen,setDemoOpen]=useState(false)
  return <><Header openDemo={()=>setDemoOpen(true)}/><main id="top"><Hero openDemo={()=>setDemoOpen(true)}/><Challenges/><IndustrySelector industry={industry} setIndustry={setIndustry}/><Lifecycle/><ExperiencesCapabilities/><Workspace industry={industry} setIndustry={setIndustry}/><CustomerPortal industry={industry}/><OmnichannelAI/><Analytics industry={industry}/><Architecture/><SecurityIntegrations/><Configuration/><Adoption/><ProductModelWhy/><FinalCTA openDemo={()=>setDemoOpen(true)}/></main><Footer/><DemoModal open={demoOpen} onClose={()=>setDemoOpen(false)}/></>
}
