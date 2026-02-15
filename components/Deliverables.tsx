const deliverables = [
  {
    title: 'Governance & Compliance Pack',
    items: [
      'Organization-wide RACI matrix',
      'PMO operating model',
      'Risk & issue register (RAID log)',
      'Decision-making workflow',
      'Audit trail structure',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Systems Architecture Blueprint',
    items: [
      'Current-state system map',
      'Target architecture design',
      'ERP/CRM selection report',
      'Integration roadmap',
      'Data governance policy',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: 'Financial & Delivery Control Models',
    items: [
      'Budget tracking framework',
      'Cost control dashboard',
      'Project financial templates',
      'Vendor evaluation model',
      'Procurement workflow',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'PMO & Delivery Toolkit',
    items: [
      'PMO playbook',
      'Project lifecycle templates',
      'Sprint and milestone structure',
      'Delivery KPI framework',
      'Executive reporting template',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 21V3" />
      </svg>
    ),
  },
  {
    title: 'Automation & AI Stack',
    items: [
      'Process automation map',
      'Manual process reduction plan',
      'Automation tools selection',
      'AI-assisted reporting setup',
      'Data pipeline design',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: 'Investor-Ready Data Room',
    items: [
      'Due diligence checklist',
      'Structured data room layout',
      'KPI reporting model',
      'Governance documentation pack',
      'Technical architecture summary',
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
  },
]

export default function Deliverables() {
  return (
    <section id="deliverables" className="py-20 md:py-28 lg:py-36 bg-[#fafafa]">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
            What You Get
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Your Complete{' '}
            <span className="gradient-text-animated">
              Investor-Ready
            </span>{' '}
            Operations Pack
          </h2>
          <p className="text-muted text-base md:text-lg">
            No theory, no slide decks. You leave with concrete systems, models,
            and documentation.
          </p>
        </div>

        {/* Deliverables grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((deliverable, index) => (
            <div key={index} className="card-neu">
              <div className="card-neu-inner flex flex-col">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {deliverable.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-dark leading-snug">
                    {deliverable.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-2.5">
                  {deliverable.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-[#4b5563] text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-primary mt-0.5 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
