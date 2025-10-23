import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-[#2A2D3A] rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#00A9CE] mb-4">{title}</h2>
        <div className="text-gray-300 space-y-4 prose prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-gray-100 prose-code:text-amber-300 prose-code:before:content-none prose-code:after:content-none prose-code:bg-[#34384A] prose-code:rounded prose-code:p-1 prose-code:font-mono">
            {children}
        </div>
    </div>
);

const ContextEngineeringPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-[#00A9CE] mb-2">Context Engineering</h1>
            <p className="text-gray-400 mb-8">Understanding and managing the "context window" is fundamental to building effective AI-powered applications.</p>

            <Section title="The Basics: What is a Context Window?">
                <p>
                    A large language model (LLM) doesn't have long-term memory like a human. Its entire "short-term memory" for a given interaction is the <strong>context window</strong>. This is a fixed-size buffer that holds the text sent to the model.
                </p>
                <p>
                    Everything—system instructions, user prompts, conversation history, and any provided documents—must fit into this window. The model can only "see" and reason about the information inside it. Once information scrolls out of the window, it's forgotten.
                </p>
                <div className="bg-[#181B24] p-4 rounded-lg my-4 flex items-center space-x-4">
                    <div className="text-4xl">🪟</div>
                    <div className="flex-1">
                        <div className="h-8 bg-gradient-to-l from-[#00A9CE] to-[#34384A] rounded-md flex items-center justify-end px-2">
                            <span className="text-sm font-mono text-white">tokens...</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1 text-center">The context window holds a finite number of tokens (words/sub-words).</p>
                    </div>
                </div>
            </Section>

            <Section title="Context in Chatbots: Managing Conversation History">
                <p>
                    To create the illusion of a continuous conversation, chatbot applications must manually manage the context window on each turn.
                </p>
                <ol>
                    <li><strong>User Message:</strong> The user sends a new message.</li>
                    <li><strong>Context Construction:</strong> The application takes the new message and prepends it with a summary or the last N messages from the conversation history.</li>
                    <li><strong>API Call:</strong> This entire constructed text (history + new message) is sent to the LLM API.</li>
                    <li><strong>Model Response:</strong> The LLM generates a response based on the full context provided.</li>
                    <li><strong>History Update:</strong> The new user message and the model's response are added to the conversation history. If the history exceeds a certain length, the oldest messages are dropped or summarized.</li>
                </ol>
                <p>
                    This is why a long conversation can sometimes feel like the chatbot "forgets" earlier details—those details have been pushed out of the context window sent in the API request.
                </p>
            </Section>
            
            <Section title="Context in Code Editors: The Cursor Example">
                <p>
                    Advanced tools like IDE extensions (e.g., Cursor, GitHub Copilot) perform sophisticated context engineering to provide relevant code assistance. The context is much more than just the conversation history.
                </p>
                <p>
                    The main context source is often the user's <strong>cursor position</strong>. The editor gathers context from various sources, prioritizing what's most relevant to the code being written:
                </p>
                <ul>
                    <li><strong>Current File:</strong> Code surrounding the cursor (above and below) is given the highest priority.</li>
                    <li><strong>Open Tabs:</strong> Other open files in the editor are often included, as they are likely related to the current task.</li>
                    <li><strong>Project-Wide Search:</strong> For more complex queries ("@-mentions" of files/symbols), the tool might use embeddings or search to find relevant code snippets from the entire project (e.g., function definitions, class implementations).</li>
                    <li><strong>User's Instructions:</strong> The explicit prompt or question from the user.</li>
                </ul>
                <div className="bg-[#181B24] p-4 rounded-lg mt-4 text-center">
                    <p className="font-mono text-[#00A9CE]">Final Prompt Sent to LLM</p>
                    <div className="mt-2 text-left space-y-2 text-sm">
                        <div className="bg-[#34384A] p-2 rounded"><strong>[Instruction]:</strong> "Refactor this function to be async"</div>
                        <div className="bg-[#34384A] p-2 rounded"><strong>[File Context: `api.ts`]:</strong> Code around the cursor...</div>
                        <div className="bg-[#34384A] p-2 rounded"><strong>[File Context: `types.ts`]:</strong> Relevant type definitions from an open tab...</div>
                        <div className="bg-[#34384A] p-2 rounded"><strong>[Project Context: `db.ts`]:</strong> The `getUser` function definition found via search...</div>
                    </div>
                </div>
                <p>
                    Effective context engineering is the "secret sauce" of these tools, making them feel like they truly understand the codebase.
                </p>
            </Section>
        </div>
    );
};

export default ContextEngineeringPage;