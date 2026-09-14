export type IndustryKey = 'banking' | 'wealth' | 'insurance'

export const industries = {
  banking: {
    label: 'Banking & lending',
    description: 'Coordinate account, payment, card, loan, and mortgage service work across customer-facing and operations teams.',
    personas: ['Account holder', 'Service representative', 'Lending specialist', 'Operations supervisor'],
    caseTypes: ['Account opening support', 'Account maintenance', 'Transaction dispute', 'Card or payment inquiry', 'Suspected fraud investigation', 'Loan application inquiry', 'Mortgage servicing request', 'Payment assistance', 'Document request', 'Complaint management'],
    metric: 'Transaction disputes',
  },
  wealth: {
    label: 'Wealth & financial services',
    description: 'Support client, advisor, transfer, distribution, documentation, and compliance-related service workflows.',
    personas: ['Client', 'Advisor', 'Service associate', 'Compliance reviewer'],
    caseTypes: ['Client onboarding', 'Account transfer', 'Beneficiary update', 'Service request', 'Document review', 'Advisor support', 'Distribution request', 'Suitability-document follow-up', 'Complaint or escalation', 'Compliance-related review'],
    metric: 'Account service requests',
  },
  insurance: {
    label: 'Insurance',
    description: 'Connect policy, billing, claims-status, document, beneficiary, and appeal service activity.',
    personas: ['Policyholder', 'Service representative', 'Claims service specialist', 'Operations supervisor'],
    caseTypes: ['Policy inquiry', 'Coverage-information request', 'Policy change', 'Billing question', 'Claims status', 'Supporting-document request', 'Adjuster assignment', 'Beneficiary service', 'Complaint or appeal', 'Compliance-related review'],
    metric: 'Claims-status inquiries',
  },
} satisfies Record<IndustryKey, { label: string; description: string; personas: string[]; caseTypes: string[]; metric: string }>

export const challenges = [
  { title: 'Requests arrive through disconnected channels', problem: 'Requests may enter through phone, email, web forms, branches, advisors, mobile applications, or partner systems without a consistent intake process.', people: 'Customers, contact center staff, branch teams, and operations queues.', effect: 'Incomplete intake and routing exceptions can delay the next step.', response: 'Capture authorized requests through multiple channels and route them into configured case types and queues.', measures: ['Requests by channel', 'Routing exceptions', 'Abandoned interactions', 'Intake completeness'] },
  { title: 'Customer information is spread across systems', problem: 'Service teams may search core systems, document repositories, email, spreadsheets, and departmental tools.', people: 'Service representatives, specialists, reviewers, and supervisors.', effect: 'Staff may spend time assembling context or work with incomplete information.', response: 'Present relevant customer, account, policy, transaction, interaction, and document information through approved integrations.', measures: ['Connected systems', 'Information retrieval time', 'Missing-data exceptions', 'Integration failures'] },
  { title: 'Ownership becomes unclear during handoffs', problem: 'Cases involving front-office, operations, risk, compliance, claims, or external parties can lose momentum as work moves between teams.', people: 'Front-office teams, specialists, managers, and external participants.', effect: 'Queue age and overdue tasks may increase when ownership is unclear.', response: 'Use assignments, tasks, handoff rules, escalation paths, approvals, and ownership history to coordinate work.', measures: ['Case transfers', 'Queue age', 'Overdue tasks', 'Escalation frequency'] },
  { title: 'Customers have limited status visibility', problem: 'Customers may call repeatedly because they cannot see whether information was received or what action is required.', people: 'Customers, policyholders, service teams, and contact centers.', effect: 'Repeat contacts can add work and make next steps harder to follow.', response: 'Provide secure digital status, document submission, messaging, and next-step information according to institutional policy.', measures: ['Status inquiries', 'Digital submissions', 'Pending customer actions', 'Repeat contacts'] },
  { title: 'Policies are applied inconsistently', problem: 'Service targets, evidence requirements, approvals, and exception paths may vary by line of business or service team.', people: 'Operations staff, approvers, quality teams, and customers.', effect: 'Variation can create rework, approval delays, and workflow deviations.', response: 'Configure case types, required information, routing rules, approval authority, service targets, and exception workflows.', measures: ['Policy exceptions', 'Reopened cases', 'Overdue approvals', 'Workflow deviations'] },
  { title: 'Leaders lack timely operational insight', problem: 'Management reports may not show emerging case volume, aging, workload, recurring issues, or service bottlenecks.', people: 'Supervisors, operations leaders, executives, and platform owners.', effect: 'Leaders may identify workload and service issues later than desired.', response: 'Provide role-based dashboards using agreed case definitions, statuses, service measures, and source data.', measures: ['Open cases', 'Aging', 'Backlog', 'Service-target attainment'] },
]

export const lifecycle = [
  { name: 'Receive', what: 'Accept requests through approved phone, email, portal, mobile, branch, advisor, API, and partner channels.', people: 'Customers, representatives, branch teams', capabilities: 'Guided intake, channel context, duplicate indicators', controls: 'Identity context, consent, permitted channel', measures: 'Intake completeness, requests by channel' },
  { name: 'Understand', what: 'Identify the customer and case type, capture the request, and determine required information or next steps.', people: 'Service representatives, intake specialists', capabilities: 'Customer context, case classification, document checklist', controls: 'Required fields, data minimization, source traceability', measures: 'Missing information, reclassification rate' },
  { name: 'Assign', what: 'Route based on product, geography, relationship, request type, expertise, priority, and workload.', people: 'Queue managers, specialists, supervisors', capabilities: 'Routing rules, queues, workload views', controls: 'Role permissions, priority rules, ownership history', measures: 'Queue age, transfers, assignment exceptions' },
  { name: 'Investigate & fulfill', what: 'Review related information, coordinate tasks, obtain documents, and complete the permitted service activity.', people: 'Operations specialists, investigators, service teams', capabilities: 'Tasks, timeline, evidence, collaboration', controls: 'Case-level access, evidence history, separation of duties', measures: 'Task age, document requests, exceptions' },
  { name: 'Review & approve', what: 'Route exceptions and consequential actions to personnel with the appropriate authority.', people: 'Authorized approvers, compliance and quality teams', capabilities: 'Approval paths, exception queues, decision records', controls: 'Approval authority, human review, override capture', measures: 'Approval age, returns, exceptions' },
  { name: 'Communicate', what: 'Provide updates, request information, issue approved correspondence, and explain the resolution through authorized channels.', people: 'Service teams, customers, policyholders', capabilities: 'Templates, messages, preferences, portal status', controls: 'Approved content, disclosure policy, communication record', measures: 'Pending customer actions, repeat contacts' },
  { name: 'Resolve & learn', what: 'Record the outcome, complete quality checks, retain case history, and examine aggregated patterns.', people: 'Operations staff, quality teams, leaders', capabilities: 'Resolution codes, quality review, analytics', controls: 'Retention, audit history, quality gates', measures: 'Resolution time, reopened cases, recurrence' },
]

export const roles = [
  ['Customers & policyholders', 'Initiate a request, upload documents, complete assigned steps, monitor permitted status information, and receive communications.'],
  ['Service representatives', 'Identify the customer, review interaction history, create or update a case, gather information, and coordinate the next step.'],
  ['Operations specialists', 'Work from assigned queues, review supporting evidence, complete tasks, manage exceptions, and document actions.'],
  ['Investigators & reviewers', 'Assemble relevant source information, record analysis, coordinate review steps, and refer decisions to authorized personnel.'],
  ['Supervisors', 'Monitor volume, aging, workloads, escalations, service targets, and cases requiring management attention.'],
  ['Compliance & quality teams', 'Review case history, source information, approval records, correspondence, corrections, and exceptions.'],
  ['Executives', 'View trends across products, channels, case types, customer segments, and operational teams.'],
  ['Administrators', 'Configure permitted case types, routing, templates, access, integrations, dashboards, and retention settings.'],
]

export const capabilities = [
  ['Omnichannel intake', ['Contact center intake', 'Email-to-case', 'Web and mobile submissions', 'Branch or advisor referrals', 'API-created cases', 'Guided intake', 'Identity-context handoff', 'Duplicate-case indicators']],
  ['Customer & account context', ['Customer profile', 'Household and relationship context', 'Account and product summary', 'Policy information', 'Relevant transaction history', 'Interaction timeline', 'Related cases', 'Authorized-party relationships']],
  ['Workflow & service management', ['Configurable case types', 'Queues and assignments', 'Tasks and checklists', 'Service-level timers', 'Escalation rules', 'Approval routing', 'Exception handling', 'Correspondence workflows']],
  ['Document & evidence management', ['Document requests', 'Secure uploads', 'Document classification', 'Required-document checklists', 'Evidence linking', 'Version history', 'Reviewer notes', 'Retention configuration']],
  ['Investigation & decision support', ['Related-case analysis', 'Timeline reconstruction', 'Configurable review steps', 'Evidence summaries', 'Exception indicators', 'Analyst collaboration', 'Human review', 'Decision and override history']],
  ['Analytics & administration', ['Case-volume dashboards', 'Aging and backlog views', 'Workload management', 'Service-target monitoring', 'Recurring-issue analysis', 'Configuration management', 'Integration monitoring', 'Audit history']],
]

export const scenarios = {
  banking: {
    label: 'Banking transaction dispute', person: 'Jordan Lee', initials: 'JL', ref: 'CASE-B-1048', product: 'Everyday checking ·••• 014', status: 'Information review', priority: 'Standard', target: '1d 6h remaining', team: 'Payments service', description: 'Customer reports an unfamiliar card-present purchase and requests a review.', documents: ['Customer statement.pdf', 'Purchase details.pdf'], tasks: ['Validate intake details', 'Review supporting information', 'Prepare customer update'], exception: 'Merchant detail not yet received', next: 'Request merchant details', timeline: ['Request submitted through portal', 'Identity context confirmed', 'Statement received', 'Case assigned to payments service'], portalStatus: 'Under review', portalNext: 'We will send an update after the submitted information is reviewed.' },
  wealth: {
    label: 'Wealth account service request', person: 'Alex Morgan', initials: 'AM', ref: 'CASE-W-2072', product: 'Managed account ·••• 238', status: 'Documents requested', priority: 'Standard', target: '2d 3h remaining', team: 'Client service operations', description: 'Client requests a beneficiary update and needs to provide an updated designation form.', documents: ['Service request.pdf'], tasks: ['Confirm authorized party', 'Review designation form', 'Route for permitted update'], exception: 'Updated form required', next: 'Request updated form', timeline: ['Advisor referral received', 'Relationship context linked', 'Document checklist created', 'Client notification sent'], portalStatus: 'Action needed', portalNext: 'Upload the requested designation form to continue.' },
  insurance: {
    label: 'Insurance claim-status inquiry', person: 'Taylor Brooks', initials: 'TB', ref: 'CASE-I-3186', product: 'Property policy ·••• 641', status: 'Status review', priority: 'Standard', target: '7h remaining', team: 'Claims service', description: 'Policyholder asks for a permitted status update and confirmation that supporting photos were received.', documents: ['Supporting photos.zip', 'Submission receipt.pdf'], tasks: ['Confirm document receipt', 'Check customer-visible status', 'Prepare approved update'], exception: 'None open', next: 'Prepare status update', timeline: ['Inquiry received by contact center', 'Policy context linked', 'Document receipt confirmed', 'Assigned to claims service'], portalStatus: 'Status update in progress', portalNext: 'No additional information is requested at this time.' },
} satisfies Record<IndustryKey, Record<string, string | string[]>>
