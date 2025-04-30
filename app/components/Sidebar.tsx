'use client';

type SidebarProps = {
  selectedWorkflow: string | null;
  setSelectedWorkflow: (name: string) => void;
};

const workflows = [
  { name: 'Resume Builder', icon: '📝' },
  { name: 'PDF Summarizer', icon: '📄' },
  // Add more workflows here
];

export function Sidebar({ selectedWorkflow, setSelectedWorkflow }: SidebarProps) {
  return (
    <nav className="w-full text-white flex flex-col">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-2xl font-semibold text-purple-400">Workflows</h2>
      </div>
      <ul>
        {workflows.map((workflow) => (
          <li key={workflow.name} className="mb-4">
            <button
              onClick={() => setSelectedWorkflow(workflow.name)}
              className={`flex items-center w-full py-3 px-4 rounded-md text-lg font-medium transition-all duration-200 ${
                selectedWorkflow === workflow.name
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:bg-purple-700 hover:text-white'
              }`}
            >
              <span className="mr-2">{workflow.icon}</span>
              {workflow.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
